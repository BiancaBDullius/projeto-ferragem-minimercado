import { format } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';

const statusMap = {
  pago: 'success',
  pendente: 'error'
};

export const OverviewLatestOrders = (props) => {
  const { orders = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Últimas Vendas" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: '100%' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  NOTA FISCAL
                </TableCell>
                <TableCell>
                  CLIENTE
                </TableCell>
                <TableCell sortDirection="desc">
                  DATA
                </TableCell>
                <TableCell>
                  STATUS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => {

const ano = order.data_venda.substring(0, 4);
const mes = order.data_venda.substring(5, 7);
const dia = order.data_venda.substring(8, 10);

const createdAt = `${dia}/${mes}/${ano}`;

                return (
                  <TableRow
                    hover
                    key={order.nota_fiscal}
                  >
                    <TableCell>
                      {order.nota_fiscal}
                    </TableCell>
                    <TableCell>
                      {order.cliente}
                    </TableCell>
                    <TableCell>
                      {createdAt}
                    </TableCell>
                    <TableCell>
                      <SeverityPill color={statusMap[order.status ? 'pago':'pendente']}>
                        {order.status ? "Pago" : "Pendente"}
                      </SeverityPill>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
     
    </Card>
  );
};

OverviewLatestOrders.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object
};
