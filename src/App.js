import React from 'react';
// import logo from './logo.svg';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import { VictoryBar ,VictoryPie} from 'victory';


const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];
function App() {
  return (
    < div className = "App" >
      <h1> Hello Sam! </h1>
      
<VictoryPie
width={600}
height={300}>
  data={[
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 }
  ]}
/>

      <VictoryBar
        data={data}
        // data accessor for x values
        x="quarter"
        // data accessor for y values
        y="earnings"
      />

      <XYPlot
        width={600}
        height={300}>
        <HorizontalGridLines />
        <LineSeries
          data={[
            {x: 1, y: 10},
            {x: 2, y: 5},
            {x: 3, y: 15},
            {x: 4, y: 15},
            {x: 5, y: 15}

          ]}/>
        <XAxis />
        <YAxis />
      </XYPlot>


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
