const fs = require('fs')
const path = require('path')
const gql = require('graphql-tag')

module.exports = {
  getQuery: (queryName) => {
    try {
      return getGql(queryName, 'query')
    } catch (error) {
      throw error
    }
  },
  getMutation: (mutationName) => {
    try {
      return getGql(mutationName, 'mutation')
    } catch (error) {
      throw error
    }
  }
}

const getGql = (gqlName, type) => {
  let schemaPath = path.join(__dirname, 'gqltag', `${gqlName}.${type}.gql`)
  try {
    return gql(fs.readFileSync(schemaPath, 'utf8'))
  } catch (error) {
    throw error
  }
}