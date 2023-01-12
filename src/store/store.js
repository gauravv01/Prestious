import { configureStore } from "@reduxjs/toolkit";
import NavbarSlice from "./NavbarSlice";
import DropDownSlice from "./DropDownSlice";


const store=configureStore({
    reducer:{Navbar:NavbarSlice.reducer,DropDown:DropDownSlice.reducer}
});


export default store