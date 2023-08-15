import React, {useEffect, useState} from 'react'
import {todolistApi} from "../api/todolist-api";

export default {
    title: 'API'
}
export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        todolistApi.getTodo()
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>
        {JSON.stringify(state)}
    </div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const title = 'todolist1'
    useEffect(() => {
        todolistApi.postTodo(title)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'd5c271d4-fc4c-422f-9ca4-5573354c1252'
    useEffect(() => {
        todolistApi.deleteTodo(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'da82c0e4-5f4c-45e4-97b8-db21fc3ddca9'
    const title = 'todo3'
    useEffect(() => {
        todolistApi.putTodo(todolistId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '00779e28-04d5-4b71-8e4f-6b4fa144ee34'

    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        todolistApi.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>
        {JSON.stringify(state)}
    </div>
}
export const CreateTasks = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '00779e28-04d5-4b71-8e4f-6b4fa144ee34'
    const title = 'newTasks1'
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        todolistApi.postTasks(todolistId,title)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>
        {JSON.stringify(state)}
    </div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '00779e28-04d5-4b71-8e4f-6b4fa144ee34'
    const taskId = '999c7579-8890-41ef-a37c-89946e413e14'
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        todolistApi.deleteTasks(todolistId,taskId)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>
        {JSON.stringify(state)}
    </div>
}
export const UpdateTasks = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '00779e28-04d5-4b71-8e4f-6b4fa144ee34'
    const taskId = 'ef41bda1-c320-4b1f-bbe3-52646f99404c'
    const title = 'TasksNew'
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        todolistApi.putTasks(todolistId,title,taskId)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>
        {JSON.stringify(state)}
    </div>
}
