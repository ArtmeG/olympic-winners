import {INIT_WINNERS} from "../constans";

function winnersReducer(state=[], {type, payload}) {
  switch (type) {
    case INIT_WINNERS:
      return payload;
    default:
      return state;
  }
}

export default winnersReducer;