import Image from 'next/image'
import React from 'react'

interface props {
  icon: string;
  alt?: string;
}

export const Icon = ({ icon, alt }: props) => {
  return (
    <Image src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={alt} width={100} height={100}/>  
  )
}
