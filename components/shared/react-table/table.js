/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import React, {useMemo} from 'react'
import {useTable, useGlobalFilter, usePagination, useRowSelect} from 'react-table'
import { TableWrapper, TableCard } from './styled-react-table'
import {Box} from "@mui/material"
import { useRouter } from 'next/router'
import Button from '../button'

// Custom component to render Genres 
const Genres = () => {
  const router = useRouter();
  // Loop through the array and create a badge-like component instead of a comma-separated string
  return (
    <>
      <Button buttonSize="btn--table" >Details</Button>
    </>
  );
};



export const GlobalFilter = ({filter, setFilter}) => {
  return (
    <span className='flex items-center'>
      <p className='text-kblackCom text-body4 mr-2'>Search : {' '}</p>
      <input value = {filter || ''}  onChange = {(e) => setFilter(e.target.value)} className="border-[#CED4DA] appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" ></input>
    </span>
  )
}

const Checkbox = React.forwardRef(( {indeterminate, ...rest}, ref) => {
  const defaultRef = React.useRef()
  const resolvedRef = ref || defaultRef

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate
  }, [resolvedRef, indeterminate])

  return (
    <>
      <input type= "checkbox" ref= {resolvedRef} {...rest} />
    </>
  )
})




 
const RTable = ({footerShow, search, paginate,COLUMNS,MOCK_DATA,  children}) => {
  const columns = useMemo(() => COLUMNS, [])
  // const data = useMemo(() => MOCK_DATA, [])

  console.log(MOCK_DATA)
  const data = MOCK_DATA

  const tableInstance = useTable({
    columns,
    data
  }, useGlobalFilter, usePagination, useRowSelect, (hooks) => {
    hooks.visibleColumns.push((columns) => {
      return [
        {
          id: 'selection',
          Header: ({
            getToggleAllRowsSelectedProps
          }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell : ({ row }) => (
            <Checkbox {...row.getToggleRowSelectedProps} />
          )
        },
        ...columns
      ]
    })
  });

  const {getTableProps, getTableBodyProps, headerGroups, page, prepareRow, setGlobalFilter, nextPage, previousPage, canNextPage, canPreviousPage, pageOptions, setPageSize,selectedFlatRows, state} = tableInstance

  const {pageIndex, pageSize} = state

  const {globalFilter} = state
  return (
    <TableCard>
      <TableWrapper>
        <Box sx={{paddingTop: 2}}/>
        {/* {children} */}

        {/* <p className='px-4 text-kblackCom font-semibold text-body5 mb-4' >Recent Visit</p> */}
        <div className=' flex justify-between items-center'>
          {/* <div> */}
          {
            paginate &&
            <div className='flex items-center mb-4'>
              <p className='mr-2 blackcom text-body4'>Show</p>
              <select value = {pageSize} onChange = {e => setPageSize(Number(e.target.value))} className= " appearance-none block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {
                  [5, 10, 25, 50].map(pageSize => (
                    <option className='text-blackcom font-normal text-[8px]' key = {pageSize} value = {pageSize}>
                      {pageSize}
                    </option>
                  ))
                }
              </select>
              <p className='ml-2 blackcom text-body4'>entries</p>
            </div>
          }
          {/* </div> */}
          {
            search && <div className='mb-6' ><GlobalFilter filter = {globalFilter} setFilter = {setGlobalFilter}/> </div>
          }
          {children}
        </div>
        {/* <Box sx={{marginTop: 3}}/> */}
        <table className='table-spacing' {...getTableProps()}>
          <thead>
            {
              headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    headerGroup.headers.map((column) => (
                      // eslint-disable-next-line react/jsx-key
                      <th {...column.getHeaderProps()} > {column.render("Header")} </th>
                    ))
                  }
                </tr> 
              ))
            }
          </thead>
          <tbody {...getTableBodyProps()}>
            {
              page.map(row => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {
                      row.cells.map((cell) => {
                        return <td {...cell.getCellProps()}> {cell.render('Cell')} </td>
                      })
                    }
                  </tr>
                )
              })
            }
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table> 
          <div className='px-4 flex justify-between'>
              <div>
                {
                  footerShow && 
                  <div className='flex items-center'>
                    <p className='mr-2 blackcom text-body4'>Show</p>
                    <select value = {pageSize} onChange = {e => setPageSize(Number(e.target.value))} className= " appearance-none block  w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      {
                        [5,10, 25, 50].map(pageSize => (
                          <option className='text-blackcom font-normal text-[8px]' key = {pageSize} value = {pageSize}>
                            {pageSize}
                          </option>
                        ))
                      }
                    </select>
                    <p className='ml-2 blackcom text-body4'>entries</p>
                  </div>
                }
              </div>
              <div className='flex items-center'>
                  <span className='mr-3 text-body4 text-kblackCom'>
                    Page{' '}
                    <strong>
                      {pageIndex + 1} of {pageOptions.length}
                    </strong> {' '}
                  </span>
                  <div>
                    <button href="#" onClick={() => previousPage()} disabled={!canPreviousPage} className="previous text-body4 rounded-l text-kblackCom">&laquo; Previous</button>
                    <button href="#" onClick={() => nextPage()} disabled={!canNextPage} className="next text-body4 rounded-r">Next &raquo;</button>
                  </div>
              </div>    
          </div>
          <Box sx={{paddingBottom: 5}}/> 
      </TableWrapper>
    </TableCard>
  )
}

export default RTable