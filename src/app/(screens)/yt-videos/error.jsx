'use client'

import ErrorComp from "@/app/(components)/ErrorComp";

export default function Error({error}) {
  return (
    <ErrorComp error={error} />
  )
}