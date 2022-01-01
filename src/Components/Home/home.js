import React from 'react'
import { Navigation } from "../Navbar/Navbar"
import { Footer } from "../Footer/Footer"
import { Hero } from "../Hero/Hero"


export class Home extends React.Component{
    render(){
        return(
        <div>
            < Navigation />
            < Hero />
            < Footer />
      </div>
        )
    }
}