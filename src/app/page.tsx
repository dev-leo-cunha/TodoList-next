'use client'

import { CustomButtonAddAndClear } from "@/components/CustomButton"
import { ItemsTodo } from "@/components/ItemsTodo"
import { TodoListProps } from "@/types/TodoListProps"
import { useState } from "react"


const Page = () => {
  const [itemImput, setItemInput] = useState('')
  const [todos, setTodos] = useState<TodoListProps[]>([
    { label: 'Item Exemplo 1', disabled: false },
    { label: 'Item Exemplo 2', disabled: false },
  ])

  const handleClearAll = () => {
    setTodos([])
  }
  const handleAddTodo = () => {
    if (!itemImput) return
    setTodos([...todos, { label: itemImput, disabled: false }])
    setItemInput('')
  }
  const deleteItem = (index: number) => {
    setTodos(todos.filter((i, key) => key !== index))
  }
  const toggleItem = (index: number) => {
    let newTodos = [...todos]
    newTodos[index].disabled = !newTodos[index].disabled
    setTodos(newTodos)
  }
  const numberTask = () => {
    switch (todos.length) {
      case 0:
        return 'Não há tarefas pendentes'
      case 1:
        return '1 tarefa pendente'
      default:
        return todos.length + ' tarefas pendentes'
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-t from-blue-500 to-blue-900">
      <div className="bg-white p-8 flex flex-col justify-center items-center rounded-xl "  >
        <h1 className="text-3xl font-bold">Todo App</h1>
        <div className="w-full flex">

          <input
            className="p-2 flex-1 text-white rounded-md bg-gray-500 my-2"
            type="text"
            placeholder="Adicionar tarefa"
            value={itemImput}
            onChange={(e) => setItemInput(e.target.value)}
          />
          <CustomButtonAddAndClear label="Adicionar" onClick={handleAddTodo} />

        </div>

        <ul className="w-full">
          {todos.map((todo, index) => (
            <ItemsTodo
              key={index}
              index={index}
              todo={todo}
              deleteItem={deleteItem}
              toggleItem={toggleItem}
            />
          ))}
        </ul>

        <div className="w-full flex justify-between mt-1 items-center p-1 border-t-2 border-gray-950">
          <p>{numberTask()}</p>
          <CustomButtonAddAndClear label="Limpar tudo" onClick={handleClearAll} />
        </div>
      </div>
    </div>
  )
}

export default Page