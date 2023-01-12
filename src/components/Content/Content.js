import { useSelector,useDispatch } from "react-redux";
import { NavbarActions } from "../../store/NavbarSlice";
import constants from "../../constants/constants";
import styles from './Content.module.css';
import { useEffect } from "react";




function Content() {
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(NavbarActions.readMore())
    },[]);

    const readMore=()=>{
        dispatch(NavbarActions.readMore())  
     }

   const read_more=useSelector(state=>state.Navbar.content);
   const value= read_more.valid ? constants.READ_LESS : constants.READ_MORE;
   
  return (
      <div className={styles.about}>
      {read_more.content}
      <span className={styles.read_more} onClick={readMore}>{value}</span>  
    </div>
  )
}

export default Content
