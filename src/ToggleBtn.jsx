// import useState
import { useState } from 'react';
function ToggleBtn() {
  const [isOuch, setIsOuch] = useState(false);

  const handleEvent = () => {
    setIsOuch(!isOuch);
  };

  return (
    <div>
      <button onClick={handleEvent}>{isOuch ? 'Ouch' : 'Click me!'}</button>
    </div>
  );
}

export default ToggleBtn;
