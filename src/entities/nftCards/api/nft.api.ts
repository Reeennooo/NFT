import type {NftCardResponse} from 'entities/nftCards/model/types.ts';
import {baseApi} from 'shared/store';

export const nftApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNftsList: builder.query<NftCardResponse[], void>({
      query: () => '/nfts/list',
    }),
  }),
  overrideExisting: false,
});

export const { useGetNftsListQuery } = nftApi;