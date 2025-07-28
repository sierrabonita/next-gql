'use client'

import { cacheExchange, createClient, fetchExchange, Provider } from 'urql'
import { Users } from '@/app/graphql-example/Users'

const client = createClient({
  url: '/api/graphql',
  exchanges: [cacheExchange, fetchExchange],
})

export default function GraphqlExamplePage() {
  return (
    <Provider value={client}>
      <Users />
    </Provider>
  )
}
