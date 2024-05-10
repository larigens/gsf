import { gql } from '@apollo/client';

export const GET_BROKER = gql`
  query GetBroker($brokerId: String!) {
    broker(brokerId: $brokerId) {
      _id
      name
      referralID
      email
      phoneNumber
      referrals {
        _id
        company
        logo
        application
      }
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

export const GET_ALL_REFERRALS_BROKERS = gql`
  query GetAllReferralsBrokers {
    referrals {
      _id
      company
      logo
      application
    }
    brokers {
      _id
      name
      referralID
      email
      phoneNumber
    }
  }
`;

export const GET_REFERRAL = gql`
  query GetReferral($referralId: ID!) {
    referral(referralId: $referralId) {
      _id
      company
      logo
      application
    }
  }
`;


export const GET_ALL_REFERRALS = gql`
  query GetAllReferrals {
    referrals {
      _id
      company
      logo
      application
    }
  }
`;