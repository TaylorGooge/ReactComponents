import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Hero.css'

export class Hero extends React.Component{
    render(){
        return(

          <section class="top-banner-section">
            <div class="banner-image-div">
              <img class="banner-image" src="IMG/HomePage/1.jpeg" alt="Banner Image" />
            </div>
            <div class="banner-overlay-div"></div>
            <div class="banner-text-div">
              <span class="banner-text">
                <p class="banner-h1-text">I am John Doe</p>
                <p class="banner-body-text">And I'm a Photographer</p>
                <p class="banner-btn">
                <Link to = "/portfolio">
                  <Button variant="secondary" > See my work </Button>
                </Link>
                </p>
              </span>
            </div>
          </section>  
        )
    }
}