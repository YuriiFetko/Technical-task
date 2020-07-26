import {Injectable} from "@angular/core";
import {UserInterface} from "./user.interface";
import axios from 'axios'

@Injectable({providedIn: 'root'})
export class dataService {

  async getAll(): Promise<UserInterface[]> {
    return axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      .then(response => {
        return response.data;
      })
      .catch(error => {
        if (error.status) {
          return error.status;
        }
      })
  }

}
