export type submitForm = {
  email: string;
  password: string;
};

export interface ITodo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}
