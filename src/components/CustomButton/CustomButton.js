import "./style.css";
function CustomButton({backgroundColor,color,title,onClick}){
    return(
     <div className="customButtonBaseContainer" style={{backgroundColor,color}} onClick={onClick}>
      {title}
     </div>

    )
}
export default CustomButton;