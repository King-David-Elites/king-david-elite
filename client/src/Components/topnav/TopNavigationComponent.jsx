import './TopNavigationComponent.css'

const TopNavigationComponent = ({ navOptions, activeComponent, setActiveComponent }) => {

    return (
        <div className="topnav-container">
            {
                navOptions.map((navOption, index) =>
                    <div key={index} className={`topnav-item  ${activeComponent === navOption.state ? `active` : ""}`} onClick={() => { setActiveComponent(navOption.state) }}>
                        <button className={`nav-btn ${activeComponent === navOption.state ? `active` : ""}`}>
                            <span>{navOption.displayText}</span>
                        </button>
                    </div>
                )
            }
        </div>
    );
}

export default TopNavigationComponent;