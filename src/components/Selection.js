import React from 'react';
import '../styles/Child.css';
function Selection(props){
    let [bgColor, setBgColor] =React.useState({background:''});
    const updateSelectionStyle = () => {
        props.applyColor(setBgColor);
    }
    return(
        <div className="fix-box" onClick={updateSelectionStyle} style={bgColor}>

        </div>
    )
}
export default Selection;