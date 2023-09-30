import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBerryDetailsAction, getBerryFirmnessesAction } from 'redux/BerrySlice/BerryAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'
import { Props } from './Berries'

const Firmnesses:React.FC<Props>= (
    {
    id
}
) => {
    const dispatch = useAppDispatch()
    const { isFirmnessesLoading, firmness} = useSelector((state: IRootState) => {
        return state.berryStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getBerryFirmnessesAction({
        id,
    })
    )
}
    },[id])

if(isFirmnessesLoading) {
    return <div>Loadig...</div>
}
const data = [
    {
        label: Strings.name,
        value: firmness.name
    }
]
  return (
    <div>
        <h2>Firemness details</h2>
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
export default Firmnesses
