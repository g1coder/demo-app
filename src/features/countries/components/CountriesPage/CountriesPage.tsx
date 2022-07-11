
import React, {useState} from 'react';
import useFetch from 'core/hooks/useFetch';
import CountriesService from 'features/countries/services/CountriesService';
import Spinner from 'core/components/Spinner';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ICountry from 'features/countries/models/ICountry';
import {styled} from '@mui/material/styles';

const StyledPaper = styled(Paper)(() => ({
  width: '100%',
  overflow: 'hidden'
}));

const StyledTableContainer = styled(TableContainer)(() => ({
  height: '100%',
  maxHeight: 'calc(100vh - 180px)',
}));

interface IColumn {
  id: keyof ICountry;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly IColumn[] = [
  {id: 'name', label: 'Name', minWidth: 170},
  {id: 'isoCode', label: 'ISO\u00a0Code', minWidth: 100},
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

const CountriesPage = () => {
  const [countries] = useFetch(
    {
      fetch: (params) => CountriesService.getAll(params),
      data: [],
    },
    []
  );

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (!countries.ready) {
    return <Spinner />;
  }

  return (
    <StyledPaper>
      <StyledTableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{minWidth: column.minWidth}}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {countries.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.isoCode}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={row.id + column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={countries.data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </StyledPaper>
  );
};

export default CountriesPage;
