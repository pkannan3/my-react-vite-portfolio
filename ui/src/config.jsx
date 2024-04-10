const config = {
    development: {
        apiUrl: "http://localhost:3001"
    },
    production: {
        apiUrl: import.meta.env.REACT_APP_API_URL
    },
    test: {
        apiUrl: ''
    }

}

export default config;
