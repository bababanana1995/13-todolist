import axios from "axios";


// const settings = {withCredentials:true}
const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.1/',
    withCredentials:true
})
export const todolistApi={
    getTodo(){
        return instance.get<TodolistType[]>('todo-lists')
    },
    postTodo(title:string){
        return instance.post<ResponseType<{item:TodolistType}>>('todo-lists',{title})
    },
    deleteTodo(todolistId:string){
        return instance.delete<ResponseType>(`todo-lists/${todolistId}` )
    },
    putTodo(todolistId:string, title:string){
        return instance.put(`todo-lists/${todolistId}`,{title} )
    },
    getTasks(todolistId:string){
        return instance.get<TasksType>(`todo-lists/${todolistId}/tasks`)
    },
    postTasks(todolistId:string,title:string){
        return instance.post(`todo-lists/${todolistId}/tasks`,{title})
    },
    deleteTasks(todolistId:string,taskId:string){
        return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}` )
    },
    putTasks(todolistId:string, title:string,taskId:string){
        return instance.put(`todo-lists/${todolistId}/tasks/${taskId}`,{title} )
    },
}
type TodolistType = {
    id: string,
    title: string,
    addedDate: string,
    order: number
}
type ResponseType<Create = {}> = {
        "data": Create
        "messages": string[]
        "fieldsErrors": string[]
        "resultCode": number[]
    }
type TasksType = {
    "items": [
        {
            "id": string
            "title": string
            "description": string|null
            "todoListId": string
            "order": number
            "status": number
            "priority": number
            "startDate": string|null
            "deadline": string|null
            "addedDate": string
        }
    ],
    "totalCount": number
    "error": string|null
}
