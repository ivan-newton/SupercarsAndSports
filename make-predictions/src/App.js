
import React, { Component } from 'react';
import img1 from './images/Ferrari.jpg.png';
import img2 from './images/Lambo.jpg';
import img3 from './images/McLaren.jpg.avif';
import img4 from './images/soccer.jpg';
import img5 from './images/basketball.jpg';
import img6 from './images/football.jpg.webp';


// Child Component
class ChildComponent extends Component 
{
  render()
   {
    const { question, currentOption, onPredict } = this.props;
    return (
      <div style={{ border: '1px solid #444', padding: '1rem', margin: '1rem' }}>
        <h2>{question}</h2>
        <p>{currentOption.name}</p>
        <img src={currentOption.img} alt={currentOption.name} style={{ width: '300px', height: 'auto' }} />
        <br />
        <button onClick={onPredict} style={{ marginTop: '0.5rem' }}>Change Option</button>
      </div>
    );
  }
}

// Parent Component
class App extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      carIndex: 0,
      sportIndex: 0,
      cars: [
        { name: 'Ferrari', img: img1 },
        { name: 'Lamborghini', img: img2 },
        { name: 'McLaren', img: img3 }
      ],
      sports: [
        { name: 'Soccer', img: img4 },
        { name: 'Basketball', img: img5 },
        { name: 'Football', img: img6 }
      ]
    };
  }

  handleCarPredict = () => {
    this.setState((prevState) => ({
      carIndex: (prevState.carIndex + 1) % prevState.cars.length
    }));
  };

  handleSportPredict = () => {
    this.setState((prevState) => ({
      sportIndex: (prevState.sportIndex + 1) % prevState.sports.length
    }));
  };

  render() 
  {
    return (
      <div>
        <ChildComponent
          question="What's the best supercar?"
          currentOption={this.state.cars[this.state.carIndex]}
          onPredict={this.handleCarPredict}
        />
        <ChildComponent
          question="What's the best sport?"
          currentOption={this.state.sports[this.state.sportIndex]}
          onPredict={this.handleSportPredict}
        />
      </div>
    );
  }
}

export default App;
