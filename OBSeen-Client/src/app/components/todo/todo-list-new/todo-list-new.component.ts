import { Component, OnInit } from '@angular/core';
import { TodoItem } from "../../../models/todo-item";
import { TodoList } from "../../../models/todo-list";
import { TodoCategory } from "../../../models/todo-category";
import { ICON_URL } from '../../../app.module'; /// TODO: Change this to a different module to stop circular dependency

@Component({
  selector: 'app-todo-list-new',
  templateUrl: './todo-list-new.component.html',
  styleUrls: ['./todo-list-new.component.css']
})
export class TodoListNewComponent implements OnInit {
  public iconURL: string = ICON_URL;

  public todoList: TodoList;
  public startDateValue: any;

  onKey(id: string, value: string){
  }

  constructor() { }

  ngOnInit() {
  }

}
