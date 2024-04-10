const config = {
    development: {
        apiUrl: "http://localhost:5173"
    },
    production: {
        apiUrl: import.meta.env.REACT_APP_API_URL
    },
    test: {
        apiUrl: ''
    }

}

export default config;
