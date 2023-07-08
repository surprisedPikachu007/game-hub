import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "e92005a1f40d473fa3ffde9fe5203bb9"
    }
});