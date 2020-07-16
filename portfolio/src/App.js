import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://raw.githubusercontent.com/zukowskiz/portfolio/gh-pages/static/media/pat1.jpg',
    thumbnail: 'https://raw.githubusercontent.com/zukowskiz/portfolio/gh-pages/static/media/pat1.jpg',
    
  },
  {
    original: 'https://raw.githubusercontent.com/zukowskiz/portfolio/gh-pages/static/media/pat2.jpg',
    thumbnail: 'https://raw.githubusercontent.com/zukowskiz/portfolio/gh-pages/static/media/pat2.jpg',
    
  },
  {
    original: 'https://raw.githubusercontent.com/zukowskiz/portfolio/gh-pages/static/media/pat3.jpg',
    thumbnail: 'https://raw.githubusercontent.com/zukowskiz/portfolio/gh-pages/static/media/pat3.jpg',
    
  },
  {
    original: 'https://raw.githubusercontent.com/zukowskiz/portfolio/gh-pages/static/media/pat4.jpg',
    thumbnail: 'https://raw.githubusercontent.com/zukowskiz/portfolio/gh-pages/static/media/pat4.jpg',
    
  },
  {
    original: 'https://raw.githubusercontent.com/zukowskiz/portfolio/gh-pages/static/media/pat5.jpg',
    thumbnail: 'https://raw.githubusercontent.com/zukowskiz/portfolio/gh-pages/static/media/pat5.jpg',
    
  },
  {
    original: 'https://raw.githubusercontent.com/zukowskiz/portfolio/gh-pages/static/media/pat6.jpg',
    thumbnail: 'https://raw.githubusercontent.com/zukowskiz/portfolio/gh-pages/static/media/pat6.jpg',
    
  },
  {
    original: 'https://raw.githubusercontent.com/zukowskiz/portfolio/gh-pages/static/media/pat7.jpg',
    thumbnail: 'https://raw.githubusercontent.com/zukowskiz/portfolio/gh-pages/static/media/pat7.jpg',
    
  },
  {
    original: 'https://raw.githubusercontent.com/zukowskiz/portfolio/gh-pages/static/media/pat8.jpg',
    thumbnail: 'https://raw.githubusercontent.com/zukowskiz/portfolio/gh-pages/static/media/pat8.jpg',
    
  }
 
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Zach Z
        </p>
     
        
        
        <MyGallery/>
      </header>
    </div>
  );
}

export default App;
