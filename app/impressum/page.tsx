import { Metadata } from "next"
import PageContainer from "../components/PageContainer";
import Title from "../components/Title";

export const metadata: Metadata = {
  title: 'Impressum - Franciska Hajdu'
}

export default async function ImpressumPage() {

  async function getData() {
    const res = await fetch('https://api.franciskahajdu.de/data.json')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = res.json();
    return data;
  }

  const data = await getData()

  return (
    <PageContainer>
      <Title title={data.impressum[0].pageTitle} />

      <div className="my-10">
        <p>{data.impressum[0].underTitle}</p>
        <p className="font-semibold mt-4">{data.impressum[0].name}</p>
        <p>{data.impressum[0].address}</p>
        <p>{data.impressum[0].city}</p>
        <p>{data.impressum[0].zip}</p>
        <p>{data.impressum[0].email}</p>
        <p>{data.impressum[0].handy}</p>

        <>
          {/* {data && data.map((item, index) => {
            return (
              <div key={index}>
                <h2 className="font-semibold mt-6">{item.title}</h2>
                <p className="text-justify mt-2">{item.paragraph}</p>
              </div>
            );
          })} */}
        </>
      </div>
    </PageContainer>
  )
}
