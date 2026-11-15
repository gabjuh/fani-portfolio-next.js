import IData from "@/interfaces/IData";
import Hero from "./components/Hero";
import Events from "./components/Events";
import About from "./components/About";
import Videos from './components/Videos';
import Audio from "./components/Audio";
import Maintenance from "./components/Maintenance";
import { showMaintenance } from "./maintenance.server";

export default async function HomePage() {

  // TEMPORARY: website is being reworked (see maintenance.config.ts)
  if (showMaintenance()) return <Maintenance />;

  async function getData() {
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_BACKEND_API}/data.json`,
      { cache: 'no-store' }
    )
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
      {/* <Audio data={data} /> */}
      <Events data={data} />
      <Videos data={data} />
    </main>
  )
}
