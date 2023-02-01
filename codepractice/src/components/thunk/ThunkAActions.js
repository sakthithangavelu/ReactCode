const GET_CURRENT_USER = "GET_CURRENT_USER";
const GET_CURRENT_USER_SUCCESS = "GET_CURRENT_USER_SUCCESS";
const GET_CURRENT_USER_FAILURE = "GET_CURRENT_USER_FAILURE";

const getUser = () => {
  return (dispatch) => {
    dispatch({ type: GET_CURRENT_USER });
    return axios.get("/api/auth/user").then(
      (user) => dispatch({ type: GET_CURRENT_USER_SUCCESS, user }),
      (err) => dispatch({ type: GET_CURRENT_USER_FAILURE, err })
    );
  };
};
