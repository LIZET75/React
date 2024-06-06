import React from 'react';

function Button(props:any) {
    return (
      <button style={{fontSize:'10px', backgroundColor: '#4CAF50',padding: '15px 32px', margin : '4px 2px'}} onClick={props.onClick}>
        Click me!
      </button>
    );
}

export default Button;






// const InlineStyledButton = () => {
//   const buttonStyle = {
//     backgroundColor: '#4CAF50', // Green background
//     border: 'none',
//     color: 'white',
//     padding: '15px 32px',
//     textAlign: 'center',
//     textDecoration: 'none',
//     display: 'inline-block',
//     fontSize: '16px',
//     margin: '4px 2px',
//     cursor: 'pointer'
//   };

//   return (
//     <button style={buttonStyle}>
//       Click me
//     </button>
//   );
// };

// export default InlineStyledButton;

