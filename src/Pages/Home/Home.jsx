import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import SectionOne from "../../Components/SectionOne/SectionOne";
import SecTwo from "../../Components/SecTwo/SecTwo";
import SecThree from "../../Components/SecThree/SecThree";
import axios from "axios";
import ProductCard from '../../Components/cards/ProductCard'
import styles from './Home.module.scss'
import SecFour from "../../Components/SecFour/SecFour";
import Footer from "../../Components/footer/Footer";

const Home = () => {

  const [data, setData] = useState([]);

  const getData = () => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        setData(res.data.products)
      })
  }


  const addToBasket = (item) => {
    axios.get("https://664c4fc135bbda10987fd0ce.mockapi.io/basket/basket")
      .then((res) => {
        const db = res.data
        const existingFile = db.find(x => x.id == item.id)
        if (existingFile) {
          axios.put(`https://664c4fc135bbda10987fd0ce.mockapi.io/basket/basket/${existingFile.id}`, { ...existingFile, count: existingFile.count + 1 })

        }
        else {
          axios.post('https://664c4fc135bbda10987fd0ce.mockapi.io/basket/basket', item, { ...item, count: 1 })
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const addToWishlist = (item) => {
    axios.get('https://664ae3eea300e8795d434de5.mockapi.io/basket/wishlist')
      .then(res => {
        const db = res.data
        const existingFile = db.find(x => x.id == item.id)
        if (existingFile) {
          alert('Mehsul Add To Wishlistde vardir')

        }
        else {
          axios.post('https://664ae3eea300e8795d434de5.mockapi.io/basket/wishlist', item)
        }
      })
  };








  return (
    <div>
      <Header />
      <SectionOne />
      <SecTwo />
      <SecThree />
      <div className={styles.title}>
        <p>ADJUSTABLE STRAPS</p>
        <h1>Choose the best
          color for your activity</h1>

      </div>
      <div className={styles.pro}>
        {data && data.map((item) => <ProductCard key={item.id} item={item} add={() => addToBasket(item)} favori={() => addToWishlist(item)} />)}
      </div>
      <SecFour />
      <Footer />
    </div>
  );
};

export default Home;
