import React, { useMemo, useContext } from 'react'
import { useTable, useGlobalFilter, usePagination } from 'react-table'
import { COLUMNS } from './columns'
import GlobalFilter from './GlobalFilter'
import { Context } from '../../context/Context'
import './MainPart.scss'
import ModalPlus from './ModalPlus'
import { TwoContext } from '../../context/TwoContext'
import { ThreeContext } from '../../context/ThreeContext'
import ModalMinus from './ModalMinus'

export const Actions = (props) => {

    const { row } = props

    const [context, setContext] = useContext(Context)
    const [twoContext, setTwoContext] = useContext(TwoContext)
    const [threeContext, setThreeContext] = useContext(ThreeContext)
    // const [fourContext, setFourContext] = useContext(Context);

    const onClickPluss = () => {

        const newState = context.map(obj => {
            if (obj.id == row.id) {
                return { ...obj, quantity: row.values.quantity + 10 }
            }
            return obj
        })

        setTwoContext(true)
        setContext(newState)
        // setFourContext(row)


    }

    const onCkickMinus = () => {

        const newState = context.map(obj => {
            if (obj.id == row.id && obj.quantity != 0) {
                return { ...obj, quantity: row.values.quantity - 10 }
            }

            return obj
        })

        setThreeContext(true)
        setContext(newState)
        // setFourContext(row)


    }

    return (
        <div style={{ display: 'flex', columnGap: '5px' }}>
            <button onClick={onClickPluss}>Додати 10</button>
            <button onClick={onCkickMinus}>Забрати 10</button>
        </div>
    )
}

const BasicTable = () => {

    const [context, setContext] = useContext(Context);
    const [twoContext, setTwoContext] = useContext(TwoContext)
    const [threeContext, setThreeContext] = useContext(ThreeContext)

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => context, [context])

    const tableInstance = useTable({
        columns,
        data,
    }, useGlobalFilter, usePagination)

    const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, prepareRow, state, setGlobalFilter } = tableInstance
    const { globalFilter } = state

    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps}>
                    {
                        page.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} className="row">
                                    {
                                        row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className='pagination'>
                <button onClick={() => previousPage()}>Previous</button>
                <button onClick={() => nextPage()}>Next</button>
            </div>
            {twoContext && <ModalPlus />}
            {threeContext && <ModalMinus />}
        </>
    )
}

export default BasicTable