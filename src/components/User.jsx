const User=({name,age})=>{
    return(
        <div className="user">
            <h1>Hello from user function</h1>
            <h1>Name : {name}</h1>
            <h1>Age : {age}</h1>
        </div>
    );
};
export default User;