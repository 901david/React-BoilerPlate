import { ADD_TITLE } from "../../types";

export const changeTitle = title => {
  return {
    type: ADD_TITLE,
    payload: title,
  };
};
