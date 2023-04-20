interface Todo {
  id: number;
  title: string;
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const data: Todo[] = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
export default function Todo(props: {data:Todo[]}) {
  return (
    <div>
      {props.data.map(todo => (<p key={todo.id}>{todo.id} {todo.title}</p>))}
    </div>
  )
}
