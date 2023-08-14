import axios from "axios";


const settings = {withCredentials:true}
export const todolistApi={
    get(){
        return axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists',settings)
    },
    post(title:string){
        return axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists',{title},settings)
    },
    delete(todolistId:string){
        return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings )
    },
    put(todolistId:string,title:string){
        return axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,{title}, settings )
    }
}
