import React from 'react'
import styles from './SecFour.module.scss'
import { FiYoutube } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SecFour = () => {
    return (
        <div>
            <div className={styles.secfr}>
                <div className={styles.contfr}>
                    <div className={styles.tectfr}>
                        <h1>What our
                            customers say</h1>
                        <div className={styles.tttfr}>
                            <div className={styles.imgfr}>
                                <img src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/tyler-nix-626668-unsplash2.jpg" alt="" />
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, necessitatibus nulla! Quasi laborum quaerat beatae dicta dolorum, vel quisquam. Veniam.</p>
                            <span>Ella Json</span>
                            <p>99</p>
                        </div>

                    </div>

                    <div className={styles.icun}>
                        <div className={styles.icn}>
                        <FiYoutube />
                         <CiTwitter/>
                         <FaFacebookF/>
                          <FaInstagram/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecFour
