import constants from '../../constants/constants';
import styles from './Home_Text.module.css';


function Home_Text() {
  
  return (
    <div className={styles.text}>
    <div>{constants.HOME_TEXT}</div>
    <div>{constants.LOGIC}</div>
    </div>
  )
}

export default Home_Text
