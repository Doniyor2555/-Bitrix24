const initialState = {
  heroes: [],
  registration: {
    name: "",
    email: "",
    password: ""
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_HEROES":
      return {
        ...state,
        heroes: action.payload
      }
    case "NAME":
      return {
        ...state,
        registration: state.registration.email === action.payload
      }
    case "EMAIL":
      return {
        ...state,
        registration: state.registration.email === action.payload
      }
    case "PASSWORD":
      return {
        ...state,
        registration: state.registration.password === action.payload
      }
    default: return state
  }
}

export default reducer;