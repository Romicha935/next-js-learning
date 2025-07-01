import { NextResponse } from 'next/server'
import React from 'react'

function middleware(request){
  return NextResponse.redirect(new URL("/login",request.url))
}

export default middleware

export const config = {
    matcher: "/class/:path*",
}