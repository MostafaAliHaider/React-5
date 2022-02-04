import logo from './logo.svg';
import './App.css';

//components 
import MyComponent from './components/MyComponent';
import MyTitle from './components/Title';
import Wrapper from './components/Wrapper';
import Food from './components/Food';


function App() {
  /* Oppgave 6 og 7 */
  const food = ['Pizza', 'Hamburger', 'Coke'];
  /* Oppgave 8 */
  function button(){
    console.log("Clicked");
  }
  /* Oppgave 9 */
  function handleInput(){
    console.log("change");
  }

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
 {/*      <>
        <ul>
            {food.map(function(foodList, index){
              return <li key= {index}>{foodList}</li>
            })}
          </ul>    
      </> */}
        
        {/* oppgave 7 */}
      {/* Under skriver  */}
        <>
        <Food food= { food.map(function(foodList, index){
              return <li key= {index}>{foodList}</li>
            })}/>
        </>
      
      {/* Oppgave 8 */}
      <button onClick = {button}>Button</button>
      
      {/* Oppgave 9 */}
      <form>
        <input type= "text" onChange ={handleInput}></input> 
      </form>
    </div>
  );

}

export default App;




