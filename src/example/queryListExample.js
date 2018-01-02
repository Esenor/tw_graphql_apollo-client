const apolloClient = require('../apolloClient')
const gqltagParser = require('../gqltagParser')

let client = apolloClient.getClient()
let listCustomersQuery = gqltagParser.getQuery('listCustomers')

client.query({
  query: listCustomersQuery
}).then((data) => {
  console.log(JSON.stringify(data))
}).catch((error) => {
  console.log(error)
})
