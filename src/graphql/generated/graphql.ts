import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type Query = {
  __typename?: 'Query'
  users: Array<User>
}

export type User = {
  __typename?: 'User'
  email: Scalars['String']['output']
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
}

export type UsersQueryVariables = Exact<{ [key: string]: never }>

export type UsersQuery = {
  __typename?: 'Query'
  users: Array<{ __typename?: 'User'; id: string; name: string; email: string }>
}

export const UsersDocument = gql`
  query Users {
    users {
      id
      name
      email
    }
  }
`

export function useUsersQuery(
  options?: Omit<Urql.UseQueryArgs<UsersQueryVariables>, 'query'>,
) {
  return Urql.useQuery<UsersQuery, UsersQueryVariables>({
    query: UsersDocument,
    ...options,
  })
}
