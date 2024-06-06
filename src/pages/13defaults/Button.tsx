import React from 'react';

//1st WAY
function Button(props:any) {
  const text = 'Default Text of Big Button';
    return (
      <button>{text}</button>
    );
}
export default Button;


//2nd WAY
// function Button({text = 'Default Text of Big Button'}) {
  
//     return (
//       <button>{text}</button>
//     );
// }
// export default Button;

//3rd WAY
// function Button(props:any) {
//   return <h1>{props.text}</h1>
// }

// Button.defaultProps = {
//   text: 'This is default text',
// };

// export default Button;