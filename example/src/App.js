import React from 'react'

import { Collage } from 'random-gallery-svg'

import 'random-gallery-svg/dist/index.css'
const exampleImage = "https://images.pexels.com/photos/4264047/pexels-photo-4264047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
const largeExample = {url: "https://images.unsplash.com/photo-1598262680518-b4712ff2b6c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                  title: "Title 2"}
const horizontalExample = {url: "https://pbs.twimg.com/profile_banners/103308024/1603561333/1500x500",
                  title: "Title 3"}

const squareExample = {url: "https://previews.123rf.com/images/elenarolau/elenarolau1611/elenarolau161100052/67679926-invierno-fondo-de-la-acuarela-cuadrada-con-el-chapoteo-de-la-nieve-que-cae-la-textura-%C3%A1spera-de-spray-.jpg",
                  title: "Title 4"}
const App = () => {
  return <Collage original={exampleImage} large={largeExample} horizontal= {horizontalExample}
  square={squareExample} />
}

export default App
