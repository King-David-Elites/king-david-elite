import { useState } from "react";
import theme from "../../application/utils/Theme";


const ReadMoreReadLess = ({ children }) => {
    const [showLess, setShowLess] = useState(true);

    const toggleText = () => {
        setShowLess(prevState => !prevState);
    }

    return (
        <p onClick={toggleText} style={{ color: showLess ? "#000" : theme.neutralColor }} showLess={showLess}>
            {showLess ? children.substr(0, 30).concat("....") : children}
        </p>
    );
}

export default ReadMoreReadLess;