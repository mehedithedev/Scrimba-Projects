import React from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import Jokes from './Components/Jokes'
import JokesData from './Components/JokesData'

function App() {
  const colors= [<h3>Red</h3>, <h3>Blue</h3>, <h3>Green</h3>]
  // const jokElements = jokesData.map(joke =>{
  //   return <Joke/>
  // })
  return (
    <div>
      <Navbar />
            <Card 
                img="katie-zaferes.png"
                rating="5.0"
                reviewCount={8}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
            <Card
                img= 'katie-zaferes.png '
                rating='6.8'
                reviewCount={12}
                country='Canada'
                title='Photo Grid'
                price={100}
            />
            {colors}
            <Jokes/>
            {/* <JokesData/>  */}
    </div>
  )
}


export default App
