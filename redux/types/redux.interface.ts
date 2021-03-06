export interface userTypes {
    userId?: string|string[]|any;
    password?: string;
}

export interface addTodoTypes {
    id? : number,
    userId?: string,
    commenter?: number,
    check?: boolean,
    contents?: string;
    color?: string;
}

export interface searchTodoTypes {
    search: string|void;
}