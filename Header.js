import React from 'react'

const Header = (props) => {
    console.log("Hello Header!")
    return (
        <div style = {{color:"red"}}>
            <p>{props.name}</p>
        </div>
    )
}
export default Header;
