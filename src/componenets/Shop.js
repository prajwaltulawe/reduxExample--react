import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state/index'
import { bindActionCreators } from 'redux'

const Shop = () => {
  const dispatch = useDispatch()
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <>
        <h2>Deposite/ Withdraw Money</h2>
        <button className="btn btn-outline-primary my-2" onClick={()=>{withdrawMoney(100)}}>-</button>
        <span className='mx-4'> Update Balance</span>
        <button className="btn btn-outline-secondary my-2 mx-4" onClick={()=>{depositMoney(100)}}>+</button>
    </>
  )
}

export default Shop