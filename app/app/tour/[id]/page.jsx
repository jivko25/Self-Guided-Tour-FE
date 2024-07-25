"use client"
import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'

function TourDetails() {
    const param = useParams()
    const searchParams = useSearchParams()
  return (
    <div>TourDetails</div>
  )
}

export default TourDetails