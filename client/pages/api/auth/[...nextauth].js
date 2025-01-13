import bcrypt from 'bcryptjs'
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import clientPromise from "../../../lib/mongodb"

const dbName = process.env.db
const USERS = process.env.USERS

export default NextAuth({
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: 'Email', type: 'email' },
          password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials) {
          // Find the user in the db
          const client = await clientPromise
          const usersCollection = client.db(dbName).collection(USERS)
          const user = await usersCollection.findOne( {email: credentials.email } )
          const isPasswordValid = user && await bcrypt.compare( credentials.password, user.passwordHash )
  
          if (isPasswordValid ) {
            // Return the user object to be stored in the session
            return { id: user._id, email: user.email }
          } else {
            // If no user is found or password doesn't match
            return null;
          }
        },
      }),
    ],
    
    session: {
      jwt: true,  // Use JWT for session management
    },
    
    callbacks: {
      async jwt(token, user) {
        // If user exists, add user information to the token
        if (user) {
          token.id = user.id
          token.email = user.email
          token.roles = user.roles || []
        }
        return token
      },
      async session(session, token) {
        // Add token data to the session object
        session.user.id = token.id
        session.user.email = token.email
        session.user.roles = token.roles
        return session
      },
    },
    
    secret: process.env.JWT_SECRET, // Set a secret for JWT signing
    pages: {
      signIn: '/login',  // Customize the sign-in page if needed
    },
  })