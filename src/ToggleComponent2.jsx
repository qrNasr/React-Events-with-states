import { useState } from 'react';

function ToggleComponent2() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <button onClick={handleToggle}>{isFlipped ? 'Flipped' : 'Not Flipped'}</button>
    </div>
  );
}

export default ToggleComponent2;
