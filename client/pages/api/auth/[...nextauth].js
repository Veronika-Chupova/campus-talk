import bcrypt from 'bcryptjs'
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import clientPromise from "../../../lib/mongodb"
import jwt from 'jsonwebtoken'

const dbName = process.env.db
const USERS = process.env.USERS

export default NextAuth({
    debug: true,
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {},
        async authorize(credentials) {
          // Find the user in the db
          const client = await clientPromise
          const usersCollection = client.db(dbName).collection(USERS)
          const user = await usersCollection.findOne( {email: credentials.email } )
          const isPasswordValid = user && await bcrypt.compare( credentials.password, user.passwordHash )

          if (isPasswordValid ) {
            // Return the user object to be stored in the session
            return { id: user._id.toString(), email: user.email }
          } else {
            // If no user is found or password doesn't match
            return null
          }
        },
      }),
    ],
    session: { 
            strategy: "jwt",
    },
    jwt: {
        maxAge: 60 * 60 * 24 * 30,
        async encode({ token, secret, maxAge }) {
                const currentTime = Math.floor( Date.now() / 1000 )           // Current time in seconds
                const expirationTime = currentTime + maxAge             

                const payload = {
                    ...token,
                    iat: currentTime,         
                    exp: expirationTime       
                }

                return jwt.sign(payload, secret)

        },
        async decode({ secret, token }) {
            try {
                const decoded = jwt.verify(token, secret)
                return decoded
            } catch (err) {
                console.error("JWT Decode Error:", err)
                return null
            }
        },
    },
    callbacks: {
        async session({ session, token }) {
            console.log("Session is triggered")
            if (token) {
                session.user.id = token.sub
                session.user.email = token.email
                session.user.roles = token.roles || []  // Default to empty array if roles are undefined
            }
            return session
        },
    },
    secret: process.env.JWT_SECRET, // Set a secret for JWT signing
    pages: {
      signIn: '/login',  // Customize the sign-in page if needed
    },
  })