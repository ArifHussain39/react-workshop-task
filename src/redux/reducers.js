// reducers.js

import {
  FETCH_ROCKETS,
  FETCH_MISSIONS,
  RESERVE_ROCKET,
  CANCEL_RESERVATION,
  JOIN_MISSION,
  LEAVE_MISSION,
} from "./Actions";

const initialState = {
  rockets: [],
  missions: [],
  reservedRockets: [],
  joinedMissions: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, rockets: action.payload };
    case FETCH_MISSIONS:
      return { ...state, missions: action.payload };
    case RESERVE_ROCKET:
      return {
        ...state,
        reservedRockets: [...state.reservedRockets, action.payload],
      };
    case CANCEL_RESERVATION:
      return {
        ...state,
        reservedRockets: state.reservedRockets.filter(
          (rocketId) => rocketId !== action.payload
        ),
      };
    case JOIN_MISSION:
      return {
        ...state,
        joinedMissions: [...state.joinedMissions, action.payload],
      };
    case LEAVE_MISSION:
      return {
        ...state,
        joinedMissions: state.joinedMissions.filter(
          (missionId) => missionId !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
