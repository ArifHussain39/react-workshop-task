// Missions.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchMissions, joinMission, leaveMission } from "../redux/Actions";

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  const joinedMissions = useSelector((state) => state.joinedMissions);

  useEffect(() => {
    axios.get("https://api.spacexdata.com/v3/missions").then((response) => {
      dispatch(fetchMissions(response.data));
    });
  }, [dispatch]);

  const handleJoinLeave = (missionId) => {
    if (joinedMissions.includes(missionId)) {
      dispatch(leaveMission(missionId));
      console.log("mission leaved ");
    } else {
      dispatch(joinMission(missionId));
    }
  };

  return (
    <div className="Missions">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td
                style={{
                  display: "flex",
                  gap: "10px",
                  
                  alignItems: "center",
                  color: joinedMissions.includes(mission.mission_id)
                    ? "green"
                    : "red",
                }}
              >
                {joinedMissions.includes(mission.mission_id)
                  ? "Member"
                  : "Not a Member"}
                <button
                  style={{
                    backgroundColor: joinedMissions.includes(mission.mission_id)
                      ? "red"
                      : "green",
                    color: "white",
                    padding: "5px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => handleJoinLeave(mission.mission_id)}
                >
                  {joinedMissions.includes(mission.mission_id)
                    ? "Leave Mission"
                    : "Join Mission"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
