import React from 'react'
import BasicTable from './BasicTable'
import './MainPart.scss'

export const body = 
[{"id":0,"title":"Honorable","quantity":100},
{"id":1,"title":"Honorable","quantity":100},
{"id":2,"title":"Dr","quantity":100},
{"id":3,"title":"Mrs","quantity":100},
{"id":4,"title":"Mrs","quantity":100},
{"id":5,"title":"Honorable","quantity":100},
{"id":6,"title":"Ms","quantity":100},
{"id":7,"title":"Dr","quantity":100},
{"id":8,"title":"Honorable","quantity":100},
{"id":9,"title":"Dr","quantity":100}]

const MainPart = () => {

  return (
    <>
      <div className="mainContainer">
        <BasicTable />
      </div>
    </>
  )
}

export default MainPart