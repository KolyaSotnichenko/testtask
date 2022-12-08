import React, { useState } from 'react'
import Header from './components/Header/Header'
import MainPart, {body} from './components/MainPart/MainPart'
import {Context} from './context/Context'
import { TwoContext } from './context/TwoContext'
import { ThreeContext } from './context/ThreeContext'
import Footer from './components/Footer/Footer'
import './App.scss'

const Home = () => {

  const [context, setContext] = useState([...body])
  const [twoContext, setTwoContext] = useState('')
  const [threeContext, setThreeContext] = useState()

  return (
    <>
      <Context.Provider value={[context, setContext]}>
        <TwoContext.Provider value={[twoContext, setTwoContext]}>
          <ThreeContext.Provider value={[threeContext, setThreeContext]}>
            <div className='App'>
              <Header />
              <MainPart />
            </div>
            <Footer />
          </ThreeContext.Provider>
        </TwoContext.Provider>
      </Context.Provider>
    </>
  )
}

export default Home