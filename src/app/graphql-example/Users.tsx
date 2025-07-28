'use client'

import { useUsersQuery } from '@/graphql/generated/graphql'

export function Users() {
  const [{ data, fetching, error }] = useUsersQuery()

  if (fetching) return <p>Loading...</p>
  if (error || !data) return <p>Error</p>

  return (
    <div>
      <h1>GraphQL Example</h1>
      <h2>Users (urql + Codegen)</h2>
      <ul>
        {data.users.map((u) => (
          <li key={u.id}>
            {u.name} ({u.email})
          </li>
        ))}
      </ul>
    </div>
  )
}
