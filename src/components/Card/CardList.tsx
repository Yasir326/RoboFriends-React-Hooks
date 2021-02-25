import { useSelector } from 'react-redux';
import React from 'react';
import Card from './Card';
import { IRobots } from '../../types';



const CardList = () => {
  const robots: Array<IRobots> = useSelector((state) =>
    state.requestRobots.robots.filter(
      (robot: { name: string }) => {
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
