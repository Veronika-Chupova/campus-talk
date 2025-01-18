import { useRouter } from "next/router"
import { useSelector, UseSelector } from "react-redux"

export default function Header () {
    const router = useRouter()
    const id = useSelector(state => state.user.id)

    function handleClick(e) {
        e.preventDefault()
        if (id) {
            router.push(`/profile/${id}`)
        }

        return true
    }
    return <>
        <div>Header
            <button onClick={handleClick}>Profile</button>
        </div>
    </>
}

//work around
//if id variable is empty