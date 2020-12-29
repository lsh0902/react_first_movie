import React from 'react';
import PropTypes from "prop-types";

/*
function Food({fav, pic, rating}) {
  return <div>
  <h1> hi {fav}</h1>
  <h5> { rating } </h5>
  <img src={pic} alt={fav}/>
  </div>;
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

const foodILike = [
  {
    name : "two um ba",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.msSbiQCx2D1UTRJFpumouwHaD9%26pid%3DApi&f=1",
    rating : 2.4
  },
  {
    name : "samgyupsal",
    image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.msSbiQCx2D1UTRJFpumouwHaD9%26pid%3DApi&f=1",
    rating : 5    
  },
]

function renderFood(dish) {
  //key는 사용은 안하고 그냥 고유 구분할 id 디비에서 primary key 같은 것.
  return <Food key={dish.name} name={dish.name} pic={dish.image} rating={dish.rating} />
}

function App() {
  return (
    <div className="App">
      <h1>hellossds</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}
*/

class App extends React.Component {
  constructor() {
    console.log("hello1");
  }

  state = {
    count : 0
  }

  add = ()=> {
    //setState를 호출해야 render 가 다시 호출돼서 화면이 업데이트됨. 
    //setState 호출시 새로운 state를 가지고 render 함수를 호출한다.
    this.setState(current => ({ count : current.count + 1}));
    this.setState({ count : this.state.count + 1});
  };
  minus = ()=> {
    this.setState({ count : this.state.count - 1});
  };

  render() {
  return (
    <div>
      <h1>hello am {this.state.count} </h1>
      <button onClick={this.add}>add</button>
      <button onClick={this.minus}>minus</button>
    </div>);
  }
}
export default Appff;
