import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = []; 
  public title: string = "Minhas Tarefas"

  constructor() {
    this.todos.push(new Todo(1, "estudar Angular", false));
    this.todos.push(new Todo(2, "ir ao mercado", false));
    this.todos.push(new Todo(3, "passear com o cachorro", true));
  }

  remove(todo: Todo){
    // encontra o index do todo (se não encontrar é -1)
    const index = this.todos.indexOf(todo);

    // exlcui se econtrar um registro
    if(index !== -1){
      this.todos.splice(index, 1);
    }

  }

  // já recebemos o objeto como referencia...não precisa encontra-lo na lista
  markAsDone(todo: Todo){
    todo.done = true;
  }

  markAsUnDone(todo: Todo){
    todo.done = false;
  }
}
