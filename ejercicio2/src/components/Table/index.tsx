import React from 'react';
import {
  useReactTable,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';
import './CovidTable.scss'; // Import SCSS file

// Define types for the data structure
type CovidData = {
  date: string;
  cases: {
    total: {
      value: number;
      calculated: {
        change_from_prior_day: number;
      };
    };
  };
  testing: {
    total: {
      value: number;
      calculated: {
        change_from_prior_day: number;
      };
    };
  };
};

interface CovidTableProps {
  data: CovidData[];
}

const CovidTable: React.FC<CovidTableProps> = ({ data }) => {
  const columns = React.useMemo<ColumnDef<CovidData>[]>(
    () => [
      {
        accessorKey: 'date', // Access date field from data
        header: 'Date',
      },
      {
        accessorKey: 'cases.total.value', // Access total cases
        header: 'Total Cases',
      },
      {
        accessorKey: 'cases.total.calculated.change_from_prior_day', // Access daily case change
        header: 'New Cases',
      },
      {
        accessorKey: 'testing.total.value', // Access total tests
        header: 'Total Tests',
      },
      {
        accessorKey: 'testing.total.calculated.change_from_prior_day', // Access daily test change
        header: 'New Tests',
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="covid-table-container">
      <h2 className='title-secondary covid-table__title'>Daily COVID-19 Cases and Testing Data in the U.S.</h2>
      <div className='table-wrapper'>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
          </div>
      <div className="pagination">
        <button className='button-primary' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Previous
        </button>
        <span>
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <button className='button-primary' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CovidTable;
