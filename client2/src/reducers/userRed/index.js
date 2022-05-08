// -------- AUTH ------- //
export const register = (state = [], action) => {
  switch (action.type) {
    case 'REGISTER':
      return action.payload;
    default :
      return state;
  }
};

export const token = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload.token;
    case 'LOGOUT':
      return action.payload;
    default :
      return state;
  }
};

export const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload.user;
    case 'LOGOUT':
      return action.payload;
    default :
      return state;
  }
};

export const role = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload.user.role;
    // if(action.payload.user.role === 10 || action.payload.user.role[0] === "ADMIN"){
    //   return "ADMIN"
    // } else if(action.payload.user.role === 1 || action.payload.user.role[0] === "TEACHER"){
    //   return "TEACHER"
    // }else if(action.payload.user.role === 0 || action.payload.user.role[0] === "USER"){
    //   return "USER"
    // }else{
    //   return state
    // }
    case 'LOGOUT':
      return action.payload;
    default :
      return state;
  }
};

export const userEdit = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_USER' :
      return action.payload;
    default :
      return state;
  }
};

export const userContactSend = (state = {}, action) => {
  switch (action.type) {
    case 'SEND_CONTACT' :
      return action.payload;
    default :
      return state;
  }
};

export const listContact = (state = [], action) => {
  switch (action.type) {
    case 'GET_LIST_CONTACT' :
      return action.payload;
    default :
      return state;
  }
};

export const selectContact = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_CONTACT' :
      return action.payload;
    default :
      return state;
  }
};

export const viewsNews = (state = {}, action) => {
  switch (action.type) {
    case 'VIEW_NEWS':
      return action.payload;
    default :
      return state;
  }
};








