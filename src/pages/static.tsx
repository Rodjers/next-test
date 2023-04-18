
interface TimeProps {
  time: string;
}
export async function getStaticProps(): Promise<any> {
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
