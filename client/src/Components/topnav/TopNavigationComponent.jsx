import './TopNavigationComponent.css'


const TopNavigationComponent = ({ navOptions, activeOption, setActiveOption }) => {

    return (
        <div className="topnav-container">
            {
                navOptions.map((navOption, index) =>
                    <div key={index} className={`topnav-item  ${activeOption == navOption.state ? `active` : ""}`} onClick={() => { setActiveOption(navOption.state) }}>
                        <div className={`${activeOption === navOption.state ? `active border-b-2 border-b-theme-color` : ""}`}>
                            <span>{navOption.displayText.toUpperCase()}</span>

                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default TopNavigationComponent;