const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT": {
      return {
        darkMode: false,
        sidebar: state.sidebar
      };
    }
    case "DARK": {
      return {
        darkMode: true,
        sidebar: state.sidebar
      };
    }
    case "TOGGLE": {
      return {
        darkMode: !state.darkMode,
        sidebar: state.sidebar
      };
    }
    case "OPEN_SIDE": {
      return {
        darkMode: state.darkMode,
        sidebar: true,
      };
    }
    case "CLOSE_SIDE": {
      return {
        darkMode: state.darkMode,
        sidebar: false,
      };
    }
    case "SIDEBAR": {
      return {
        darkMode: state.darkMode,
        sidebar: !state.sidebar,
      };
    }
    default:
      return state;
  }
};

export default DarkModeReducer;
