import logo from './logo.svg';
import './App.css';

//components 
import MyComponent from './components/MyComponent';
import MyTitle from './components/Title';


function App() {
  return (
    <div className="container">
     {/* <MyComponent/> */}
    
      <div> 
          <MyComponent title = "it Works"/>
      </div>
      <MyTitle/>
    </div>
  );
}

export default App;




