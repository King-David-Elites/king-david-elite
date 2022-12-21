import { useState } from "react";
import theme from "../../application/utils/Theme";


const ReadMoreReadLess = ({ message, showLess, setShowLess }) =>   
{      
    const toggleText = () => {
        setShowLess(prevState => !prevState);
    }

    return (
        <p onClick={toggleText} style={{ color: showLess ? "#000" : theme.neutralColor }}>
            {showLess ? message.substr(0, 30).concat("....") : message}            
        </p>
    );
}

export default ReadMoreReadLess;