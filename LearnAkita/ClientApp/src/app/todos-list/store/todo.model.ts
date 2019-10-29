import { guid, ID } from '@datorama/akita';

export interface ITodo {
    id: ID;
    title: string;
    completed: boolean;
}

export function createTodo({ title }: Partial<ITodo>) {
    return {
        id: guid(),
        title,
        completed: false
    } as ITodo;
}
