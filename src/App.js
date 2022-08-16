import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className='title'>
        <h2>Contact US</h2>
      </div>
      <form className="contact">
        <div class="form-group">
          <label for="exampleInputEmail1"></label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
        </div>
        <div class="form-group">
          <label for="exampleInputName1"></label>
          <input type="text" class="form-control" id="exampleInputName1" placeholder="Enter your Name" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1"></label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  );
}

export default App;
