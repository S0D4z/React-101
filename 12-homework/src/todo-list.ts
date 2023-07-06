import { Todo } from './todo';

interface ITodoList {
  addTodo(todo: Todo): void
  removeTodoById(id: number): void
  markTodoCompleted(id: number): void 
  getTodos(): Todo[]
}

export class TodoList implements ITodoList {
  // code here
}
