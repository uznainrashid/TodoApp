import { useContext, createContext } from "react";


export const TodoContext = createContext({
    Todos: [{
        id: 1,
        todo : "Todo msg",
        completed: false
    }],
    addTodo : (todo) =>{},
    UpdateTodo : (id, todo)=>{},
    deleteTodo : (id)=>{},
    ToggleCompleted :  ()=>{}

    
})

export const TodoContextProvider = TodoContext.Provider
 

export const UseTodo = ()=>{
    return useContext(TodoContext)
}