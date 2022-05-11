/*import './App.css';

function App() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const temperature=()=>{
    if(true)
    return(<img id="temp" width={50} height={50} src='https://previews.123rf.com/images/imagevectors/imagevectors1601/imagevectors160100222/50599125-flat-green-temperature-icon-and-green-circle.jpg'/>)
  else{
    return(<img id="temp" width={50} height={50} src='https://w7.pngwing.com/pngs/222/641/png-transparent-computer-icons-temperature-miscellaneous-photography-presentation.png'/>)
  }
  }
  return (
    console.log(getRandomInt(3)),
      temperature()
  );
}

export default App;
*/
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
     setTimeout(() => {this.setState({timePassed: true})}, 1700);
    if (!this.state.timePassed){
      return (
        <img id="temp" width={50} height={50} src='https://previews.123rf.com/images/imagevectors/imagevectors1601/imagevectors160100222/50599125-flat-green-temperature-icon-and-green-circle.jpg'/>
        );
    }else{
      return (
        <img id="temp" width={50} height={50} src='https://w7.pngwing.com/pngs/222/641/png-transparent-computer-icons-temperature-miscellaneous-photography-presentation.png'/>      
      );
  }
  }
}
export default App;