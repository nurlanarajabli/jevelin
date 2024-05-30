import React, { useEffect, useState } from 'react'
import styles from './Basket.module.scss'
import axios from 'axios';
import BasketCard from '../../Components/cards/BasketCard'
// import Header from '../../Components/Header/Header'

const Basket = () => {

    const [data, setData] = useState([]);

    const getData = () => {
      axios
        .get("https://664ae3eea300e8795d434de5.mockapi.io/basket/basket")
        .then((res) => {
          setData(res.data);
        });
    };
  
    const deleteItem = (id) => {
      axios
        .delete(`https://664ae3eea300e8795d434de5.mockapi.io/basket/basket/${id}`)
        setTimeout(()=>{
          getData()
      }, 500)
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    const addToWishlist= (item) => {
      axios.post(
        "https://664ae3eea300e8795d434de5.mockapi.io/basket/wishlist",
        item
      );
    };
  
  return (
    <div>
     
      <div className={styles.title}>
        <h1>BASKET</h1>
      </div>
<div className={styles.pro}>
  {
    data &&data.map(item=>  <BasketCard key={item.id} item={item} sil={()=>deleteItem(item.id)} favori={()=>addToWishlist(item)}/>)
  }
</div>
    </div>
  )
}

export default Basket
