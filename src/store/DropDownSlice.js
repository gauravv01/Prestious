import { createSlice } from "@reduxjs/toolkit";
import constants from "../constants/constants";

function createObj(value){
    const obj={};
    obj.head=value;
    obj.next=null;

    return obj
}

const initialState={
    collection:[],
    temp:[],
    value:constants.OPTIONS[0],
    not_value:true
 }

const DropDownSlice=createSlice({
    name:'DropDownSlice',
    initialState: initialState,
    reducers:{
        onchangeValue(state,action){
         const item=action.payload;
         state.value=item;
         if(state.value===constants.OPTIONS[0]){state.not_value=true}
         else{state.not_value= false}
        },
        assignValue(state){
            if(state.not_value===true)return
            const length=state.temp.length;
            if(!length || state.temp[length-1]===state.value){
                    const obj=  createObj(state.value)
                    state.collection.push(obj);
                    state.temp.push(state.value)
            }else{
                         let oldList=state.collection[state.collection.length-1];
                         let curr=oldList
                         while(curr.next!==null){
                         curr=curr.next;}
                         curr.next=createObj(state.value);
                         state.temp.push(state.value)
            }
    },
}
});

export const DropDownActions=DropDownSlice.actions;

export default DropDownSlice;


