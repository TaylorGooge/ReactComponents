import React from 'react';
import { Navigation } from "../Navbar/Navbar"
import { Footer } from "../Footer/Footer"
import { CardBuilder } from "./CardBuilder"
import './PortfolioLanding.css'

export class PortfolioLanding extends React.Component{
    render(){
        return(
        <div className = 'portdiv'>
           < Navigation />
            <div className="cardwrapper">
                < CardBuilder />
            </div>
            < Footer />
        </div>
        )
    }
}