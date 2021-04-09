import Navbar from './components/Navbar';
import Trending from './components/Trending'
import './App.css';

function App() {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />
    <div className="content">
      <Navbar></Navbar>
      <Trending></Trending>
    </div>
    </>
  );
}

export default App;
