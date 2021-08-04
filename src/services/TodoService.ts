import { ITodo, Todo } from 'models/TodoModel';
import { TODO_URL } from 'utils/constants';

export interface APITodoService {
  /**
   * Fetches array of Todos
   */
  fetchTodos(): Promise<ITodo[]>;

  /**
   * Creates todo
   */
  createTodo(todo: Todo): Promise<ITodo>;
}

class TodoService implements APITodoService {
  async fetchTodos() {
    const res = await fetch(`${TODO_URL}/todos`);
    const result: ITodo[] = await res.json();

    return result;
  }

  async createTodo(todo: Todo) {
    const res = await fetch(`${TODO_URL}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    const result: ITodo = await res.json();

    return result;
  }
}

export const TodoServiceInstance = new TodoService();
