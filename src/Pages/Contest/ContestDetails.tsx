import React from 'react'

import { useParams } from 'react-router-dom'
import ContestTypes from './Components/ContestTypes';

const ContestDetails = () => {
  const {listId} = useParams();
  return (
    <div>
<ContestTypes id = {parseInt(listId as string)}/> 
{/* <Firmnesses id = {parseInt(listId as string)}/>
<Flavors id = {parseInt(listId as string)}/>      */}
    </div>
  )
}

export default ContestDetails
