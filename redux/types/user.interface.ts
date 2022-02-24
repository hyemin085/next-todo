export interface userTypes {
    userId?: string,
    password?: string;
}

export interface addTodoTypes {
    id? : number,
    userId?: string,
    commenter?: number,
    check?: boolean,
    contents?: string;
}