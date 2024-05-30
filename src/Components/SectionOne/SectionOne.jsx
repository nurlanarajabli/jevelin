import React from "react";
import styles from "./SectionOne.module.scss";

const SectionOne = () => {
  return (
    <div className={styles.second}>
      <div className={styles.containertwo}>
        <div className={styles.writes}>
          <h1>Lifestyle Smart <span style={{color:'#7D1EFF'}}> Watch</span></h1>
          <h3>TECHNOLOGY OF THE FUTURE</h3>
          <p>
            Reference site about Lorem Ipsum, giving information on its origins,
            as well as a random Lipsum generato
          </p>
        </div>
        <div className={styles.image}>
          <img
            src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Vector-Smart-Object-copy-3.png"
            alt=""
          />
        </div>
       
      </div>
    </div>
  );
};

export default SectionOne;
