const apolloClient = require('../apolloClient')
const gqltagParser = require('../gqltagParser')

let client = apolloClient.getClient()
let listCustomersQuery = gqltagParser.getQuery('getCustomer')

client.query({
  query: listCustomersQuery,
  variables: {
    mail: 'apollo-moon@google.com'
  }
}).then((data) => {
  console.log(JSON.stringify(data))
}).catch((error) => {
  console.log(error)
})
