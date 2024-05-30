import React, { useEffect, useState } from 'react'
import styles from './Wishlist.module.scss'
import WishCard from '../../Components/cards/WishCard'
import axios from 'axios'

const Wishlist = () => {

    const [data,setData]=useState([])

    const getData=()=>{
        axios.get('https://664ae3eea300e8795d434de5.mockapi.io/basket/wishlist')
        .then(res=>{
            setData(res.data)
        })
    }
    useEffect(()=>{
    getData()
    },[])
    
    
    const deleteItem=(id)=>{
        axios.delete(`https://664ae3eea300e8795d434de5.mockapi.io/basket/wishlist/${id}`)
        setTimeout(()=>{
            getData()
        },200)
    }
    
    





  return (
    <div>
      <div className={styles.title}>
    <h1>WISHLIST</h1>

   </div>
   <div className={styles.pro} >
    {
        data && data.map(item=> <WishCard key={item.id} item={item} sil={()=>deleteItem(item.id)}/>)
    }
   </div>

    </div>
  )
}

export default Wishlist
