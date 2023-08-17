import IData from "@/interfaces/IData";
import Hero from "./components/Hero";
import Events from "./components/Events";
import About from "./components/About";

export default async function HomePage() {

  async function getData() {
    const res = await fetch('https://api.franciskahajdu.de/data.json')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

  const data: IData = await getData();

  return (
    <main className="">
      <Hero data={data} />
      <About data={data} />
      <Events data={data}/>
    </main>
  )
}
