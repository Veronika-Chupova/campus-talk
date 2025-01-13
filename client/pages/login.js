import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Login () {
    const router = useRouter()

    async function handleFormSubmit (e) {
        e.preventDefault()
        const form = new FormData(e.target)
        const formData = Object.fromEntries(form.entries())

        // Call the NextAuth signIn method to authenticate the user
        const res = await signIn("credentials", {
            redirect: false,
            email: formData.email,
            password: formData.password,
        })
  
        if (res?.error) {
            console.log(res?.error)
        } else if (res?.ok) {
            // Redirect after successful login
            router.push("/")
        }
    }

    return <form onSubmit={handleFormSubmit}>
        <label>Email</label>
        <input type='email' name='email'/>
        <label>Password</label>
        <input type='password' name='password'/>
        <button type='submit'>LOGIN</button>
    </form>
}