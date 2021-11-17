const faunadb = require('faunadb')
const q = faunadb.query

const client = new faunadb.Client({
  secret: 'fnAEXr0njUAAQz9GVl99KsorW6C0deeK83w4rUwO',
  domain: "db.us.fauna.com"
})

const createContact = data => {
  return client.query(
    q.Create(
      q.Collection('contacts'),
      { data }
    )
  )
}

const getContactByRef = ref => {
  return client.query(q.Get(q.Ref(q.Collection('contacts'), ref)))
}

// getContactByRef('314897207911252032').then(ret => {
//   console.log(ret)
// })

const getAllContacts = () => {
  return client.query(
    q.Map(
      q.Paginate(
        q.Match('AllContacts'),
        { size: 2 }
      ),
      q.Lambda(x => q.Get(x))
    )
  )
}

getAllContacts()

const getContactByEmail = email => {
  return client.query(
    q.Get(
      q.Match(q.Index('contactByEmail'), [email])
    )
  )
}

// getContactByEmail("Lucascoliveira819@gmail.com").then((contato) => {
//   console.log(contato)
// }).catch((error) => {
//   console.log("error: ", error)
// })

// getAllContacts().then((all) => {
//   console.log(all)
// })

// createContact({
//   name: 'João',
//   email: 'joao@jao.com',
//   title: 'pretao'
// }).then(ret => {
//   console.log("ret: ", ret)
// }).catch(error => {
//   console.log("error: ", error)
// })

