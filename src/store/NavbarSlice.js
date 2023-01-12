import { createSlice } from "@reduxjs/toolkit";
import constants from "../constants/constants";

const initialState={navbar:{home:false,about:true,head_tail:true},content:{valid:false,content:''}};

const NavbarSlice=createSlice({
    name:'Navbar',
    initialState: initialState,
    reducers:{
        switchButtons(state,action){
          const buttonName=action.payload;
          if(buttonName===constants.HOME){
            state.navbar.home=false;
            state.navbar.about=true;
            state.navbar.head_tail=true
          }
          if(buttonName===constants.ABOUT){
            state.navbar.home=true;
            state.navbar.about=false;
            state.navbar.head_tail=true
          }
          if(buttonName===constants.HEAD_TAIL){
            state.navbar.home=true;
            state.navbar.about=true;
            state.navbar.head_tail=false
          }
        },
        readMore(state){
        state.content.valid=state.content.valid===true?false:true;
        if(state.content.valid){
            state.content.content=`${constants.ABOUT_TEXT} ${constants.VISION}`;
        }else{
        const arr=constants.ABOUT_TEXT.split('');
        let newContent=arr.slice(0,80);
        newContent.push('...')
        state.content.content=newContent
        }
    }
    }
})

export const NavbarActions=NavbarSlice.actions;

export default NavbarSlice;