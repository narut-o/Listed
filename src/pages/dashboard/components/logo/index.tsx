import { IconButton, TextField } from "@mui/material";
import { Form } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai'
import "./style.css"

const Logo = ()=><div className="logo-divv" >
  <h1>Dashboard</h1>
  <div className="form-box">
  <form>
        <input type="text" placeholder="search"  />
        
 </form>

  </div>
  
  <div className="search-icon">{<AiOutlineSearch/>}</div>
</div>

export default Logo;