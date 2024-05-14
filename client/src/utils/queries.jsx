import { gql } from '@apollo/client';

export const GET_BROKER = gql`
  query GetBroker($brokerId: String!) {
    broker(brokerId: $brokerId) {
      _id
      name
      brokerID
      email
      phoneNumber
      referrals {
        _id
        company
        linkID
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
      brokerID
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
      linkID
      logo
      application
    }
    brokers {
      _id
      name
      brokerID
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
      linkID
      logo
      application
    }
  }
`;

export const GET_REFERRAL_BY_LINKID = gql`
  query GetReferralbyLinkID($link: String!) {
    referralbyLinkID(link: $link) {
      _id
      company
      linkID
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
      linkID
      logo
      application
    }
  }
`;