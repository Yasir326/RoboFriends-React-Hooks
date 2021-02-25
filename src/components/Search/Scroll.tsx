import React from 'react';

type Props = {
  children?: JSX.Element | Error
}

const Scroll = (props: Props) => {
  return <div style={scrollStyle}>{props.children}</div>;
};

const scrollStyle = {
  overflow: 'scroll',
  border: '5px solid black',
  height: '800px',
};

export default Scroll;
