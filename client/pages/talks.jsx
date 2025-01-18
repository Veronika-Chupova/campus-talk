import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import BackButton from "../components/UIElements/BackButton"

export default function MyTalks () {
    const router = useRouter()
    const { id } = useSelector( state => state.user )
    return <>
        <BackButton />
        <div>Upcoming Talks</div>
        <div>Past Tals</div>
    </>
}