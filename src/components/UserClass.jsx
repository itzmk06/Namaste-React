import React from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"Developer",
            location:"USA",
            html_url:"https://github.com",
            avatar_url:"https://imgs.search.brave.com/BcDvkcUXq-SlWJ38pMCf-MdnqrDHBPR0p1x2gJEuicA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIw/MjQxNTQwL3Bob3Rv/L3JlZC1hcHBsZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UzF3SG9hcnFZMGVU/elpUbmdQNmVaX3Rn/d1RKbnpQZFRpYVZF/M2d0WUhFaz0"
        }
    };
    componentDidMount(){
        const fetchData= async()=>{
            const data=await fetch("https://api.github.com/users/itzmk06");
            const json_data=await data.json();
            console.log(json_data);
            this.setState(json_data);
        }
        fetchData();
    }

    render(){
        const {name,location,html_url,avatar_url}=this.state;
        return(
            <div className="user">
                <UserContext.Consumer>
                    {
                        (data)=>{
                            console.log(data.name)
                        }
                    }
            </UserContext.Consumer>
                <img src={avatar_url}/>
                <h1>{name}</h1>
                <h1>{location}</h1>
                <Link target="_blank" to={html_url}>Github Link</Link>
            </div>
        );
    };
};

export default UserClass;