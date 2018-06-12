import { ADD_TITLE } from "../../types";

const initialState = { title: "React/Redux BoilerPlate....:)" };

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_TITLE: {
      return { ...initialState, title: action.payload };
    }
  }
  return { ...initialState };
}
