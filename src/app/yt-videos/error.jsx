'use client'

import ErrorComp from "@/components/ErrorComp";

export default function Error({error}) {
  return (
    <ErrorComp error={error} />
  )
}