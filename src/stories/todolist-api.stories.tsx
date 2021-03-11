import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '5adec434-290c-4eac-9a59-2a005f8dd341'
    }
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        todolistAPI.getTodolists()
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div> //что бы отобразить обьект
}


export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = "Sonia"
       todolistAPI.createTodolist(title)
            .then((res) => {
                setState(res.data);
            })
    })

    return <div> {JSON.stringify(state)}</div>
}


export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '10f0da93-cb51-46d0-b866-9c7a5bc4ea4f';
       todolistAPI.deleteTodolist(todolistId)
            .then( (res) => {
                setState(res.data)
            })
    })

    return <div> {JSON.stringify(state)}</div>
}


export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'a86a028e-cd76-4e22-98b2-4ea934815f8a';
        const title = "Cars"
       todolistAPI.updateTodolist(todolistId, title)
            .then( (res) => {
                debugger
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "a86a028e-cd76-4e22-98b2-4ea934815f8a";
        todolistAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
     }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "a86a028e-cd76-4e22-98b2-4ea934815f8a";
        const title = "Dodge";
        todolistAPI.createTask(todolistId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "a86a028e-cd76-4e22-98b2-4ea934815f8a";
        const taskId = "decdf1ff-ceed-4904-8908-c2c17dfdd0a5";
        todolistAPI.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "a86a028e-cd76-4e22-98b2-4ea934815f8a";
        const taskId = "26239e38-6c71-496e-a48f-ce7baf8d7e83";
        const model = {
            title: "Ford",
            description: null,
            status: 0,
            priority: 1,
            startDate: null,
            deadline: null
        }
        todolistAPI.updateTask(todolistId, taskId, model)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
