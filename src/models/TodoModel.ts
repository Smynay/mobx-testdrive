export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export class Todo implements ITodo {
  userId;
  id;
  title;
  completed;

  constructor(title: string) {
    this.userId = 1;
    this.id = 1;
    this.title = title;
    this.completed = false;
  }
}
