import useSWR from 'swr'
const Index = () => {

  const { data } = useSWR('/api/contacts')

  console.log(data)

  if (!data) return <p>Loading...</p>

  return (
    <div>
      <h1>Olá LiveClass FaunaDB</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  )
}

export default Index;