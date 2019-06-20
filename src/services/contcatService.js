import http from "./httpService";
import {
    apiEndpoint
} from "../config/keys"


export function sendEmail(contact) {
    if (contact) {
        console.log("Send Email");
        return http.post(apiEndpoint + "/sendmail", contact);
    }
}