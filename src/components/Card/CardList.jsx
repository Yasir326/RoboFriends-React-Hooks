import { useSelector } from 'react-redux';
import React from 'react';
import Card from './Card';

const CardList = () => {
  const robots = useSelector((state) =>
    state.requestRobots.robots.filter(
      (robot) => {
        return robot.name
          .toLowerCase()
          .includes(state.searchRobots.searchField.toLowerCase());
      },
      {
        error: state.requestRobots.pending,
      }
    )
  );

  return (
    <div>
      {robots.map((robot) => {
        return (
          <Card
            id={robot.id}
            name={robot.name}
            email={robot.email}
            key={robot.id}
          />
        );
      })}
      ;
    </div>
  );
};

export default CardList;
