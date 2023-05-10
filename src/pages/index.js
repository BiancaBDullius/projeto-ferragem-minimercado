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
import axios from 'axios'
let lucroDoDia = 0;
let clientesNoDia = 0;
let vendasNoMes = {
  valor: 0,
  diferenca: 0,
  positivo: true
}
let produtos = [];
let ultimasVendas = [];


let valoresAnuais = [
  {
    name: 'Valor em vendas',
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }
];

const dash = async () =>{
  const res = await axios.get('https://trabalho-pbd.herokuapp.com/dashboard')
  const data = await res.data

 lucroDoDia = data.lucroDia;
 clientesNoDia  = data.clientesNoDia;
 vendasNoMes.valor = data.vendasNoMes.valor;

 const res1 = await axios.get('https://trabalho-pbd.herokuapp.com/tabela-anual')
 const data1 = await res1.data

valoresAnuais[0].data = data1.values;
}




 dash();
const Page = () =>{ 
  dash()

  
 

  

 


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
Page.getLayout = (page) => { 
  dash();
  return (
  <DashboardLayout>
    {page}
  </DashboardLayout>
)};

export default Page;
