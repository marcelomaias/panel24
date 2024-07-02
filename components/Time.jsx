'use client'

import { useState, useEffect } from "react";

const Time = () => {

  const [date, setDate] = useState(null);
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  useEffect(() => {
    // update the date once every second
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      // clean up the effect
      clearInterval(timerId);
    };
  }, []);

  return (
    <section className="time">
      {/* {days[date?.getDay()]} */}
      <div>{date?.getHours() < 10 ? "0" + date?.getHours() : date?.getHours()}</div>
      <div>{date?.getMinutes() < 10 ? "0" + date?.getMinutes() : date?.getMinutes()}</div>
      {/* {date?.getSeconds() < 10 ? "0" + date?.getSeconds() : date?.getSeconds()} */}
    </section>
  );
}

export default Time;