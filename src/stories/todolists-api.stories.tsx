import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistApi} from "../api/todolist-api";

export default {
    title: 'API'
}
export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
       todolistApi.get()
        .then((res)=>{
            setState(res.data)
        })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const title = 'todolist1'
    useEffect(() => {
       // axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists',{title},settings)
        todolistApi.post(title)
        .then((res)=>{
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'd5c271d4-fc4c-422f-9ca4-5573354c1252'
    useEffect(() => {
        // axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings )
        todolistApi.delete(todolistId)
        .then((res)=>{setState(res.data)})
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'da82c0e4-5f4c-45e4-97b8-db21fc3ddca9'
    const title = 'todo2'
    useEffect(() => {
        // axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,{title:'Poka-Poka'}, settings )
        todolistApi.put(todolistId,title)
            .then((res)=>{setState(res.data)})
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
