import React from 'react'

const Header = (props) => {
    console.log("Hello There whats up!")
    return (
        <div style = {{color:"red"}}>
            <p>{props.name}</p>
        </div>
    )
}
export default Header;
