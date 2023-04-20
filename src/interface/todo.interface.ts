export interface TodoProps {
     _id?: string;
     title: string;
     task: boolean;
     createdAt?: string;
     updatedAt?: string;
}

export interface NewTodoProps {
     title: string;
     task: boolean;
}

export interface UpdateProps {
     task: boolean;
     title: string;
     id: string;
}
