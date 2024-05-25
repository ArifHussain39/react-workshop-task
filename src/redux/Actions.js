// actions.js

// Action Types
export const FETCH_ROCKETS = "FETCH_ROCKETS";
export const FETCH_MISSIONS = "FETCH_MISSIONS";
export const RESERVE_ROCKET = "RESERVE_ROCKET";
export const CANCEL_RESERVATION = "CANCEL_RESERVATION";
export const JOIN_MISSION = "JOIN_MISSION";
export const LEAVE_MISSION = "LEAVE_MISSION";

// Action Creators
export const fetchRockets = (rockets) => ({
  type: FETCH_ROCKETS,
  payload: rockets,
});

export const fetchMissions = (missions) => ({
  type: FETCH_MISSIONS,
  payload: missions,
});

export const reserveRocket = (rocketId) => ({
  type: RESERVE_ROCKET,
  payload: rocketId,
});

export const cancelReservation = (rocketId) => ({
  type: CANCEL_RESERVATION,
  payload: rocketId,
});

export const joinMission = (missionId) => ({
  type: JOIN_MISSION,
  payload: missionId,
});

export const leaveMission = (missionId) => ({
  type: LEAVE_MISSION,
  payload: missionId,
});
