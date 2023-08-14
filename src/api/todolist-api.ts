import axios from "axios";


// const settings = {withCredentials:true}
const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.1/',
    withCredentials:true
})
export const todolistApi={
    get(){
        return instance.get('todo-lists')
    },
    post(title:string){
        return instance.post('todo-lists',{title})
    },
    delete(todolistId:string){
        return instance.delete(`todo-lists/${todolistId}` )
    },
    put(todolistId:string,title:string){
        return instance.put(`todo-lists/${todolistId}`,{title} )
    }
}
