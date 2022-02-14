import { useState } from "react";


export default function Alert({alert, setInputValue, isClicked, setClicked}){
    const [text, setText] = useState("");

    function handleInput(event) {
        const value = event.target.value;
        setText(value);
        console.log("change");
      }

    function button() {
        /* console.log("Clicked"); */
      }
    
/* Denne gjelder også oppgave 11 */
    const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    /* oppgave 13 */
    setInputValue(text);
    setText('');
    /* oppgave 14 */
    if(isClicked === false && text !== ''){
        setClicked(true)
        
    }else{
        setClicked(false)
        
    }
  }
  
    return (
        <>
        
        <p>Data kommer her...</p>
        {text}
        <form onSubmit={handleSubmit}>
          <label htmlFor="text"></label>
          <input
            type="text"
            placeholder="Add text..."
            onChange={handleInput}
            value={text}>
          </input>

          {/* Oppgave 8 */}
          {/* Denne satt jeg under form pga onSubmit jeg satt i form taggen */}
          <button onClick={button} type="submit">Button</button>
        </form>
      </>
    )
}