import {Route,Routes} from 'react-router-dom'
import { Home } from './pages/Home'
import { Pizza } from './pages/Pizza'
import { Hamburger } from './pages/Hamburger'
import './styles/style.scss'
import { Pancake } from './pages/Pancake'
import { NotFound } from './pages/NotFound'
export const App = () =>{
  return(
    <>
    
    
    <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/pizza' element = {<Pizza/>}/>
    <Route path='/hamburger' element = {<Hamburger/>}/>
    <Route path='/pancake' element = {<Pancake/>}/>
    <Route path='*' element = {<NotFound/>}/>
    </Routes>
    </>
  )
}