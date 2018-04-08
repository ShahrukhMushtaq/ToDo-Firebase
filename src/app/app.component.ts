import { Component } from '@angular/core';
import { TodoService } from "./todo.service";
import { Todo } from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // todos = [
  //   {name:"Bring file"},
  //   {name:"Bring my file"},
  //   {name:"Bring your file"},
  //   {name:"Bring his file"}
  // ];
}
