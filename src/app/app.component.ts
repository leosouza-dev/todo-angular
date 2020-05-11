import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = []; 
  public title: string = "Minhas Tarefas"

  // forms
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    //validação
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
  }

  // não precisa receber nada - no formControls já é feito o bind
  add(){
    // recuperando o title digitado
    const title = this.form.controls['title'].value;

    //id será a partir do total de todo no array
    const id = this.todos.length + 1;

    // done inicia como falso
    this.todos.push(new Todo(id, title, false));
    this.clear();
  }

  //limpa o form
  clear(){
    this.form.reset();
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
