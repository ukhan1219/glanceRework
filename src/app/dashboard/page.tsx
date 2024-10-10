import React from 'react'
import { getServerAuthSession } from '~/server/auth'
import { redirect } from 'next/navigation'

export default async function page() {
  const session = await getServerAuthSession();

  if (!session) {
    return redirect('/login');
  }

  return (
    <div>
      <p className='fira-code-regular m-5'>
        Welcome back, {session.user.name || 'User'}!
      </p>
    </div>
  )
}
