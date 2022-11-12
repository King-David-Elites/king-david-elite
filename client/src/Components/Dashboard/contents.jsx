import { FaComment, FaWallet, FaBell, FaUser} from "react-icons/fa"

export const navigators = [
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
        title: "Verification",
        icon: <FaUser color="#FFDF00"/>,
        link: "profile/verification"
    }
]