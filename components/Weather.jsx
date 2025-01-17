'use client'

import { setIcon } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Weather = ({ apiKey, clearApi, lat, lon }) => {

  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`

  const { data, error } = useSWR(url, fetcher, { refreshInterval: 900000 })

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  console.log(data)

  return (
    <section className='weather'>
      <div className='desc'>{data.weather[0]?.description}</div>
      <div className='temp'>{Math.round(data.main?.temp)}&deg;</div>
      {/* <div className='temp'>{data.main?.temp}</div> */}
      <Image className='icon' src={`/weather/${setIcon(data.weather[0].icon)}`} width={164} height={164} alt='Weather icon' />


      {/* <div>{data.name}</div> */}
      {data.message ? data.message : null}
      {/* <Link href="#" onClick={clearApi}>Clear API</Link> */}
    </section>


  )

}

export default Weather;