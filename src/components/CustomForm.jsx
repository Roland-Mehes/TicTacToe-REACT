import React from 'react';
import styles from './CustomForm.module.css';

const CustomForm = () => {
  return (
    <div className={styles.mainContainer}>
      <form className={styles.customForm}>
        <h3>Let us know more about you</h3>
        <input className={styles.customInput} type="text" placeholder="NAME" />
      </form>
    </div>
  );
};

export default CustomForm;
