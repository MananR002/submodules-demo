import React from 'react'

const Header = (props) => {
    console.log("Hello here!")
    return (
        <div style = {{color:"red"}}>
            <p>{props.name}</p>
        </div>
    )
}
export default Header;
