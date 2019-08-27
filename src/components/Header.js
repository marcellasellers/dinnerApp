import React from 'react'

const Header = (props) => {
    const currentUser = props.user;
    return (
        <div>
            <h1>Welcome!</h1>
            <h3><i>What's for breakfast?</i></h3>
        </div>
    );
};

export default Header;


