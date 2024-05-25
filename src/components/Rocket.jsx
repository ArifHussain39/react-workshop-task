// Rockets.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  fetchRockets,
  reserveRocket,
  cancelReservation,
} from "../redux/Actions";

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = useSelector((state) => state.reservedRockets);

  useEffect(() => {
    axios.get("https://api.spacexdata.com/v4/rockets").then((response) => {
      dispatch(fetchRockets(response.data));
    });
  }, [dispatch]);

  const handleReserve = (rocketId) => {
    if (reservedRockets.includes(rocketId)) {
      dispatch(cancelReservation(rocketId));
    } else {
      dispatch(reserveRocket(rocketId));
    }
  };

  return (
    <div>
      {rockets.map((rocket) => (
        <div
          key={rocket.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            display: "flex",
          }}
        >
          <img
            src={rocket.flickr_images[0]}
            alt={rocket.name}
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
            }}
          />
          <div style={{ marginLeft: "10px" }}>
            <h2>{rocket.name}</h2>
            {reservedRockets.includes(rocket.id) ? (
              <button className="btn btn-success">Reserved</button>
            ) : null}
            <p>{rocket.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => handleReserve(rocket.id)}
              style={
                reservedRockets.includes(rocket.id)
                  ? { backgroundColor: "white", color: "black "}
                  : null
              }
            >
              {reservedRockets.includes(rocket.id)
                ? "Cancel Reservation"
                : "Reserve Rocket"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
