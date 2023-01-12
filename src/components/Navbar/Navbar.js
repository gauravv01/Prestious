import { Link } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { NavbarActions } from '../../store/NavbarSlice';
import Button from '../Button/Button';
import constants from '../../constants/constants';
import styles from './Navbar.module.css';

const HOME=constants.HOME;
const ABOUT=constants.ABOUT;
const HEAD_TAIL=constants.HEAD_TAIL;

function Navbar() {
  const dispatch=useDispatch();
  const button=useSelector(state=>state.Navbar.navbar);

  const switchBtn=(e)=>{
    dispatch(NavbarActions.switchButtons(e.target.name))
   }

  return (
    <div className={styles.navbar}>
        <div className={styles.heading}>{constants.HEADING}</div>
        <div className={styles.button_parent} onClick={switchBtn}>
       {button.home && <Link to={constants.HOME_PAGE}><Button name={HOME} children={HOME}/></Link>}
       {button.about && <Link to={constants.ABOUT_PAGE}><Button name={ABOUT} children={ABOUT}/></Link>}
       {button.head_tail &&<Link to={constants.HEAD_TAIL_PAGE}><Button name={HEAD_TAIL} children={HEAD_TAIL}/></Link>}
        </div>
    </div>
  )
}

export default Navbar
