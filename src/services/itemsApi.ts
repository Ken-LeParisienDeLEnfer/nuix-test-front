import { Item } from '../models/Item';
import { api } from './api';

export const itemApi = api.injectEndpoints({
    endpoints: build => ({
        itemGetAll: build.query<Item[], void>({
            query: () => ({
            url: `/items`,
        }),
        transformResponse: (response: Item[]) => response        
    }),
  }),
});

export const { useItemGetAllQuery } = itemApi;

export const {
    endpoints: { itemGetAll },
} = itemApi;
