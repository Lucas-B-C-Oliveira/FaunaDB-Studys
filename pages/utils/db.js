const faunadb = require('faunadb')

export const q = faunadb.query

export const client = new faunadb.Client({
  secret: 'fnAEXr0njUAAQz9GVl99KsorW6C0deeK83w4rUwO',
  domain: "db.us.fauna.com"
})
