import React, { useContext } from 'react'
import { RiCloseLine } from "react-icons/ri";
import './MainPart'
import { TwoContext } from '../../context/TwoContext'
import { Context } from '../../context/Context';
import { ThreeContext } from '../../context/ThreeContext';

const ModalPlus = (props) => {

    const [context, setContext] = useContext(Context)
    const [twoContext, setTwoContext] = useContext(TwoContext)
    const [threeContext, setThreeContext] = useContext(ThreeContext)

    const add = () => {
        const newState = context.map(obj => {
            if (obj.id == threeContext.id) {
                return { ...obj, quantity: threeContext.values.quantity + 10 }
            }
            return obj
        })

        setContext(newState)
        setTwoContext('')
    }

    const take = () => {
        const newState = context.map(obj => {
            if (obj.id == threeContext.id && threeContext.values.quantity != 0) {
                return { ...obj, quantity: threeContext.values.quantity - 10 }
            }
            return obj
        })

        setContext(newState)
        setTwoContext('')
    }

    if(twoContext === 'add'){
        return (
            <div className='modalBox'>
                <div className='darkBG' onClick={() => setTwoContext(false)} />
                <div className='centered'>
                    <div className='modal'>
                        <div className="modalHeader">
                            <h5 className='heading'>Modal</h5>
                        </div>
                        <button className='closeBtn' onClick={() => setTwoContext(false)}>
                            <RiCloseLine style={{ marginBottom: '-3px' }} />
                        </button>
                        <div className="modalContent">
                            <p>{props.title}</p>
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
    }else{
        return (
            <div className='modalBox'>
                <div className='darkBG' onClick={() => setTwoContext(false)} />
                <div className='centered'>
                    <div className='modal'>
                        <div className="modalHeader">
                            <h5 className='heading'>Modal</h5>
                        </div>
                        <button className='closeBtn' onClick={() => setTwoContext(false)}>
                            <RiCloseLine style={{ marginBottom: '-3px' }} />
                        </button>
                        <div className="modalContent">
                            <p>{props.title}</p>
                        </div>
                        <div className="modalActions">
                            <div className="actionsContainer">
                                <button className='deleteBtn' onClick={() => {
                                    take()
                                }}>Так</button>
                                <button className='cancelBtn' onClick={() => setTwoContext(false)}>Ні</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalPlus