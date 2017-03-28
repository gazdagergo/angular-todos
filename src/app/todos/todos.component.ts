import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos;
  text;
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        text: 'Pickup kids at school'
      },
      {
        text: 'Meeting with boss'
      },
      {
        text: 'Dinner with wife'
      }
    ]
  }

  addTodo(){
    this.todos.push({
      text: this.text
    });
  }

}
