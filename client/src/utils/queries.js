import { gql } from "@apollo/client";

export const userLogin = gql`
mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        user {
            username
        }
        token
    }
}
`;



