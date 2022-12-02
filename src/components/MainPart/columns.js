import { Actions } from "./BasicTable";

export const COLUMNS = [
    {
        Header: 'ID',
        accessor: 'id'
    },
    {
        Header: 'Назва',
        accessor: 'title'
    },
    {
        Header: 'Кількість',
        accessor: 'quantity'
    },
    {
        Header: 'Дія',
        accessor: 'action',
        Cell: ({row}) => (<Actions row={row} />)
    },
]