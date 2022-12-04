import React, { useContext } from 'react'
import { RiCloseLine } from "react-icons/ri";
import './MainPart'
import { ThreeContext } from '../../context/ThreeContext';
import { Context } from '../../context/Context';
import { FourContext } from '../../context/FourContext';

const ModalMinus = (props) => {

    const [context, setContext] = useContext(Context)
    const [threeContext, setThreeContext] = useContext(ThreeContext)
    const [fourContext, setFourContext] = useContext(FourContext)

    const take = () => {
        const newState = context.map(obj => {
            if (obj.id == fourContext.id && fourContext.values.quantity != 0) {
                return { ...obj, quantity: fourContext.values.quantity - 10 }
            }
            return obj
        })

        setContext(newState)
        setThreeContext(false)
    }

    return (
        <div className='modalBox'>
            <div className='darkBG' onClick={() => setThreeContext(false)} />
            <div className='centered'>
                <div className='modal'>
                    <div className="modalHeader">
                        <h5 className='heading'>Modal</h5>
                    </div>
                    <button className='closeBtn' onClick={() => setThreeContext(false)}>
                        <RiCloseLine style={{ marginBottom: '-3px' }} />
                    </button>
                    <div className="modalContent">
                        <p>Забрати 10 книг?</p>
                    </div>
                    <div className="modalActions">
                        <div className="actionsContainer">
                            <button className='deleteBtn' onClick={() => {
                                take()
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