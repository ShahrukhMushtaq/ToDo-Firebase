import { Injectable } from '@angular/core';
import { Todo } from "./todo";
import { AngularFireDatabase , AngularFireList } from "angularfire2/database";
@Injectable()
export class TodoService {

  todolist: AngularFireList<any>;
  currList : Todo = new Todo(); 

  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.todolist = this.firebase.list('todo-list');
    return this.todolist;
  }

  insertTodos(todo: Todo){

    this.todolist.push({
      name: todo.name,
      email: todo.email,
      todoDetail: todo.todoDetail,
    });
  }

  updateTodos(todo: Todo){
    
    this.todolist.update(todo.$key,{
      name: todo.name,
      email: todo.email,
      todoDetail: todo.todoDetail
    });
  }

  deleteTodos($key: string){
    this.todolist.remove($key);

  }

}
