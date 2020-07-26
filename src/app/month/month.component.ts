import {Component, OnInit} from '@angular/core';
import {dataService} from "../shared/data.service";
import {UserInterface} from "../shared/user.interface";
import {Month} from "../shared/month.interface";

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.sass']
})
export class MonthComponent implements OnInit {

  users: UserInterface[];
  loaded = false;
  error: any;

  months: Month[] = [
    {id: 0, name: 'January', users: []},
    {id: 1, name: 'February', users: []},
    {id: 2, name: 'March', users: []},
    {id: 3, name: 'April', users: []},
    {id: 4, name: 'May', users: []},
    {id: 5, name: 'June', users: []},
    {id: 6, name: 'July', users: []},
    {id: 7, name: 'August', users: []},
    {id: 8, name: 'September', users: []},
    {id: 9, name: 'October', users: []},
    {id: 10, name: 'November', users: []},
    {id: 11, name: 'December', users: []}
  ];

  constructor(private dataService: dataService) {
  }


  ngOnInit(): void {

    this.dataService.getAll()
      .then(data => {
          this.users = data
          for (let i = 0; i < this.users.length; i++) {
            let date = new Date(this.users[i].dob).getMonth()
            for (let j = 0; j < this.months.length; j++) {
              if (date === this.months[j].id) {
                this.months[j].users.push(this.users[i])
              }
            }
          }
          this.loaded = true;
        }
      )
      .catch(error => {
        this.error = error;
      })

  }

  showUsers(month: Month) {
    this.users = month.users;
  }

}
