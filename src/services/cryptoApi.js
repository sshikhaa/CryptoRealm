//logic of fetching the data from api

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '870db3ac08msh5499f765c916ea2p1a61cfjsnf1e87faf0770',
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com' }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`),
    }),

    // Note: To access this endpoint you need premium plan
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;

//const options = {
//    method: 'GET',
//    url: 'https://coinranking1.p.rapidapi.com/coins',
//    
  //  headers: {
 //     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
 //     'X-RapidAPI-Key': '870db3ac08msh5499f765c916ea2p1a61cfjsnf1e87faf0770'
 //   }
 // };

 //---------------------------------------------------------------------------------------------------------//

 /*import {createApi, CreateApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '870db3ac08msh5499f765c916ea2p1a61cfjsnf1e87faf0770'
}

const baseUrl = 

const createRequest = (url)=> ({ url , headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query : (count)=> createRequest(`/coins?limit=${count}`)
        })
    })
});

export const {
    useGetCryptosQuery, 
} = cryptoApi;
*/