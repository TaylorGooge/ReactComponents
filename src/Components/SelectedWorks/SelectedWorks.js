import React from "react";
import { SelectedItems } from "./SelectedItems";
import "./SelectedWorks.css"

export class SelectedWorks extends React.Component {
  render() {
    return (
      <div class="selectedworks">
        {SelectedItems.map((index) => (
          <div class="selectedworks-item">
            <h3 className = 'workstitle' > {index.title} </h3>
            <img  className = 'worksimg' src={index.img} alt={index.imgalt} />
            <p className = 'worksdescription'> {index.description} </p>
          </div>
        ))}
      </div>
    );
  }
}
