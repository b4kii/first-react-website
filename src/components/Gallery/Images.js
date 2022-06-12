import React from "react"

import {
  Bird,
  Flower,
  Rice,
  Strawberries,
  Cat,
  Dog,
  SmallBird
} from "../../assets/";

export default function Images() {
  const imagesContainer = [
    {
      source: Bird,
      id: 1
    },
    {
      source: Flower,
      id: 2
    },
    {
      source: Rice,
      id: 3
    },
    {
      source: Strawberries,
      id: 4
    },
    {
      source: Dog,
      id: 5
    },
    {
      source: Cat,
      id: 6
    },
    {
      source: SmallBird,
      id: 7
    }
  ]

  return(
    <>
      {
        imagesContainer.map((image) => (
          <div className="images" key={image.id}>
            <img src={image.source} style={{width: '100%'}} alt=""/>
          </div>
        ))
      }
    </>
  );
}