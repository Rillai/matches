import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://u0362146.plsk.regruhosting.ru/",
    responseType: "json"
})
export const matchesAPI = {
    getMatches() {
        return instance.get(`match`).then(response => { return response.data; })
    },
    getCountries() {
        return instance.get(`country`).then(response => { return response.data; })
    },
    getMyLeagues() {
        return instance.get(`league`).then(response => { return response.data; })
    },
}