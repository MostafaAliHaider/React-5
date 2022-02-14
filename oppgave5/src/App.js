import logo from './logo.svg';
import './App.css';
/* For oppgave 10 */
import { useState } from "react";

//components 
import MyComponent from './components/MyComponent';
import MyTitle from './components/Title';
import Wrapper from './components/Wrapper';
import Food from './components/Food';
import Alert from './components/Alert';


function App() {

  /* Oppgave 6 og 7 */
  const food = ['Pizza', 'Hamburger', 'Coke'];

  /* Oppgave 8 */
  function button() {
    /* console.log("Clicked"); */
  }
  /* Oppgave 9 */
  /* function handleInput(event) {
    const value = event.target.value;
    setText(value);
    console.log("change");
  } */

  /* Oppgave 10 */
  /* const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
  } */

  /* Oppgave 13 */
  const [inputValue, setInputValue] = useState('');

  /* Oppgave 14 */
  const [isClicked, setClicked] = useState(false);

  return (
    <div className="container">
      {/* <MyComponent/> */}

      {/* oppgave 1: The component is "linked" here so it can render the "MyComponent" component.*/}
      {/* oppgave 2: here i use a prop so that i can use MyComponent render <h1>It works <h1>*/}
      <div>
        <MyComponent title="it Works" />
      </div>
      {/* <div>
        <Title title = "Test"/>
      </div> */}

      {/* Oppgave 2 */}
      <MyTitle />

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
        <Food food={food.map(function (foodList, index) {
          return <li key={index}>{foodList}</li>
        })} />
      </>



      {/* Oppgave 8, 9 og 10 er i Alert.js*/}

      {/* Oppgave 13 og 14*/}
       <>
        <Alert isClicked={isClicked} setClicked={setClicked} setInputValue={setInputValue}/>
      </>  
      {/* hvis "isClicked er true så vise p-taggen, else vis null/ingenting" */}
      {isClicked ? <p>{inputValue}</p> : null}

      {/* <p>{inputValue}</p> */}
      
    </div>
  );

}

export default App;




