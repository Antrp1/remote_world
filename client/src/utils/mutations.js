import { gql } from "@apollo/client";

export const userLogin = gql`
mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
    }
}
`;



export const userSignup = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
    }
}
`;