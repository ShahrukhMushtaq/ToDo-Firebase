import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireList } from "angularfire2/database";
import { NgForm, FormGroup } from "@angular/forms";
import { Todo } from './../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  todoList : AngularFireList<Todo>;

  
  constructor( private doService: TodoService) { }

  ngOnInit() {
    //this.doService.getData();
    //this.resetForm();
    
  }

  onSubmit(form : NgForm){
    if(form.value.$key == null)
        this.doService.insertTodos(form.value);
    else
        this.doService.updateTodos(form.value);    
    this.resetForm(form);            
  }

  resetForm(form : NgForm){
    if(form != null)
      form.reset();
      // this.doService.currList = {
      //   $key : '',
      //   name : '',
      //   email : '',
      //   todoDetail : ''
      // }

  }

}