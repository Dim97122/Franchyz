import React from 'react';
import { Link } from 'react-router-dom';

import Player from 'components/player';

const PlayersList = ({ players }) => {
  const setList = () => {
    let playersList;
    if (players !== undefined) {
      playersList = players.map((player) => <Player key={player.id} player={player} />);
    }
    return playersList;
  };

  const setupPlayersListOrAddInvitation = () => {
    let content;
    if (players === null) {
      content = (
        <div className="container d-flex flex-column justify-content-center align-items-center my-5">
          <p>It seems you don&apost have players yet, let&aposs add some of them now</p>
          <Link to="/" className="btn btn-primary">Add Players</Link>
        </div>
      );
    } else {
      content = (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Jersey</th>
              <th scope="col">Position</th>
              <th scope="col">Height</th>
              <th scope="col">Weight</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {setList()}
          </tbody>
        </table>
      );
    }
    return content;
  };
  return (
    { setupPlayersListOrAddInvitation }
  );
};

export default PlayersList;