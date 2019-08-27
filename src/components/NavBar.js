import React from "react";

const brandHeader = "Choice";

const NavBar = (props) => {
    return (
        <div>
            <nav className={'navbar navbar-expand-md navbar-light bg-light'}>
                <a className={'navbar-brand'}>{brandHeader}</a>
                <div className={'collapse navbar-collapse'} id={'navbarNavDropdown'}>
                    <ul className={'nav navbar-nav'}>
                        <li className={'nav-item active'}>
                            <a className={'nav-link'} href={'#'}>Home</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;