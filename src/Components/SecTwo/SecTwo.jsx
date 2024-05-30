import React from 'react'
import styles from './SecTwo.module.scss'
import { CiMicrophoneOn } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaWifi } from "react-icons/fa6";


const SecTwo = () => {
    return (
        <div>
            <div className={styles.sec}>
                <div className={styles.cont}>
                    <div className={styles.imggg}>
                        <img src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Replace-screen-inside-this-SO3-1.jpg" alt="imgg" />
                    </div>
                    <div className={styles.text}>

                        <div className={styles.title}>
                            <span>MEET WITH OUR</span>
                            <h3>Splendid Features</h3>
                        </div>
                        <div className={styles.crd}>


                            <div className={styles.div}>
                                <div className={styles.divimg}>
                                    <CiMicrophoneOn style={{fontSize:'27px', color:'#7D1EFF'}} />
                                </div>
                                <div className={styles.sp}>
                                    <span>Voice Recognition</span>
                                    <p>Lorem ipsum dolor sit amet, con
                                        sectetur adipiscing elit. Mauris</p>
                                </div>



                            </div>

                            <div className={styles.div}>
                                <div className={styles.divimg}>
                                    <IoPhonePortraitOutline style={{fontSize:'27px', color:'#7D1EFF'}} />
                                </div>
                                <div className={styles.sp}>
                                    <span>Connect with your phone</span>
                                    <p>Lorem ipsum dolor sit amet, con
                                        sectetur adipiscing elit. Mauris</p>

                                </div>

                            </div>


                            <div className={styles.div}>
                                <div className={styles.divimg}>
                                    <FaWifi  style={{fontSize:'27px', color:'#7D1EFF'}}/>
                                </div>
                                <div className={styles.sp}>
                                    <span>Any task at hand</span>
                                    <p>Lorem ipsum dolor sit amet, con
                                        sectetur adipiscing elit. Mauris</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default SecTwo
