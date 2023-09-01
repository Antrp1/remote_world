/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import "semantic-ui-css/semantic.min.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { motion } from "framer-motion";
import ContactUs from "./Segments/ContactUs";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Jobs from "./Pages/Jobs";
import NavBar from "./Segments/NavBar";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
// Construct our main GraphQL API endpoint

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
        <ContactUs />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
