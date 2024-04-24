import { gql } from '@apollo/client';

export const GET_BROKER = gql`
  query GetBroker($referralID: String!) {
    broker(referralID: $referralID) {
      _id
      name
      referralID
      email
      phoneNumber
    }
  }
`;

export const GET_ALL_BROKERS = gql`
  query GetAllBrokers {
    brokers {
      _id
      name
      referralID
      email
      phoneNumber
    }
  }
`;