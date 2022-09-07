import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react'


const Project:NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>project { slug }</div>
  )
}

export default Project;