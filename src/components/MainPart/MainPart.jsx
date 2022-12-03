import React from 'react'
import BasicTable from './BasicTable'
import './MainPart.scss'

export const body = 
[{"id":0,"title":"Harry Potter and Sorcerer`s Stone","quantity":100},
{"id":1,"title":"The Adventures of Huckleberry Finn","quantity":100},
{"id":2,"title":"Jane Eyre","quantity":100},
{"id":3,"title":"The Adventures of Tom Sawyer","quantity":100},
{"id":4,"title":"The Picture of Dorian Gray","quantity":100},
{"id":5,"title":"The Adventures of Sherlock Holmes","quantity":100},
{"id":6,"title":"Oliver Twist","quantity":100},
{"id":7,"title":"Anna Karenina","quantity":100},
{"id":8,"title":"Peter Pan","quantity":100},
{"id":9,"title":"David Copperfield","quantity":100},
{"id":10,"title":"Johnny Tremain","quantity":100},
{"id":11,"title":"Silas Marner","quantity":100},
{"id":12,"title":"Ethan Frome","quantity":100},
{"id":13,"title":"The Secret Life of Walter Mitty","quantity":100},]

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