import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetValkResponse, Valkyrie } from './types'
import { randomInt } from '../../utilities/functions'

export const valkApi = createApi({
  reducerPath: "valkApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  tagTypes: ["Valks"],
  endpoints: (builder) => ({
    getValks: builder.query<GetValkResponse[], undefined>({
      query: () => "/list",
      providesTags: ["Valks"],
    }),
    addValk: builder.mutation({
      query: (valk: Omit<Valkyrie, "id">) => ({
        url: "/list",
        method: "POST",
        body: {
          id: `RANDOMID-${randomInt({min: 500, max: 1000})}`,
          list: [
            {
              imageUrl: valk.imageUrl,
              title: valk.title,
              desc: valk.desc,
              type: valk.type,
              id: `RANDOMID-${randomInt({min: 500, max: 1000})}-${randomInt({max: 100})}`
            }
          ]
        },
      }),
      invalidatesTags: ["Valks"]
    }),
    deleteValkRow: builder.mutation({
      query: (valkId: string) => ({
        url: `/list/${valkId}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Valks"]
    })
  })
})

export const { useGetValksQuery, useAddValkMutation, useDeleteValkRowMutation } = valkApi
