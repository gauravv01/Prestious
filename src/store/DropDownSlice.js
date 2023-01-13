import { createSlice } from "@reduxjs/toolkit";
import constants from "../constants/constants";

function createObj(value){
    const obj={};
    obj.head=value;
    obj.next=null;

    return obj
}
function calEdge(collection,key){
    let length;
    let curr=collection[key];
    if(curr)length=1;
    while(curr.next!==null){
        curr=curr.next;
        length++;
    }
    return length;
}

function sameLeg(collection,value){
    const length=calEdge(collection,0);
    for(let key of collection){
        let curr=key;
       while(curr.next!==null){
        // edge++;
        curr=curr.next;
       }
       let keyLength=calEdge(collection,collection.indexOf(key))
        if(curr.head!==value){
            curr.next=createObj(value)
               return}
        else if(curr.head===value && keyLength!==length){
            while(keyLength<length-1){
                curr.next=createObj(null);
                curr=curr.next;
                keyLength++;
            }
            curr.next=createObj(value)
            return
        }
       if(key===collection[collection.length-1] && keyLength===length){
        const obj=  createObj(value)
         collection.push(obj)
        return}
    }
}

const initialState={
    collection:[],
    temp:[],
    value:constants.OPTIONS[0],
    not_value:true,
    message:false
 }

const DropDownSlice=createSlice({
    name:'DropDownSlice',
    initialState: initialState,
    reducers:{
        onchangeValue(state,action){
         const item=action.payload;
         state.value=item;
         if(state.value===constants.OPTIONS[0]){state.not_value=true}
         else{state.not_value= false;
              state.message=false;        
        }
        },
        assignValue(state){
            if(state.not_value===true){
                state.message=true;
                return
            }
            const length=state.temp.length;
            if(!length ){
                const obj=  createObj(state.value)
                    state.collection.push(obj);
                    state.temp.push(state.value)
            }
            else{
                sameLeg(state.collection,state.value);
                state.temp.push(state.value)
            }
            state.value=constants.OPTIONS[0];
            state.not_value=true;
    },
}
});

export const DropDownActions=DropDownSlice.actions;

export default DropDownSlice;


