import axios from "axios"

const instance = axios.create({
    // baseURL: "http://localhost:5001/clone-dbfb3/us-central1/api" //THE API URL
    baseURL: "https://us-central1-clone-dbfb3.cloudfunctions.net/api"

});

export default instance