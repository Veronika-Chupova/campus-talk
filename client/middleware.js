import { withAuth } from "next-auth/middleware"
import { getToken } from "next-auth/jwt"
import jwt from 'jsonwebtoken'    


export default withAuth({
  // pages: {
  //   signIn: "/login",  // Redirect to the login page if unauthorized
  // },
  callbacks: {
    async authorized(req) {
      console.log("Middleware triggered. Cookies:", req.req.cookies)

    const rawToken = await getToken(
      {req: req.req, 
      secret: process.env.NEXTAUTH_SECRET, 
      raw: true
    })

    if (!rawToken) {
      console.log("no session token")
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
    matcher: ['/', '/profile/:path*', '/mycalendar/:path*', '/talks/:path*'],  // Protect all pages except `/login`
  }