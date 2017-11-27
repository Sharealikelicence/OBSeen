import { Component, OnInit } from '@angular/core';
import { TodoItem } from "../../../models/todo-item";
import { TodoList } from "../../../models/todo-list";
import { TodoCategory } from "../../../models/todo-category";

@Component({
  selector: 'app-todo-list-new',
  templateUrl: './todo-list-new.component.html',
  styleUrls: ['./todo-list-new.component.css']
})
export class TodoListNewComponent implements OnInit {

  public todoList: TodoList;
  public startDateValue: any;

  onKey(id: string, value: string){
  }

  constructor() { }

  ngOnInit() {
  }

}
