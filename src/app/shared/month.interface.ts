import {UserInterface} from "./user.interface";

export interface Month {
  id: number;
  name: string;
  users: UserInterface[];
}
