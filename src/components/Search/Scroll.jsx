import React from 'react';

const Scroll = (props) => {
  return <div style={scrollStyle}>{props.children}</div>;
};

const scrollStyle = {
  overflow: 'scroll',
  border: '5px solid black',
  height: '800px',
};

export default Scroll;
