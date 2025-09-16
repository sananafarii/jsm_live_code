import React from 'react'
import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <main className="auth_page">
      <SignUp/>
    </main>
  )
}

export default SignUpPage;