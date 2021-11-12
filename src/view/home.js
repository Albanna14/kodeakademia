import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

class Home extends React.Component {
    state = {
        skills:[
            {
                id:1,
                name:"JavaSript",
                decription:"JavaScript Description",
                image: require ("../image/js.png").default
            },
            {
                id:2,
                name:"React",
                decription:"React Description",
                image: require ("../image/react.png").default
            },
            {
                id:3,
                name:"Veu",
                decription:"Veu Description",
                image: require ("../image/vue.png").default
            },
            {
                id:4,
                name:"Svelte",
                decription:"Svelte Description",
                image: require ("../image/svelte.png").default
            }
        ]
    }
    render(){
        const {skills} = this.state
        return(
            <div>
                <Navbar/>
                <h1>Home Page</h1>
                <div style = {container}>
                    {skills.map(item=>
                        <div key={item.id} style = {card}>
                            <img src={item.image} alt={item.image} style = {img}/>
                            <h3>{item.name}</h3>
                        </div>
                        )}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home

const container = {
    display:"flex",
    padding:"0 6rem",
    justifyContent:"space-between"
}

const card = {
    width:"20%",
    height:"15rem"
}

const img = {
    width:"100%",
    height:"100%"
}
