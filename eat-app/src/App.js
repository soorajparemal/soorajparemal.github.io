import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Slider from './components/slider';
import Welcome from './components/welcome';
import Detail from './components/detail';
import Blog from './components/blog';
import Contact from './components/contact';
import Footer from './components/footer';



function App() {
  return (
    <div>
      <Nav></Nav>
      <Slider></Slider>
      <Welcome></Welcome>
      <Detail></Detail>
      <Blog></Blog>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
