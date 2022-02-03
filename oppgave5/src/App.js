import logo from './logo.svg';
import './App.css';

//components 
import MyComponent from './components/MyComponent';
import MyTitle from './components/Title';
import Wrapper from './components/Wrapper';


function App() {
  const food = ['Pizza', 'Hamburger', 'Coke'];
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
      {/* <Wrapper>
            <MyTitle title = "test"/>
      </Wrapper> */}

      {/* Oppgave 6 */}
      <>
        <ul>
            {food.map(function(foodList, index){
              return <li key= {index}>{foodList}</li>
            })}
          </ul>    
      </>
        
      
    </div>
  );
}

export default App;

/* Oppgave 7 */
/* function Component ({ values}) {
  return (
    <>

    <h1>Students</h1>
    <ul>
      {values.map(value => (
          <li key= {values.id}>{values.name}</li>
      ))};
    </ul>
    </>
  )
}
 */


