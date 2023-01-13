import { useDispatch ,useSelector} from "react-redux";
import { DropDownActions } from "../../store/DropDownSlice";
import constants from "../../constants/constants"
import Button from "../Button/Button";
import styles from './DropDown.module.css';

function Dropdown() {
    const dropDown=useSelector(state=>state.DropDown)
    const {collection,value,not_value,message}=dropDown;
    const dispatch=useDispatch();
    const setValue=(e)=>{
        dispatch(DropDownActions.onchangeValue(e.target.value))
    }
    const addItem=(e)=>{
        dispatch(DropDownActions.assignValue())
    }
 
    function printLegs(leg){ 
        if(leg.next===null)return
        let el='';
            let curr=leg;
        while(curr.next!==null){
        curr=curr.next;
        const head=curr.head?curr.head:'\xa0\xa0\xa0';
        el += '\xa0' + head ; 
        }
       return el;
       }
     

  return (
    <div className={styles.parent_comp}>
        <div className={styles.btn_along}>
            <div className={styles.message_along}>
        <div className={styles.dropdown}>
        <div>{constants.DROPDOWN}</div>
        <select value={!not_value && value} onChange={setValue}>{constants.OPTIONS.map((item,i)=>{return <option key={i}>{item}</option>})}</select>
        </div>
       {message && <div className={styles.message}>{constants.MESSAGE}</div>}
        </div>
      <Button className={styles.button} children={constants.SUBMIT} onClick={addItem}/>
      </div>
      <div className={styles.line}></div>
      {collection.length>0 && <ul>{collection.map((item,i)=>{return <li key={i+1}>{item.head}{printLegs(item)}</li>})}</ul>}
    </div>
  )
}

export default Dropdown
