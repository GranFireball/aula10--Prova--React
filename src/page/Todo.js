import { useRef, useReducer } from "react";
import { TodoReducer } from "../data/TodoReducer";
import { TodoData } from "../data/TodoData";

export default function Todo(){
    const textoTodo = useRef(null);
    const [todos, dispatch] = useReducer(TodoReducer, TodoData);

    function Adicionar(){
        dispatch({ type: "ADD_TODO", payload: { text: textoTodo.current.value}})
    }

    return(
        <>
            <h1>ToDo's</h1>
            <input type="text" ref={textoTodo} placeholder="Digite sua tarefa"/>
            <button onClick={Adicionar}>Adicionar</button>
            {
                todos.map((todo, index)=>{
                   return <li key={index}>{todo.text}</li>
                })
            }
        </>
    );
}