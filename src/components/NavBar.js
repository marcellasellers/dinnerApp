import React from "react";

const NavBar = () => {
    return (
        <div>
            <nav className={'navbar navbar-expand-md navbar-light bg-light'}>
                <a className={'navbar-brand'}>Choice</a>
                <div className={'collapse navbar-collapse'} id={'navbarNavDropdown'}>
                    <ul className={'nav navbar-nav'}>
                        <li className={'nav-item active'}>

                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;