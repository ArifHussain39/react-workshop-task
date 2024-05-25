// Profile.js

import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = useSelector((state) => state.reservedRockets);
  const missions = useSelector((state) => state.missions);
  const joinedMissions = useSelector((state) => state.joinedMissions);

  const reservedRocketsData = rockets.filter((rocket) =>
    reservedRockets.includes(rocket.id)
  );
  const joinedMissionsData = missions.filter((mission) =>
    joinedMissions.includes(mission.mission_id)
  );

  return (
    <div
      style={{
        display: "flex",
        marginBottom: "20px",
        gap: "40px",
      }}
    >
      <div>
        <h2>Reserved Rockets</h2>
        {reservedRocketsData.map((rocket) => (
          <div key={rocket.id}>
            <img
              src={rocket.flickr_images[0]}
              alt={rocket.name}
              style={{ width: "100px" }}
            />
            <h3>{rocket.name}</h3>
          </div>
        ))}
      </div>
      <div>
        <h2>Joined Missions</h2>
        {joinedMissionsData.map((mission) => (
          <div key={mission.mission_id}>
            <h3>{mission.mission_name}</h3>
            <p>{mission.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
