import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_BROKERS, GET_BROKER } from './queries.jsx';

export const GetAllBrokers = () => {
    const { loading, data } = useQuery(GET_ALL_BROKERS);
    if (loading) {
        return []; 
    }

    return data?.brokers || []; 
};

export const GetBroker = ({ referralID }) => {
    const { loading, error, data } = useQuery(GET_BROKER, {
        variables: { referralID },
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

