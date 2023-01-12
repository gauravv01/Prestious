import Content from "../../components/Content/Content";
import Navbar from "../../components/Navbar/Navbar";
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.about}>
    <Navbar/>
    <Content/>
    </div>
  )
}

export default About
