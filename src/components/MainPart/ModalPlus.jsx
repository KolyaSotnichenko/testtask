import React, { useContext } from 'react'
import { RiCloseLine } from "react-icons/ri";
import './MainPart'
import { TwoContext } from '../../context/TwoContext'
import { Context } from '../../context/Context';
import { FourContext } from '../../context/FourContext';

const ModalPlus = (props) => {

    const [context, setContext] = useContext(Context)
    const [twoContext, setTwoContext] = useContext(TwoContext)
    const [fourContext, setFourContext] = useContext(FourContext)

    const add = () => {
        // const newState = context.map(obj => {
        //     if (obj.id == fourContext.id) {
        //         return { ...obj, quantity: fourContext.values.quantity + 10 }
        //     }
        //     return obj
        // })

        // setContext(newState)
        setTwoContext(false)
    }

  return (
    <div className='modalBox'>
        <div className='darkBG' onClick={() => setTwoContext(false)}/>
        <div className='centered'>
            <div className='modal'>
                <div className="modalHeader">
                    <h5 className='heading'>Modal</h5>
                </div>
                <button className='closeBtn' onClick={() => setTwoContext(false)}>
                    <RiCloseLine style={{marginBottom: '-3px'}} />
                </button>
                <div className="modalContent">
                    <p>Додати 10 книг?</p>
                </div>
                <div className="modalActions">
                    <div className="actionsContainer">
                        <button className='deleteBtn' onClick={() => {
                            add()
                        }}>Так</button>
                        <button className='cancelBtn' onClick={() => setTwoContext(false)}>Ні</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalPlus