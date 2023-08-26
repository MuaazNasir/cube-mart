"use client"

import {NextStudio} from 'next-sanity/studio'
import Config from '../../../../../sanity.config'

const page = () => {
  return (
    <>
    <NextStudio  config={Config} />
    </>
  )
}

export default page