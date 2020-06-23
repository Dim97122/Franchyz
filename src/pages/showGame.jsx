import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import * as eventsAPI from 'services/eventsAPI.jsx'
import moment from 'moment'
import "../styles/app.scss";
import localization from 'moment/locale/fr';

function GameShow() {
	let {gamesId} = useParams();
	console.log("game_id" + gamesId);
	 const [game, setGame] = useState("");

	 useEffect(() => {  eventsAPI.getGame(gamesId).then((response) => setGame(response));
	
	}, [])

	  moment.updateLocale('fr', localization);

	return <>
<div className="card" style={{height:"350px", width:"400px", marginLeft:"100px", marginTop:"100px"}}>
  <div className="card-header">
  <div className="text-uppercase">{game.title}</div> 
  </div>
  <div className="card-body">
	<h6>Location</h6>
	<p> {game.address}</p>
	<p> {game.city}</p>
	<p> {game.zip_code} {game.country}</p>
	<br/>
	<h6> Date and Time </h6>
	<p> {moment(game.starting_date_time).format("LLLL")}</p>
	<h6> Duration in min: </h6>
	<p>{game.duration}</p>
	{ game.canceled !== "false" ? "" : <h6 className="redtext">The event is canceled.</h6>
	}
  </div>
</div>
	
	</>;
}

export default GameShow;
