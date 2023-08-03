
type Props = {
    label: string
    onClick: () => void
}
export const CustomButtonAddAndClear = ({ label, onClick }: Props) => {
    return (
        <button onClick={onClick} className="p-2 text-white rounded font-bold bg-gray-500 m-2">
            {label}
        </button>
    )
}