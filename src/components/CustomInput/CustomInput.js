import { useState } from "react";
import "./style.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
function CustomInput({type,placeholder,Icon,iconColor,isSecureEntry=false,inputValue,onChangeText})
{
    const [showText,setShowText]=useState(false);
    return(
        <div className="customInputBaseContainer">
            <div className="customInpuntIconContaier">
                {Icon ? <Icon color={iconColor} size={15}/>:null}
            </div>
            <div className="customInputInputContainer">
            <input value={inputValue} type={isSecureEntry ? (showText?"text" : "password"):type} placeholder={placeholder}
            onChange={onChangeText}/>
            </div>
            {isSecureEntry && (
                 <div className="customInputpasswodContainer" onClick={()=>{
                    setShowText(!showText);
                 }}>
                    {showText ?<FaEye />:<FaEyeSlash/>}
                     </div>
  
                )}
        </div>
    );
}
export default CustomInput;