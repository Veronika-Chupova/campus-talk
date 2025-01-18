import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import avatar from "../public/assets/10491830.jpg"
import BackButton from "./UIElements/BackButton"

export default function ProfileBoard () {
    const router = useRouter()
    const id = router.query
    const { firstName, lastName, department, research, interests, email } = useSelector( state => state.user)


    return <div style={{"display":"flex", "flexDirection":"column", "alignContent":"center", "justifyContent":"center", "gap":"20px"}}>
        <BackButton />
        <img src={avatar.src} style={{"borderRadius":"50%", "width":"100px", "height":"100px", "margin":"0 auto"}}/>
        <h1 style={{"margin":"0 auto"}}>{firstName} {lastName}</h1>
        <div style={{"display":"grid", "gridTemplateColumns": "100px 250px", "textAlign":"left", "rowGap":"10px", "margin":"0 auto"}}>
            <span>Department</span>
            <span>{department}</span>
            <span>Research</span>
            <span>{research}</span>
            <span>Interest</span>
            <span>{interests}</span>
            <span>Email</span>
            <span>{email}</span>
        </div>
        <div style={{"display":"flex", "flexDirection":"row", "gap":"30px"}}>
            <h2>Talks Available</h2>
            <button style={{"backgroundColor":"lightblue", "width":"50px"}}>Add</button>
        </div>

    </div>
}

//work around
//add side user profile view
//add check if it another user for adding button book