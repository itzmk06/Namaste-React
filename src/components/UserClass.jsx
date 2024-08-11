import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        count1:0,
        count2:1
    }
    console.log("child constructor is called")
  }
  componentDidMount(){
    console.log("child did mount is called");
  }

  render() {
    console.log("child render is called")
    const {count1,count2}=this.state;
    const {name,age}=this.props;
    return (
      <div className="user-class">
        <h1>Hello from user class</h1>
        <h1>Name : {name}</h1>
        <h1>Age : {age}</h1>
        <h1>count1 :{count1}</h1>
        <h1>count2 : {count2}</h1>
        <button onClick={()=>{
            this.setState(
                {
                    count1:this.state.count1+1,
                    count2:this.state.count2+1,
                }
            )
        }}>Increase count1</button>
      </div>
    );
  };
};
export default UserClass;
