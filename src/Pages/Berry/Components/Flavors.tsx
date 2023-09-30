import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBerryDetailsAction, getBerryFirmnessesAction, getBerryFlavorsAction } from 'redux/BerrySlice/BerryAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'
import { Props } from './Berries'

const Flavors:React.FC<Props> = ({
    id
}) => {
    const dispatch = useAppDispatch()
    const { isLoading, flavors} = useSelector((state: IRootState) => {
        return state.berryStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getBerryFlavorsAction({
        id,
    })
    )
}
    },[id])

if(isLoading) {
    return <div>Loadig...</div>
}
console.log(flavors)

const data = [
    {
        label: Strings.name,
        value: flavors.name
    }
]
  return (
    <div>
        <h2>Flavors details</h2>
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
export default Flavors
