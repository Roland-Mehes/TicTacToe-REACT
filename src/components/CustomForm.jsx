import styles from './CustomForm.module.css';

const CustomForm = ({ userName, onUserNameChange }) => {
  return (
    <div className={styles.mainContainer}>
      <form onSubmit={(e) => e.preventDefault()} className={styles.customForm}>
        <h3>Let us know more about you</h3>
        <input
          className={styles.customInput}
          type="text"
          placeholder="NAME"
          value={userName || ''}
          onChange={(e) => onUserNameChange(e.target.value)}
        />
      </form>
    </div>
  );
};

export default CustomForm;
