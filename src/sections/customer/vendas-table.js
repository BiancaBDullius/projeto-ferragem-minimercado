import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { getInitials } from 'src/utils/get-initials';

export const CustomersTable = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => {},
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0,
  } = props;

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Cliente
                </TableCell>
                <TableCell>
                  Vendedor
                </TableCell>
                <TableCell>
                  Valor
                </TableCell>
                <TableCell>
                  Data
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((customer) => {

                return (
                  <TableRow
                    hover
                    key={customer.id}
                    
                  >
                  
                    <TableCell>
                      <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                      >
                        
                        <Typography variant="subtitle2">
                          {customer.cliente}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      {customer.vendedor}
                    </TableCell>
                    <TableCell>
                      R$ {customer.valor}
                    </TableCell>
                    <TableCell>
                      {customer.data}
                    </TableCell>
                    <TableCell>
                      {customer.status}
                    </TableCell>
                  
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CustomersTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,

  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,

  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
};
