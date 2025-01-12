import Header from "../components/Header"
import MainBoard from "../components/MainBoard"
import Footer from "../components/Footer"

export default function Home() {
  return (

  <main style={{"gap": "0", "height": "100vh", "display":"flex", "flexDirection":"column"}}>
    <Header />
    <MainBoard />
    <Footer />
  </main>
  )
}
