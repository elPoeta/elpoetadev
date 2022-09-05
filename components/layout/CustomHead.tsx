import Head from 'next/head'
import React from 'react'
type HeadPropsType =  {
  title: string
}

export const CustomHead = ({ title }:HeadPropsType) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Leonardo Tosetto - elPoeta" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
