'use client'

import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import GuestNavbar from './GuestNavbar'
import UserNavbar from './UserNavbar'

export default function Navbar() {
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const token = Cookies.get('token')
    setIsLogged(!!token)
  }, [])

  return isLogged ? <UserNavbar /> : <GuestNavbar />
}
