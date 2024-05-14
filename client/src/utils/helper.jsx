import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_BROKERS, GET_BROKER, GET_ALL_REFERRALS_BROKERS, GET_REFERRAL, GET_ALL_REFERRALS, GET_REFERRAL_BY_LINKID } from './queries.jsx';

export const GetAllBrokers = () => {
    const { loading, data } = useQuery(GET_ALL_BROKERS);
    if (loading) {
        return [];
    }

    return data?.brokers || [];
};

export const GetBroker = ({ brokerId }) => {
    const { loading, error, data } = useQuery(GET_BROKER, {
        variables: { brokerId },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    const { broker } = data;

    return (
        <>
            <h2>{broker.name}</h2>
        </>
    );
};

export const GetAllReferralsBrokers = () => {
    const { loading, data } = useQuery(GET_ALL_REFERRALS_BROKERS);
    if (loading) {
        return [];
    }

    const brokers = data?.brokers || [];
    const referrals = data?.referrals || [];

    return { brokers, referrals };
};

export const GetAllReferrals = () => {
    const { loading, data } = useQuery(GET_ALL_REFERRALS);
    if (loading) {
        return [];
    }

    return data?.referrals || [];
};

export const GetReferral = (referralId ) => {
    const { loading, data } = useQuery(GET_REFERRAL, {
        variables: { referralId },
    });

    if (loading) return <p>Loading...</p>;
    return data?.referral || '';
};

export const GetReferralbyLinkID = (link) => {
    const { loading, data } = useQuery(GET_REFERRAL_BY_LINKID, {
        variables: { link },
    });

    if (loading) return <p>Loading...</p>;
    return data?.referralbyLinkID || '';
};