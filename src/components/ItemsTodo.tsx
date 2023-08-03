import { TodoListProps } from "@/types/TodoListProps"

type Props = {
    index: number
    todo: TodoListProps
    deleteItem: (index: number) => void
    toggleItem: (index: number) => void
}

export const ItemsTodo = ({ index, todo, deleteItem, toggleItem }: Props) => {
    return (
        <li key={index}
            className="w-full my-2 bg-slate-400 rounded flex justify-between items-center hover:bg-slate-300 cursor-pointer"
        >
            <input
                className="h-8 w-8 ml-1"
                type="checkbox"
                onClick={() => toggleItem(index)}
                checked={todo.disabled} />
            <span
                className="py-2 px-2 w-4/5"
                style={{ textDecoration: todo.disabled ? 'line-through' : 'none' }}
            >{todo.label}</span>
            <button
                className="font-bold w-1/5 py-2 rounded-r hover:bg-red-400"
                onClick={() => deleteItem(index)}
            >excluir</button>
        </li>
    )
}