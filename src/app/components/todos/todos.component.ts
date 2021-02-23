import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoServiceService } from '../../services/todo-service.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoServiceService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((item) => {
      item.id !== todo.id;
    });
    this.todoService.deleteTodo(todo).subsribe();
  }
}
