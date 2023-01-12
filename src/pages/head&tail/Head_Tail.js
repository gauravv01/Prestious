import Dropdown from '../../components/Dropdown/Dropdown'
import Navbar from '../../components/Navbar/Navbar';
import styles from './Head_Tail.module.css';

function Head_Tail() {
  return (
    <div className={styles.head_tail}>
     <Navbar/> 
     <Dropdown/>
    </div>
  )
}

export default Head_Tail
