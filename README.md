# TW_Apollo-client #

> Client for GraphQL API

## usage ##

    $ npm i
    $ npm run query
    # and/or
    $ npm run mutation

## gql tags ##

### listCustomers.query.gql ###

    query {
      customers: listCustomers {
        id,
        name,
        lastName,
        mail,
        addresses {
          id,
          street,
          city,
          zipcode
        }
      }
    }

### addCustomer.mutation.gql ###

    mutation ($name: String!, $lastName: String!, $mail: String!, $adresses: [AddressInput]) {
      addCustomer(customer: {
        name: $name,
        lastName: $lastName,
        mail: $mail,
        addresses: $adresses
      }) {
        id,
        name,
        lastName,
        mail,
        addresses {
          id,
          street,
          city,
          zipcode
        }
      }
    }