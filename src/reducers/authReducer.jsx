let initialState = {
	users: null,
};
let authReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_CONTACT":
			return { ...state, users: action.payload };
		default:
			return state;
	}
};
export default authReducer;
