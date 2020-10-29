import React from 'react'

import { Collage } from 'random-gallery-svg'

import 'random-gallery-svg/dist/index.css'
const exampleImage = "assets/pexels-photo-4264047.jpeg"
const largeExample = {url: "assets/photo-1598262680518-b4712ff2b6c5.jpeg", title: "Title 2"}
const horizontalExample = {url: "assets/1500x500.jpeg", title: "Title 3"}

const squareExample = {url: "assets/spray.jpg", title: "Title 4"}
const App = () => {
  return <Collage original={exampleImage} large={largeExample} horizontal= {horizontalExample}
  square={squareExample} />
}

export default App
