import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBerryDetailsAction } from 'redux/BerrySlice/BerryAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'
import { idText } from 'typescript'
export interface Props {
    id: number
}
const ContestTypes:React.FC<Props> = ({
    id
}) => {
   
    const dispatch = useAppDispatch()
    const { isLoading, berryList} = useSelector((state: IRootState) => {
        return state.berryStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getBerryDetailsAction({
        id,
    })
    )
}
return () => {
  //Reset the current berryList state when components unmouted
    console.log("components unmounted")
}
    },[id])

if(isLoading) {
    return <div>Loadig...</div>
}



const data = [
    {
        label: Strings.name,
        value: ""
    },
    
]

  return (
    <div className='section'>
        <h2>Contest Types</h2>
      {data.map((item) => <DataContent value = {item.value} label = {item.label}/>)}
    </div>
  )
}

const DataContent:FC<any> = ({
 label,
 value   
}) => {
    return <div>
        <label>{label}</label>
        <span>: {value}</span>
    </div>
}
export default ContestTypes
