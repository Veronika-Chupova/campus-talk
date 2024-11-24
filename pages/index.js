
import Header from "./components/Header"
import MainBoard from "./components/MainBoard"
import Footer from "./components/Footer"
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export default function Home() {
  return (

  <main style={{"gap": "0", "height": "100vh", "display":"flex", "flexDirection":"column"}}>
    <Header />
    <MainBoard />
    <Footer />
  </main>
    // <>
    //   <div
    //     className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
    //   >
    //     <main className={styles.main}>
    //       <Image
    //         className={styles.logo}
    //         src="/next.svg"
    //         alt="Next.js logo"
    //         width={180}
    //         height={38}
    //         priority
    //       />
    //       <ol>
    //         <li>
    //           Get started by editing <code>pages/index.js</code>.
    //         </li>
    //         <li>Save and see your changes instantly.</li>
    //       </ol>

    //       <div className={styles.ctas}>
    //         <a
    //           className={styles.primary}
    //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <Image
    //             className={styles.logo}
    //             src="/vercel.svg"
    //             alt="Vercel logomark"
    //             width={20}
    //             height={20}
    //           />
    //           Deploy now
    //         </a>
    //         <a
    //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className={styles.secondary}
    //         >
    //           Read our docs
    //         </a>
    //       </div>
    //     </main>
    //     <footer className={styles.footer}>
    //       <a
    //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           aria-hidden
    //           src="/file.svg"
    //           alt="File icon"
    //           width={16}
    //           height={16}
    //         />
    //         Learn
    //       </a>
    //       <a
    //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           aria-hidden
    //           src="/window.svg"
    //           alt="Window icon"
    //           width={16}
    //           height={16}
    //         />
    //         Examples
    //       </a>
    //       <a
    //         href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           aria-hidden
    //           src="/globe.svg"
    //           alt="Globe icon"
    //           width={16}
    //           height={16}
    //         />
    //         Go to nextjs.org →
    //       </a>
    //     </footer>
    //   </div>
    // </>
  )
}