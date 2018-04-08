import { Component, OnInit } from '@angular/core';

import { TodoService } from './../todo.service';
import { Todo } from './../todo';
import { element } from "protractor";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todolist : Todo[];

  constructor(private todoService : TodoService) { }

  ngOnInit() {
    var x = this.todoService.getData();
    x.snapshotChanges().subscribe(item => {
      this.todolist = [];
      item.forEach(element =>{
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.todolist.push(y as Todo);
      })
    })
  }

  onItemClick(todo : Todo){
    this.todoService.currList = Object.assign({},todo);
  }

  onDelete($key){
    this.todoService.deleteTodos($key);
  }

  onUpdate(todo: Todo){
    this.todoService.currList = todo;

  }

}
