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

  deleteTodo(todoText) {
    for(let i = 0, max = this.todos.length; i < max; i++ ){
      if(this.todos[i].text == todoText){
        this.todos.splice(i,1);
      }
    }
  }

}
