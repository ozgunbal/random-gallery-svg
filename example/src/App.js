import React from 'react'
import { Collage } from 'random-gallery-svg'
import 'random-gallery-svg/dist/index.css'
import exampleImage from './assets/pexels-photo-4264047.jpeg'
import largeExampleImage from './assets/photo-1598262680518-b4712ff2b6c5.jpeg'
import horizontalExampleImage from './assets/1500x500.jpeg'
import squareExampleImage from './assets/spray.jpg'


const largeExample = {url: largeExampleImage, title: "Title 2"}
const horizontalExample = {url: horizontalExampleImage, title: "Title 3"}
const squareExample = {url: squareExampleImage, title: "Title 4"}
const App = () => {
  return <Collage original={exampleImage} large={largeExample} horizontal= {horizontalExample}
  square={squareExample} />
}
export default App