import './TopNavigationComponent.css'


const TopNavigationComponent = ({ navOptions, activeComponent, setActiveComponent }) => {

    return (
        <div className="topnav-container">
            {
                navOptions.map((navOption, index) =>
                    <div key={index} className={`topnav-item  ${activeComponent === navOption.state ? `active` : ""}`} >
                        <button onClick={() => { setActiveComponent(navOption.state) }} className={`nav-button ${activeComponent === navOption.state ? `active` : ""} `}>
                            <span>{navOption.displayText}</span>
                        </button>
                    </div>
                )
            }
        </div>
    );
}

export default TopNavigationComponent;