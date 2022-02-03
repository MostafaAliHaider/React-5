import logo from './logo.svg';
import './App.css';

//components 
import MyComponent from './components/MyComponent';
import MyTitle from './components/Title';
import Wrapper from './components/Wrapper';


function App() {
  return (
    <div className="container">
     {/* <MyComponent/> */}
    {/* oppgave 1 og 2 */}
      <div> 
          <MyComponent title = "it Works"/>
      </div>
      {/* <div>
        <Title title = "Test"/>
      </div> */}
      {/* Oppgave 2 */}
      <MyTitle/>
    {/* oppgave 4 */}
      <Wrapper>
            <MyTitle title = "test"/>
      </Wrapper>
      
        

    </div>
  );
}

export default App;




