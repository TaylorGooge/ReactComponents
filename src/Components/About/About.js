import React from "react";
import "./About.css";
import { Navigation } from "../Navbar/Navbar"
import { AboutItems } from "./AboutItems";
import { SelectedWorks } from "../SelectedWorks/SelectedWorks";
import { JoinBanner } from "../JoinBanner/JoinBanner";
import { Footer } from "../Footer/Footer"
import Image from 'react-bootstrap/Image'

export class About extends React.Component {
  render() {
    return (
      <div>
        < Navigation />
        <div className="wrapper">
          <div className="img">
          <Image src={AboutItems.img} className="bioimg" alt = {AboutItems.imgbio} fluid />
          </div>
          <div className="authorinfo">
            <h1 className="name"> {AboutItems.name} </h1>
            <h2 className="tagline"> {AboutItems.tagline} </h2>
            <div className="bio">
              <p> {AboutItems.bio1}</p>
              <p> {AboutItems.bio2}</p>
              <p> {AboutItems.bio3}</p>
            </div>
          </div>
          <SelectedWorks />
          <JoinBanner />
        </div>
        < Footer />
      </div>
    );
  }
}
