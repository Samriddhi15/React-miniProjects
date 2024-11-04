
import './App.css';

function App() {
  return (
    <div className="App">
     <div className='logo-box'>
     <img src="./logo.png" alt="logo" className='logo' />
     <h2>Sign In to Twitter</h2>

     <button>
      <img src="./google.png" alt="google" className='logo' />
      Sign In with Google
     </button>
     <button>
      <img src="./apple.png" alt="google" className='logo' />
      Sign In with Google
     </button>

      <hr></hr>
      <span>Or</span>
      <form>
        <input type="text" placeholder='Phone email or username' />
        <button>Next</button>
      </form>
      
       <button className='butt'>Forget Password</button>
       <p>Don't Have an account <a className='para' >Sign Up</a></p>

     </div>
    </div>
  );
}

export default App;
