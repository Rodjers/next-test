import Image from "next/image";

export default function Static() {
  return (<div>
    <p>This page was preloaded</p>
    <Image src="/image.png" alt="Generig image" priority={true}/>

  </div>)
}
