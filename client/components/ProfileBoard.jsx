import avatar from "../public/assets/10491830.jpg"

export default function ProfileBoard () {
    return <div style={{"display":"flex", "flexDirection":"column", "alignContent":"center", "justifyContent":"center", "gap":"20px"}}>
        <img src={avatar.src} style={{"borderRadius":"50%", "width":"100px", "height":"100px", "margin":"0 auto"}}/>
        <h1 style={{"margin":"0 auto"}}>Name Surname</h1>
        <div style={{"display":"grid", "gridTemplateColumns": "100px 250px", "textAlign":"left", "rowGap":"10px", "margin":"0 auto"}}>
            <span>Department</span>
            <span>Faculty of Health, Social Care and Medicine</span>
            <span>Research Intrerests</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore etolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat.</span>
            <span>Email</span>
            <span>Vivienne.Westwood@edgehill.ac.uk</span>
        </div>
        <div style={{"display":"flex", "flexDirection":"row", "gap":"30px"}}>
            <h2>Talks Available</h2>
            <button style={{"backgroundColor":"lightblue", "width":"50px"}}>Add</button>
        </div>

    </div>
}