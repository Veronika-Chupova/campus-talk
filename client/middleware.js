import { withAuth } from "next-auth/middleware"
import { getToken } from "next-auth/jwt"
import jwt from 'jsonwebtoken'    //for token decoding
import { decode } from 'next-auth/jwt'

export default withAuth({
  pages: {
    signIn: "/login",  // Redirect to the login page if unauthorized
  },
  callbacks: {
    // async authorized(req) {
    //   console.log("Middleware triggered. Cookies:", req.req.cookies)
    //   const rawToken = await getToken(
    //     {req: req.req, 
    //     raw: true
    //   })
      
    //   const decodedToken = await decode ({token: rawToken, secret: process.env.JWT_SECRET})
    //   console.log("Raw token", rawToken)
    //   console.log("Decoded token", decodedToken)

    //   if (!decodedToken) {
    //     console.log("No valid token found");
    //     return false;
    //   }
    //   console.log("Valid token found:");
    //   return true
    // },
    async authorized(req) {
      console.log("Middleware triggered. Cookies:", req.req.cookies)
    // Get the token using getToken utility
    const rawToken = await getToken(
      {req: req.req, 
      secret: process.env.NEXTAUTH_SECRET, 
      raw: true
    })

    if (!rawToken) {
      console.log("no raw token")
      return false
    }
    //Decode token
    let decodedToken
    try {
      decodedToken = jwt.decode(rawToken)
    } catch (error) {
      console.error('Failed to decode token:', error)
      return false
    }

    return true
    }
  }
})

// Apply middleware to specific routes (protect multiple pages)
export const config = {
    matcher: ['/', '/profile/:path*', '/mycalendar/:path*'],  // Protect all pages except `/login`
  }