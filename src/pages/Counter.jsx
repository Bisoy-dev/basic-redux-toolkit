import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementBy } from '../redux/features/counter'

function Counter() {

    const dispatch = useDispatch()
    let { count } = useSelector((state) => state.counter)

    // const [counter, setCounter] = useState(0)

    // const increment = () => {
    //     setCounter(prev => prev + 1)
    // }

    // const incrementByFive = () => {
    //     setCounter(prev => prev + 5)
    // }
    // const decrement = () => {
    //     setCounter(counter - 1)
    // }

  return <>
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <p className="h3">Counter Value: {count}</p>
                        <div className="col">
                            <button className='btn btn-success m-1' onClick={() => {
                                dispatch(increment())
                            }}>Increment</button>
                            <button className='btn btn-warning m-1' onClick={() => {
                                dispatch(decrement())
                            }}>Decrement</button>
                            <button className='btn btn-primary m-1' onClick={() => {
                                dispatch(incrementBy(5))
                            }}>Increment by 5</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default Counter