'use client'

import { useState, useEffect } from "react"

import Weather from "@/components/Weather";
import ApiSet from "@/components/ApiSet";
import Time from "@/components/Time";

export default function Home() {

  const [apiKey, setApiKey] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")

  useEffect(() => {
    setApiKey(localStorage.getItem("apiKey") || "")
    setLatitude(localStorage.getItem("latitude") || "")
    setLongitude(localStorage.getItem("longitude") || "")
  }, [apiKey, latitude, longitude]);

  console.log('LOCAL-LAT: ', latitude)

  const handleSaveApi = e => {
    e.preventDefault()
    localStorage.setItem("apiKey", e.target[0].value)
    localStorage.setItem("latitude", e.target[1].value)
    localStorage.setItem("longitude", e.target[2].value)
    setApiKey(e.target[0].value)
    setLatitude(e.target[1].value)
    setLongitude(e.target[2].value)
    console.log(e.target)
  }

  const handleClearApi = e => {
    e.preventDefault()
    localStorage.removeItem("apiKey")
    localStorage.removeItem("latitude")
    localStorage.removeItem("longitude")
    setApiKey("")
  }

  return (
    <>
      <div className="container">
        <Time />
        {apiKey ?
          <Weather apiKey={apiKey} clearApi={handleClearApi} lat={latitude} lon={longitude} /> :
          <ApiSet saveApi={handleSaveApi} apiKey={apiKey} />}
      </div>

    </>
  );
}
