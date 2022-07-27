import {FaHome, FaComment, FaWallet, FaBell, FaUser} from "react-icons/fa"

export const navigators = [
    {
        title: "Home",
        icon: <FaHome color="#FFDF00"/>,
        link: "/"
    },
    {
        title: "Messages",
        icon: <FaComment color="#FFDF00"/>,
        link: "messages"
    },
    {
        title: "Wallet",
        icon: <FaWallet color="#FFDF00"/>,
        link: "wallet"
    },
    {
        title:"Notifications",
        icon: <FaBell color="#FFDF00"/>,
        link: "notifications"
    },
    {
        title: "Profile",
        icon: <FaUser color="#FFDF00"/>,
        link: ""
    }
]