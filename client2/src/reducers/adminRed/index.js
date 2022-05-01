export const userSingle = (state = [], action) => {
  switch (action.type) {
    case 'SINGLE_USER':
      return action.payload;
    default :
      return state;
  }
};

export const getUser = (state = [], action) => {
  switch (action.type) {
    case 'USERS_GET':
      return action.payload;
    default :
      return state;
  }
};

export const deleteUser = (state = {}, action) => {
  switch (action.type) {
    case 'DELETE_USERS':
      return action.payload;
    default :
      return state;
  }
};

export const upadetUser = (state = {}, action) => {
  switch (action.payload) {
    case 'UPDATE_USER' :
      return action.payload;
    default :
      return state;
  }
};


export const addNews = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NEWS':
      return action.payload;
    default :
      return state;
  }
};

export const listNews = (state = [], action) => {
  switch (action.type) {
    case 'LIST_NEWS':
      return action.payload;
    default :
      return state;
  }
};

export const deleteNews = (state = {}, action) => {
  switch (action.type) {
    case 'DELETE_NEWS':
      return action.payload;
    default :
      return state;
  }
};


// ----- CATEGORY -----
export const listCategory = (state = [], action) => {
  switch (action.type) {
    case 'GET_CATEGORY':
      return action.payload;
    default :
      return state;
  }
};

export const createCategory = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_CATEGORY':
      return action.payload;
    default :
      return state;
  }
};

export const selectCategory = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      return action.payload;
    default :
      return state;
  }
};

// ------ COURSES -------

export const getCourses = (state = [], action) => {
  switch (action.type) {
    case 'GET_COURSES' :
      return action.payload;
    default :
      return state;

  }
};


export const selectedCourse = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_COURSE' :
      return action.payload;
    default :
      return state;
  }
};



