import React from 'react';

const Navbar = () => {
    return(
        <div style={nav}>
            <h1>kodeakademia</h1>
            <ul style={mylist}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar

const nav = {
    display: "flex",
    background: "#fe024e",
    padding: "0 6rem",
    justifyContent: "space-between",
    color:"#fff",
    alignItems:"center"
}

const mylist = {
    listStyle:"none",
    display:"flex",
    justifyContent:"space-between",
    width:"20%"
}