import React, { useState } from 'react'
import Header from './components/Header/Header'
import MainPart, {body} from './components/MainPart/MainPart'
import {Context} from './context/Context'
import { TwoContext } from './context/TwoContext'
import { ThreeContext } from './context/ThreeContext'
import { FourContext } from './context/FourContext'

const Home = () => {

  const [context, setContext] = useState([...body])
  const [twoContext, setTwoContext] = useState(false)
  const [threeContext, setThreeContext] = useState(false)
  const [fourContext, setFourContext] = useState([])

  return (
    <>
      <Context.Provider value={[context, setContext]}>
        <TwoContext.Provider value={[twoContext, setTwoContext]}>
          <ThreeContext.Provider value={[threeContext, setThreeContext]}>
            <FourContext.Provider value={[fourContext, setFourContext]}>
              <Header />
              <MainPart />
            </FourContext.Provider>
          </ThreeContext.Provider>
        </TwoContext.Provider>
      </Context.Provider>
    </>
  )
}

export default Home