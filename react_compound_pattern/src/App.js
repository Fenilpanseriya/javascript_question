import logo from './logo.svg';
import './App.css';
import Tab from './Tab';
import { useState } from 'react';

function App() {
  const [tabIndex,setIndex]=useState("1");
  const handleChange=(index)=>{
    console.log(index)
    setIndex(index);
  }
  return (
    <div className="App">
      <Tab onChanges={handleChange} tabIndex={tabIndex}>
        <Tab.Header>
          <Tab.HeaderItems label={"tab1"} index="1"/>
          <Tab.HeaderItems label={"tab2"} index="2"/>
          <Tab.HeaderItems label={"tab3"} index="3"/>
        </Tab.Header>
        <br/>
        <Tab.ItemContainer>
          <Tab.ContainerItems index="1"/>
          <Tab.ContainerItems index="2"/>
          <Tab.ContainerItems index="3"/>
        </Tab.ItemContainer>
      </Tab>
    </div>
  );
}

export default App;
