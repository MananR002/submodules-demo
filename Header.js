import React from 'react'

const Header = (props) => {
    console.log("Hello this is a header!")
    return (
        <div style = {{color:"red"}}>
            <p>{props.name}</p>
        </div>
    )
}
export default Header;
