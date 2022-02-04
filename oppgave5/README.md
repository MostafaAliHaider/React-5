## Oppgave 5
### Oppgave 1: Basic Component
* Create a component in the components folder
* Use it to render h1 My first Component /h1
* Use MyComponent in App.js

### Oppgave 2: Basic Prop
* Add a "title" prop on MyComponent. 
* Use it so that MyComponent render h1 It works /h1

### Oppgave 3: Passing props to a child component
* Create a Title Component in the Components folder.
* It should take one prop named title.
* Replace the h1 in MyComponent with the Title> component 
* It should still render "It Works" in the browser. Remember to pass the prop from MyComponent to Title

### Oppgave 4: Children prop
* Create a Wrapper component in the components folder
* Return section /section> from this component
* Use this in App.js
* Make it possible to render children between the wrappen component
* Use (props.children) in the wrappen component.

### Oppgave 5: Styling
* Add (className="flex") to the section in wrapper to flex items on Wrapper.
* Add necessary styling in the style.scss

### Oppgave 6: Lists
* Create an array const food =['Pizza', 'Hamburger', 'Coke];
* Render this list inside App.js 
* Use ul>li>/li>/ul> and food.map()
* Remember to add a key li>.
* All of this should be inside the return ().

### Oppgave 7: Lists component
* Create a food component in the component folder
* Replace the list create above with this component, it should still render the list 
* Remember to add "food"-prop to the Food> component
* Send the array as prop 

### Oppgave 8: Event
* Add a button to app.js
* Listen to click-event on this button. 
* Console.log("clicked") when clicking the button.

### Oppgave 9: Input
* Add an input field to App.js
* Listen to change-event on this field 
* console.log("change") when writing in this input