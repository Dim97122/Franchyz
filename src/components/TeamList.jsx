import React from 'react';
import PropTypes from 'prop-types';
import InvitationToCreateTeam from 'components/InvitationToCreateTeam';
import TeamCard from 'components/TeamCard';
import CreationTeamCard from 'components/CreationTeamCard';

const TeamList = ({ teams }) => {
  if (teams === undefined) {
    return (<> </>);
  }

  if (teams.length === 0) {
    return <InvitationToCreateTeam />;
  }

  return (
    <div id="team-list" className="d-flex py-2 border">
      { teams.map((team) => <TeamCard key={team.id} team={team} />) }
      <CreationTeamCard />
    </div>
  );
};

export default TeamList;

TeamList.propTypes = {
  teams: PropTypes.array,
}.isRequired;
