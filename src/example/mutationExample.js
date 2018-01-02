const apolloClient = require('../apolloClient')
const gqltagParser = require('../gqltagParser')

let client = apolloClient.getClient()
let addCustomerMutation = gqltagParser.getMutation('addCustomer')

client.mutate({
  mutation: addCustomerMutation,
  variables: {
    name: 'Apollo',
    lastName: 'Moon',
    mail: 'apollo-moon@google.com',
    adresses: [
      {
        street: '13 lunar street',
        city: 'london',
        zipcode: '463791'
      }
    ]
  }
}).then((data) => {
  console.log(JSON.stringify(data))
}).catch((error) => {
  console.log(error)
})
