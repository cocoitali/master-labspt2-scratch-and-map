import axios from "axios";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const UPDATING = "UPDATING";

export const getUserData = id => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get(
        `${
          process.env.REACT_APP_BACKEND_URL
        }/api/users/fb/${"2230667693622967"}`
      )
      .then(response => {
        dispatch({ type: SUCCESS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: "Error in getUserData API call" });
      });
  };
};

export const updateDisplayedUser = id => {
  return dispatch => {
    dispatch({ type: UPDATING, payload: "2230667693622967" });
  };
};
