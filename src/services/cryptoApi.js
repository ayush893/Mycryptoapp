import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ( { url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges')
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
          }),
    })
});

//redux toolkit create hooks that you can call to get all data instantly, give all state like loading etc

export const {
    useGetCryptosQuery,
    useGetExchangesQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi;
