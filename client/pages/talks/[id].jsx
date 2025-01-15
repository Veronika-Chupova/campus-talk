import { useRouter } from "next/router"

export default function MyTalks () {
    const router= useRouter()
    return <>
        <button onClick={() => {router.push('/')}}>Back</button>
        <div>Upcoming Talks</div>
        <div>Past Tals</div>
    </>
}