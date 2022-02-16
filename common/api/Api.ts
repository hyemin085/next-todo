import axios from "axios";

export default axios.create({
    baseURL: "http://3.34.47.186:4000/",
    headers: {
        "Content-type": "application/json"
    },
    // timeout: 15000,
})
