import React from 'react';

function List(props: any) {
  let titleText = `Favorite ${props.name}`;
  if (props.children instanceof Array) {
    titleText += 's';
  }
  return (
    <div>
      <h1 style={{textAlign:'center'}}>{titleText}</h1>
      <ul style={{textAlign:'center'}}>{props.children}</ul>
    </div>
  );
}

export default List;