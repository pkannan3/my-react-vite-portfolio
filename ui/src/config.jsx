const config = {
    development: {
        apiUrl: "http://localhost:5173"
    },
    production: {
        apiUrl: import.meta.env.VERCEL_API_ENV
    },
    test: {
        apiUrl: ''
    }

}

export default config;
