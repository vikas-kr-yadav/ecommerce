import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Item from './Item'
import "./Home.css";
import Container from './Container';
const Home = () => {

  const name=["Produce","Prepared Food","Conned foods & Soups","Bakery","Dairy & Eggs","Frozen","Meat & Seafood"];

  return (
    <div className="home">
        <Navbar/>
        <div className='home-container'>
            <div className="container_sidebar">
                <Sidebar/>
            </div>
            <div className="container_item">
              <Container name={name[0]}/>
              <Container name={name[1]}/>
              <Container name={name[2]}/>
              <Container name={name[3]}/>
              <Container name={name[4]}/>
              <Container name={name[5]}/>
              <Container name={name[6]}/>
              <Container name={name[0]}/>
              
            </div>
            
        </div>
    </div>
  )
}

export default Home;