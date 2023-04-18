
interface TimeProps {
  time: string;
}
export async function getServerSideProps(): Promise<any> {
  const date = new Date();
  return {
    props: {
      time: date.toTimeString()
    }
  }
}
export default function Static(props: TimeProps) {
  return (<div>{props.time}</div>)

}
