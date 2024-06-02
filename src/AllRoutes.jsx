import React from "react";
import {Routes ,Route} from "react-router-dom";

import {Home} from "../src/pages/Home";

import {Login} from "../src/pages/Login";

import {ProductDetails} from "../src/pages/ProductDetails"

export default function AllRoutes(){
<Routes>
<Route path="/" element={<Home />}/>
<Route path="/login" element={<Login/>}/>
<Route path="/productdetail" element={<ProductDetails/>}/>
                                             
</Routes>

}
                                     


