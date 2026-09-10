import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import cat from '/home/aarav/Pictures/wallpaper/git_wallpaper/mobile/20240713_175710.jpg'

function App() {
  const name = "Aarav";
  const branch = "CSE";
  const roll = 6;
  const college = "ABES Engineering College";

  return (
    <center>
    <div style={{border:"10px solid red", width:"400px", height:"450px"}}>
      <h2>Welcome to React Vite</h2>
      <h2>My name is <span style = {{color:'red'}}>{name}</span></h2>
      <h2>My branch is <span style = {{color:'red'}}>{branch}</span></h2>
      <h2>My roll no. is <span style = {{color:'red'}}>{roll}</span></h2>
      <h2>My college is <span style = {{color:'red'}}>{college}</span></h2>

      <img src={cat} height={200} width={200}></img>
    </div>
    </center>
  )
}
export default App