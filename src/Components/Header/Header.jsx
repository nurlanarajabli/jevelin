import React from "react";
import styles from "./Header.module.scss";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosOptions } from "react-icons/io";
import { LuGlasses } from "react-icons/lu";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiCircleQuestion } from "react-icons/ci";
import { SlSupport } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { MdFavorite } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Header = () => {

  const navigation = useNavigate('')
  return (
    <div className={styles.first}>
      <div className={styles.containerfirst}>
        <div className={styles.icons}>
          <div className={styles.iconWrapper}>
            <IoIosOptions />
            <div className={styles.dropdown}>
              <ul>
                <li>
                  <a href="#">Showcase</a>
                </li>
              </ul>
            </div>
          </div>
          <LuGlasses />
          <MdOutlineShoppingBag />
          <CiCircleQuestion />
          <SlSupport />
          <CiMail />
        </div>
        <div className={styles.logo}>
          <h1>Jevelin</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="" onClick={()=>navigation('/')}>Home</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Reviews</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
          </ul>
        </nav>
        <div className={styles.btn}>
          <div className={styles.icon}>
            <CiShoppingCart onClick={()=>navigation('/basket')} />
            <MdFavorite onClick={()=>navigation('/wishlist')} />
            <MdAdminPanelSettings  onClick={()=>navigation('/dashboard')}/>
            {/* <span>0</span> */}
          </div>

          <button>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
