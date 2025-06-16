'use client'
import React, { useEffect, useState } from 'react'

const CountDownTimer = ({ targetDate = new Date(2030, 11, 31) }) => {

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(intervalId);
  }, [])

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date()
    let timeLeft = {}
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / (1000)) % 60)
      }
    }

    return timeLeft
  }

  return (
    <div className='py-4 px-8 rounded-xl flex flex-col items-center'>
      <p className='text-5xl'>{timeLeft.days}days </p> <p className='text-md'>{timeLeft.hours}hrs {timeLeft.minutes}mins {timeLeft.seconds}secs</p>
    </div>
  )
}

export default CountDownTimer