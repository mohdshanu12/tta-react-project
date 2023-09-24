//import logo from './logo.svg';
//import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
     <>
     <h3 className='text-left text-danger text-capitalize my-3'>LOREM IPSUM 
      
     <div className="col text-right">
      <a href="https://example.com" className="text-lg">Link1</a>
    </div> 
</h3>
          
     
     <div className="container">
  <div className="row">
    <div className="col-sm">
      <div className="card"  >
  <img src="https://picsum.photos/200/301" className="card-img-top" alt="..."
  height="200px"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
      <div className="card"  >
  <img src="https://picsum.photos/200/302" className="card-img-top" alt="..."
  height="200px"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
      <div className="card"  >
  <img src="https://picsum.photos/202/300" className="card-img-top" alt="..."
  height="200px"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>

 

{/* Second method for cintent horizontally- vertically */}

<div className="d-flex align-items-center justify-content-center my-3">
    <div className="p-2 m-2 bg-info text-white shadow rounded-2">THIS IS SOME CONTENTENT ALIGNED IN THE CENTER VERTCALLY AND HORIZONTALLY</div>
     
</div>

{/* footer content */}

<footer class="footer text-left">
  <div class="container">
  @ This is a contentent which is alignment left  </div>
</footer>
     </>
  );
}

export default App;
