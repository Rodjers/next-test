
interface TimeProps {
  time: string;
}
export async function getServerSideProps(): Promise<TimeProps> {
  const date = new Date();
  return {
    time: date.toTimeString()
  }
}
export default function Static(props: TimeProps) {
  return (<div>{props.time}</div>)

}
