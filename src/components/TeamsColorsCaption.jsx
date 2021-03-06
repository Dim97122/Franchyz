import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import Modal from 'react-bootstrap/Modal';

import PrimaryButton from 'components/Buttons/PrimaryButton';
import QuestionMarkIcon from 'components/Icons/QuestionMarkIcon';
import CloseIcon from 'components/Icons/CloseIcon';

const TeamsColorsCaption = ({ currentTeam }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const practiceStyling = (color) => (
    {
      color,
      borderColor: color,
    }
  );

  const gameStyling = (color) => (
    {
      backgroundColor: color,
      borderColor: color,
    }
  );

  const setupCaption = () => {
    const obj = JSON.parse(Cookies.get('teamsColors'));
    if (currentTeam === null) {
      return (
        Object.keys(obj).map((team) => (
          <div key={team} className="d-flex flex-column justify-content-center align-items-center my-3">
            <div className="text-white font-weight-bold mb-3">
              {team}
            </div>
            <div className="d-flex justify-content-around w-75">
              <div className="d-flex justify-content-center rounded p-3 text-white font-weight-bold w-25" style={gameStyling(obj[team])}>
                GAME
              </div>
              <div className="d-flex justify-content-center rounded p-3 bg-white font-weight-bold w-25" style={practiceStyling(obj[team])}>
                PRACTICE
              </div>
            </div>
          </div>
        ))
      );
    }
    return (
      <div className="d-flex flex-column justify-content-center align-items-center my-3">
        <div className="text-white font-weight-bold mb-3">
          {currentTeam.title}
        </div>
        <div className="d-flex justify-content-around w-75">
          <div className="d-flex justify-content-center rounded p-3 text-white font-weight-bold w-25" style={gameStyling(obj[currentTeam.title])}>
            GAME
          </div>
          <div className="d-flex justify-content-center rounded p-3 bg-white font-weight-bold w-25" style={practiceStyling(obj[currentTeam.title])}>
            PRACTICE
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <button type="button" className="caption-button text-primary" onClick={handleShow}>
        <QuestionMarkIcon />
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-dark text-primary" closeButton>
          <Modal.Title>Colors Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">{setupCaption()}</Modal.Body>
        <Modal.Footer className="bg-dark">
          <PrimaryButton text="Close Caption" onClick={handleClose} icon={<CloseIcon />} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TeamsColorsCaption;

TeamsColorsCaption.propTypes = {
  currentTeam: PropTypes.shape({
    club_id: PropTypes.number,
    coach: PropTypes.shape({
      'admin?': PropTypes.bool,
      arrival: PropTypes.string,
      birthdate: PropTypes.string,
      club_id: PropTypes.number,
      created_at: PropTypes.string,
      email: PropTypes.string,
      first_name: PropTypes.string,
      id: PropTypes.number,
      last_name: PropTypes.string,
      phone: PropTypes.string,
      updated_at: PropTypes.string,
    }),
    creator_id: PropTypes.number,
    id: PropTypes.number,
    players: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
  }),
};

TeamsColorsCaption.defaultProps = {
  currentTeam: null,
};
