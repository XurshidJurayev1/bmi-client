import api from '../Api';

// ----- user ----
export const viewSingleUser = user => dispatch => {
  dispatch({
    type: 'SINGLE_USER',
    payload: user,
  });
};

export const usersGet = () => async (dispatch) => {
  const res = await api.get(`/users/get`);
  dispatch({
    type: 'USERS_GET',
    payload: res.data,
  });
};

export const deleteUser = (id) => async (dispatch) => {
  const res = await api.delete(`/users/${id}`);
  dispatch({
    type: 'DELETE_USERS',
    payload: res.data,
  });
};

export const updateUserAction = (user, id) => async (dispatch) => {
  const res = await api.put(`users/${id}`, user);
  dispatch({
    type: 'UPDATE_USER',
    payload: res.data,
  });

};


export const register = user => async (dispatch) => {
  const res = await api.post('/auth/register', user);
  dispatch({
    type: 'REGISTER',
    payload: res.data,
  });
};

export const login = ({ login, password }) => async (dispatch) => {
  const res = await api.post('/auth/login', { login, password });
  dispatch({
    type: 'LOGIN',
    payload: res.data,
  });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: 'LOGOUT',
    payload: '',
  });
};

export const profileEdit = (user, id) => async (dispatch) => {
  const res = await api.put(`/users/${id}`, user);
  dispatch({
    type: 'UPDATE_USER',
    payload: res.data,
  });
};

export const addNews = news => async (dispatch) => {
  const res = await api.post('/news/create', news);
  dispatch({
    type: 'ADD_NEWS',
    payload: res.data,
  });
};

export const listNews = () => async (dispatch) => {
  const res = await api.get('/news/get');
  dispatch({
    type: 'LIST_NEWS',
    payload: res.data,
  });
};

export const deleteNews = (id) => async (dispatch) => {
  const res = await api.delete(`/news/${id}`);
  dispatch({
    type: 'DELETE_NEWS',
    payload: res.data,
  });
};


// ----- Contact Action ------
export const sendContactMessage = msg => async (dispatch) => {
  const res = await api.post('/contact/create', msg);
  dispatch({
    type: 'SEND_CONTACT',
    payload: res.data,
  });
};

export const getContactList = () => async (dispatch) => {
  const res = await api.get('/contact/get');
  dispatch({
    type: 'GET_LIST_CONTACT',
    payload: res.data,
  });
};

export const selectContactItem = (item) => async (dispatch) => {
  dispatch({
    type: 'SELECT_CONTACT',
    payload: item,
  });
};


// ------ Category -----

export const createCategory = (category) => async (dispatch) => {
  const res = await api.post('/category/create', category);
  dispatch({
    type: 'CREATE_CATEGORY',
    payload: res.data,
  });

};

export const getCategory = () => async (dispatch) => {
  const res = await api.get('/category/get');
  dispatch({
    type: 'GET_CATEGORY',
    payload: res.data,
  });
};

export const selectCategory = (obj) => async (dispatch) => {

  dispatch({
    type: 'SELECT_CATEGORY',
    payload: obj,
  });
};

export const updateCateg = (id, categ) => async (dispatch) => {
  const res = await api.put(`/category/${id}`, categ);
  dispatch({
    type: 'UPDATE_CATEGORY',
    payload: res.data,
  });
};

export const deleteCateg = (id) => async (dispatch) => {
  const res = await api.delete(`/category/${id}`);
  dispatch({
    type: 'DELETE_CATEGORY',
    payload: res.data,
  });
};

// ----- Courses ------

export const createCourse = (course) => async (dispatch) => {
  const res = await api.post('courses/create', course);
  dispatch({
    type: 'CREATE_COURSE',
    payload: res.data,
  });
};

export const getCourses = () => async (dispatch) => {
  const res = await api.get('courses/get');
  dispatch({
    type: 'GET_COURSES',
    payload: res.data,
  });

};

export const deleteCourse = id => async (dispatch) => {
  const res = await api.delete(`courses/${id}`);
  dispatch({
    type: 'DELETE_COURSE',
    payload: res.data,
  });
};

export const selectCourse = (item) => (dispatch) => {
  dispatch({
    type: 'SELECT_COURSE',
    payload: item,
  });
};

export const updateCourse = (id, course) => async (dispatch) => {
  const res = await api.put(`courses/${id}`, course);
  dispatch({
    type: 'UPDATE_COURSE',
    payload: res.data,
  });
};







