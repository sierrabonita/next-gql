import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { readFileSync } from 'fs'
import path from 'path'
import { resolvers } from '@/graphql/resolvers'

const typeDefs = readFileSync(
  path.join(process.cwd(), './src/graphql/schema.graphql'),
  'utf8',
)

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

export const POST = startServerAndCreateNextHandler(server)
