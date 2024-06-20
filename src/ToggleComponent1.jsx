// import useState
import { useState } from 'react';

function ToggleComponent1() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <button onClick={handleToggle}>{isToggled ? 'On' : 'Off'}</button>
    </div>
  );
}

export default ToggleComponent1;
