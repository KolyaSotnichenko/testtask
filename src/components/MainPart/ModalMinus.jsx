import React, { useContext } from 'react'
import { RiCloseLine } from "react-icons/ri";
import './MainPart'
import { TwoContext } from '../../context/TwoContext'
import { body } from './MainPart'
import { ThreeContext } from '../../context/ThreeContext';
import { Context } from '../../context/Context';

const ModalMinus = (props) => {

    const [context, setContext] = useContext(Context)
    const [threeContext, setThreeContext] = useContext(ThreeContext)

    // const handdleAdd = () => {
    //     const newState = body.map(obj => {
    //         if (obj.id == threeContext.id) {
    //             return { ...obj, quantity: threeContext.values.quantity + 10 }
    //         }
    //         return obj
    //     })

    //     setContext(newState)
    // }

  return (
    <div className='modalBox'>
        <div className='darkBG' onClick={() => setThreeContext(false)}/>
        <div className='centered'>
            <div className='modal'>
                <div className="modalHeader">
                    <h5 className='heading'>Modal</h5>
                </div>
                <button className='closeBtn' onClick={() => setThreeContext(false)}>
                    <RiCloseLine style={{marginBottom: '-3px'}} />
                </button>
                <div className="modalContent">
                    <p>Забрати 10 книг?</p>
                </div>
                <div className="modalActions">
                    <div className="actionsContainer">
                        <button className='deleteBtn' onClick={() => {
                            setThreeContext(false)
                        }}>Так</button>
                        <button className='cancelBtn' onClick={() => setThreeContext(false)}>Ні</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalMinus