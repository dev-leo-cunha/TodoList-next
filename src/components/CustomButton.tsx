
type Props = {
    label: string
    onClick: () => void
}
export const CustomButtonAddAndClear = ({ label, onClick }: Props) => {
    return (
        <button onClick={onClick} className="p-2 text-white rounded font-bold bg-gray-500 my-2 ml-2 max-sm:text-sm">
            {label}
        </button>
    )
}