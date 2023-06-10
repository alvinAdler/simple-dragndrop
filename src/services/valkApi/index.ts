import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetValkResponse, Valkyrie } from './types'

export const valkApi = createApi({
  reducerPath: "valkApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getValks: builder.query<Valkyrie[][], undefined>({
      query: () => "/list",
      transformResponse: (response: GetValkResponse[]) => {
        return response.map((item) => item.list)
      }
    }),
    addValk: builder.mutation({
      query: (valk: Valkyrie[]) => ({
        url: "/list",
        method: "POST"
      })
    })
  })
})

export const { useGetValksQuery } = valkApi
