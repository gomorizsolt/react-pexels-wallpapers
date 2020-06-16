import axios from "axios";

function getApiKey() {
    if (process.env.NODE_ENV === "production") {
        return process.env.PEXELS_API_KEY;
    }

    return process.env.REACT_APP_PEXELS_API_KEY;
}

const instance = axios.create({
    baseURL: "https://api.pexels.com/v1",
    headers: { Authorization: getApiKey() },
});

export default instance;