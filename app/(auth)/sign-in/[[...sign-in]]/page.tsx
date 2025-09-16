import React from 'react'
import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <main className="auth_page">
      <SignIn/>
    </main>
  )
}

export default SignInPage;
