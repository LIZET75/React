import React from 'react';
import Button from './button';

function Talker() {
  function handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return <Button onClick={handleClick}/>;
}

export default Talker;

// to call in the handleClick function, place yourself in the  talker page, not in the button