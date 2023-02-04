import { ReactElement } from "react"
import { Footer } from "../components/home/Footer"
import { Header } from "../components/home/Header"
import { Main } from "../components/home/Main"
import '../styles/home/home.scss'

export const Home = () : ReactElement =>{
    return(
        <div id="homeContainer">
        <Header/>
        <Main/>
        <Footer/>
        </div>
    )
}