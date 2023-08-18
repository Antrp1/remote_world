"use strict";

const messages = document.querySelector("#messages");

class EventEmitter {
  constructor(name = "Emitter") {
    this.table = {};
    this.name = name;
  }
  on(eventName, callBack) {
    let temp = this.table[eventName];
    if (temp) {
      temp.push(callBack);
    } else {
      this.table[eventName] = [callBack];
    }
    let log_message = `added event ${eventName} to ${this.name}`;
    console.log(log_message);
  }
  emit(eventName, ...args) {
    if (eventName == undefined) return console.error("DONT EMIT UNDEFINED", args);
    this.table[eventName]?.forEach((callBack) => callBack(...args));
    let log_message = `finished emitting event ${eventName} using ${this.name}`;
    console.log(log_message);
  }
  delete(eventName) {
    delete this.table[eventName];
  }
}

const eventSys = new EventEmitter();

(function () {
  if (location.pathname !== "/login") return;
  const loginForm = async (e) => {
    e.preventDefault();

    const username = document.querySelector("#login-username")?.value?.trim();
    const password = document.querySelector("#login-password")?.value?.trim();

    if (username && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        localStorage.setItem("token", JSON.stringify(await response.json()));
        document.location.replace("/");
      } else {
        alert("Error logging in");
      }
    }
  };

  const signupForm = async (e) => {
    e.preventDefault();

    const username = document.getElementById("username-signup")?.value?.trim();
    const password = document.getElementById("signup-password")?.value?.trim();

    if (username && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        localStorage.setItem("token", JSON.stringify(await response.json()));
        document.location.replace("/");
      } else {
        alert("Error signing up");
      }
    }
  };

  document.getElementById("login-form")?.addEventListener("submit", loginForm);

  document
    .getElementById("signup-form")
    ?.addEventListener("submit", signupForm);
})();

(function () {
  if (location.pathname !== "/") return;
  const logoutForm = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/login");
    } else {
      alert("Error logging out");
    }
  };

  document.getElementById("logout-btn")?.addEventListener("click", logoutForm);
})();

(function () {
  if (location.pathname !== "/") return;
  const addChannelForm = async (e) => {
    const channelName = document.querySelector("#channel-name")?.value?.trim();

    e.preventDefault();
    if (channelName) {
      let packet = JSON.stringify({
        type: "create_channel",
        data: { name: channelName },
      });
      eventSys.on("create_channel", (data) => {
        console.log(data.id, data.name);
        populateChannel(data.id)
        selectNav(
          document.querySelector("#home"),
          document.querySelector("#home-btn")
        );
        eventSys.delete("create_channel");
      });
      eventSys.emit("sendPacket", packet);
    }
  };
  document
    .querySelector("#submit-channel-btn")
    ?.addEventListener("click", addChannelForm);
})();

function selectNav(div, el) {
  document.querySelector("#home").className = "hidden";
  document.querySelector("#lobby").className = "hidden";
  document.querySelector("#add-channel").className = "hidden";
  document.querySelector("#about").className = "hidden";

  document.querySelector("#home-btn").classList.remove("active");
  document.querySelector("#discover-btn").classList.remove("active");
  document.querySelector("#create-channel-btn").classList.remove("active");
  document.querySelector("#about-us").classList.remove("active");

  document.querySelector("#home-btn").classList.remove("disabled");
  document.querySelector("#discover-btn").classList.remove("disabled");
  document.querySelector("#create-channel-btn").classList.remove("disabled");
  document.querySelector("#about-us").classList.remove("disabled");

  div.className = "";
  el.classList.add("active");
  el.classList.add("disabled");
}

(function () {
  if (location.pathname !== "/") return;

  function viewHome() {
    selectNav(
      document.querySelector("#home"),
      document.querySelector("#home-btn")
    );
  }

  function viewSearch() {
    populateChannelInfo();
  }

  function viewChannelForm() {
    selectNav(
      document.querySelector("#add-channel"),
      document.querySelector("#create-channel-btn")
    );
  }

  function aboutUs() {
    selectNav(
      document.querySelector("#about"),
      document.querySelector("#about-us")
    );
  }

  document.getElementById("about-us")?.addEventListener("click", aboutUs);
  document.querySelector("#home-btn")?.addEventListener("click", viewHome);
  document
    .querySelector("#discover-btn")
    ?.addEventListener("click", viewSearch);
  document
    .querySelector("#create-channel-btn")
    ?.addEventListener("click", viewChannelForm);
})();

(function () {
  if (location.pathname !== "/") return;

  document.querySelector("#logout-btn").classList.remove("disabled");
})();

function populateChannelInfo() {
  let packet = JSON.stringify({
    type: "public_channels",
  });

  eventSys.on("public_channels", (data) => {
    let table = document.createElement("div");

    for (let item of data.channels) {
      let divContainer = document.createElement("div");
      let li = document.createElement("div");
      let btn = document.createElement("button");
      btn.innerHTML = `join: ${item.name}`;
      btn.addEventListener("click", () => populateChannel(item.id));
      li.textContent = item.name;

      divContainer.appendChild(li);
      divContainer.appendChild(btn);
      table.appendChild(divContainer);
    }
    selectNav(
      document.querySelector("#lobby"),
      document.querySelector("#discover-btn")
    );
    document.querySelector("#channel-list").innerHTML = "";
    document.querySelector("#channel-list").appendChild(table);

    eventSys.delete("public_channels");
  });

  eventSys.emit("sendPacket", packet);
}
eventSys.on("wsconnect", populateChannelInfo);

(function () {
  if (location.pathname !== "/") return;
  const canvas = document.getElementById("canvasid");
  const ctx = canvas.getContext("2d");

  let size = 10;
  let isPressed = false;
  let x;
  let y;

  canvas.addEventListener("mousedown", (e) => {
    // isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
    // drawCircle(x, y);
    let packet = { type: "canvas", data: { x, y } };
    eventSys.emit("sendPacket", JSON.stringify(packet));
  });

  eventSys.on("canvas", (data) => {
    drawCircle(data.x, data.y);
  })

  document.addEventListener("mouseup", (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;

  });

  // canvas.addEventListener("mousemove", (e) => {
  //     if (isPressed) {
  //         const x2 = e.offsetX;
  //         const y2 = e.offsetY;

  //         // drawCircle(x2, y2);
  //         drawLine(x, y, x2, y2);

  //         x = x2;
  //         y = y2
  //     }
  // });

  function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color;
    ctx.fill();
  }

  function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2
    ctx.stroke();
  }
})();