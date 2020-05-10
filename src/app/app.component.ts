import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = []; //tipando uma variavel - usar :
  public title: string = "Minhas Tarefas"

  constructor() {
    // add 3 strings ao atributo 'todos'
    this.todos.push("estudar angular");
    this.todos.push("ir ao suprmercado");
    this.todos.push("cortar o cabelo");
  }
}
