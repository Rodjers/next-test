import { useState, useEffect } from 'react'

interface Todo {
  id: number;
  title: string;
}
export default function Todo() {
  const [data, setData] = useState<Todo[]>([] )
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data: Todo[]) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      {data?.map(todo => (<div key={todo.id}>
        <h1>{todo.id}</h1>
        <p>{todo.title}</p>
      </div>))}
    </div>
  )
}
