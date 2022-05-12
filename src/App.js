import React, {Component} from 'react';
import "./App.css";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      timePassed: false
    };
  }
  render() {
    const VongLap=()=>{
       if (!this.state.timePassed){
      return (<html><img id="cam" width={50} height={50} src='https://viliho.com/wp-content/uploads/2016/08/security-camera-xxl.png'/><br></br>
             <img id="cam2" width={50} height={50} src='https://media.istockphoto.com/vectors/surveillance-camera-icon-vector-id1138989739?k=20&m=1138989739&s=170667a&w=0&h=JheQCUKP4biUihsaMfOyuyFOi7FGfELSQClDlZgSkHg='/><br></br>
             <img id="cam1" width={50} height={50} src='https://cdn2.vectorstock.com/i/1000x1000/57/51/security-camera-dome-icon-in-flat-style-for-apps-vector-25915751.jpg'/>
             
            </html>
        );
    }else{
      return (
          <html>
             <img id="cam" width={50} height={50} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_hynrQl1MA1n3lsoH0R4MOpLbkhe810xWqg&usqp=CAU'/>
             <br></br>
            <img id="cam2" width={50} height={50} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8lf_44fSbM3_mRQ85DPGv5vpady1KzIRMwjAEWQHaE1tTXRbjQbV5SRB7KFgUuWbxXQ&usqp=CAU'/><br></br>
            <img id="cam1" width={50} height={50} src='https://cdn1.vectorstock.com/i/1000x1000/52/25/security-camera-dome-red-icon-on-white-background-vector-27785225.jpg'/>
               
          </html>
        );
  }
    }
     setTimeout(() => {this.setState({timePassed: !(this.state.timePassed)})}, 4000);

    return(
      VongLap()
    ) 
  }
}
export default App;