import { makeAutoObservable } from 'mobx';

import { ITodo, Todo } from 'models/TodoModel';
import { TodoServiceInstance } from 'services/TodoService';

export interface ITodoStore {
  loadTodos(): Promise<void>;
  createTodo(): Todo;
  todos: ITodo[];
  isLoading: boolean;
}

class TodoStore implements ITodoStore {
  transportLayer;
  todos: ITodo[] = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
    this.transportLayer = TodoServiceInstance;
    this.loadTodos();
  }

  async loadTodos() {
    this.isLoading = true;
    this.todos = await this.transportLayer.fetchTodos();
  }

  createTodo() {
    const todo = new Todo('new todo');
    this.todos.push(todo);
    return todo;
  }
}

export default new TodoStore();
