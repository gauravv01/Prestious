import React from 'react'
import Home_Text from '../../components/Home_Text/Home_Text'
import Navbar from '../../components/Navbar/Navbar';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
     <Navbar/> 
     <Home_Text/>
    </div>
  )
}

export default Home
