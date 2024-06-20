function EventComponent() {
    // declare event functions as callback, here.
    // event functions are called when the event occurs.
    const handleEvent = (e) => {
      e.target.textContent = "Ouch";
    };

    return (
      <div>
        <button onClick={handleEvent}>Click me!</button>
      </div>
    );
  }

  export default EventComponent;

   {/* <button onClick={() => alert("Button clicked!")}>click here! </button> */}

// explain the code
// In this code, we're creating a React component called `EventComponent`.
// Inside this component, we're declaring a function called `handleEvent`.
// This function is an event handler, which means it's a function that's called when a specific
// event occurs (in this case, a click event).
// The `handleEvent` function takes an `e` parameter, which represents the event object.
// When the event occurs, the `handleEvent` function is called, and it changes the text
// content of the element that was clicked to "Ouch".
// We're then returning a JSX element that represents a button.
// We're using the `onClick` attribute to specify the event handler for the button's click event
// (i.e., the `handleEvent` function).
// When the button is clicked, the `handleEvent` function is called, and it changes the
// button's text content to "Ouch".
// The alternative code snippet at the bottom shows an inline event handler, which is a
// concise way to define a small event handler function directly in the JSX. In this case,
// the event handler function simply alerts "Button clicked!" when the button is clicked.
// This code is equivalent to the `handleEvent` function, but it's defined directly in the
// JSX rather than as a separate function declaration.

