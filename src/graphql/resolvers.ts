export const resolvers = {
  Query: {
    users: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      console.log('res:', res)
      return res.json()
    },
  },
}
