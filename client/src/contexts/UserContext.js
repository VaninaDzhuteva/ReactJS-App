const { createContext } = require("react");

const UserContext = createContext({
    user: null,
    isAuthenticated: false,
    register: () => {},
    login: () => {},
    logot: () => {}
});

export default UserContext;