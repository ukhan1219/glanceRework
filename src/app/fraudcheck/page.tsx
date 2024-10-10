import React from 'react'
import { getServerAuthSession } from '~/server/auth'
import { redirect } from 'next/navigation'

export default async function page() {
  const session = await getServerAuthSession();

  if (!session){
    return redirect('/login');
  }

  return (
    <div>fraudcheck</div>
  )
}