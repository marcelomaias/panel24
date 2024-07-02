'use client'

import { setIcon } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

// const apiKey = 'dec8ac5aa73a767fbf998957636cbc70'
// const lat = '-25.4295963'
// const lon = '-49.2712724'

const Weather = ({ apiKey, clearApi, lat, lon }) => {

  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`

  const { data, error } = useSWR(url, fetcher, { refreshInterval: 900000 })

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  console.log(data)

  return (
    <section className='weather'>
      <div className="weather__header">
        <div className='desc'>{data.weather[0]?.description}</div>
        <div className='temp'>{Math.round(data.main?.temp)}&deg;</div>
        {/* <div className='temp'>{data.main?.temp}</div> */}
        <Image className='icon' src={`/weather/${setIcon(data.weather[0].icon)}`} width={164} height={164} alt='Weather icon' />
      </div>


      {/* <div>{data.name}</div> */}
      {data.message ? data.message : null}
      {/* <Link href="#" onClick={clearApi}>Clear API</Link> */}
    </section>


  )

}

export default Weather;