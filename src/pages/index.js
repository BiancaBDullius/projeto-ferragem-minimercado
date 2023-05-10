import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products';
import { OverviewSales } from 'src/sections/overview/overview-sales';
import { OverviewTotalCustomers } from 'src/sections/overview/overview-total-customers';
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';


const now = new Date();
let aa = 0;
const teste = async () =>{

   aa = 18;
}
 teste();


const Page = () =>{ 
  const valoresAnuais = [
    {
      name: 'Valor em vendas',
      data: [aa, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 13]
    }
  ];
  const lucroDoDia = 20;
  const clientesNoDia = 2;

  const produtos = [
    {
     produto_codigo: '5ece2c077e39da27658aa8a9',
      image: '/assets/products/product-1.png',
      nome: 'Healthcare Erbology',
      sum: 100
    }
  ];
  const ultimasVendas = [
    {
      "nota_fiscal": "1",
      "data_venda": "2023-05-10T03:00:00.000Z",
      "valor": "200.00",
      "status": false,
      "cliente": "Edson Giovanni Galvão",
      "vendedor": "Mateus Calebe Francisco Moreira"
    },
    {
      "nota_fiscal": "2",
      "data_venda": "2023-05-10T03:00:00.000Z",
      "valor": "120.00",
      "status": true,
      "cliente": "Eliane Gabriela da Luz",
      "vendedor": "Regina Vitória Vanessa Duarte"
    }
  ];

  const vendasNoMes = {
    valor: 200,
    diferenca: 14,
    positivo: true
  }


  return (
  <>
    <Head>
      <title>
        Dashboard
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
        >    
          <Grid
            xs={12}
            sm={6}
            lg={4}
          >
            <OverviewTotalProfit
              sx={{ height: '100%' }}
              value={"R$" + lucroDoDia}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={4}
          >
            <OverviewBudget
              difference={vendasNoMes.diferenca}
              positive={vendasNoMes.positivo}
              sx={{ height: '100%' }}
              value={vendasNoMes.valor}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={4}
          >
            <OverviewTotalCustomers
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value={clientesNoDia}
            />
          </Grid>
          <Grid
            xs={12}
            lg={8}
          >
            <OverviewSales
              chartSeries={valoresAnuais}
              sx={{ height: '100%' }}
            />
          </Grid>
       
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewLatestProducts
              products={produtos}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={12}
          >
            <OverviewLatestOrders
              orders={ultimasVendas}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
}
Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
