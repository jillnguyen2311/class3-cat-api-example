import Image from 'next/image'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Views from '@/components/Views'

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_API

  const url = `https://api.thecatapi.com/v1/images/search?limit=10&api_key=${apiKey}`

  const [data, setData] = useState<ICat[]>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      console.log(response.data);
      setData(response.data);
    }
    getData()
      .catch(console.error);
  }, [])

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
      {
        data && data.map((d, index) => {
          return (
            <div key={index}>
              <Views path={d.url} alternative={d.id} height={d.height} width={d.width} />
            </div>
          )
        })
      }
    </main>
  )
}
