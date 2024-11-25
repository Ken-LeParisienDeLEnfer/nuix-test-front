import { api } from './api';

export const imageApi = api.injectEndpoints({
    endpoints: build => ({
        imageGetById: build.query<string, string>({
            query: id => ({
                url: `/image/${id}`,
                responseHandler: (response) => response.blob()
         }),
        transformResponse: (response: Blob) => URL.createObjectURL(response),
    }),
  }),
});

export const { useImageGetByIdQuery } = imageApi;

export const {
    endpoints: { imageGetById },
} = imageApi;