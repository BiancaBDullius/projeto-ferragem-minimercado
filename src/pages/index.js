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



const Page = () =>{ 

  const valoresAnuais = [
    {
      name: 'Valor em vendas',
      data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 13]
    }
  ];
  const lucroDoDia = 20;
  const clientesNoDia = 2;

  const produtos = [
    {
      id: '5ece2c077e39da27658aa8a9',
      image: '/assets/products/product-1.png',
      name: 'Healthcare Erbology',
      updatedAt: subHours(now, 3).getTime()
    },
    {
      id: '5ece2c0d16f70bff2cf86cd8',
      image: '/assets/products/product-2.png',
      name: 'Makeup Lancome Rouge',
      updatedAt: subDays(subHours(now, 8), 2).getTime()
    },
    {
      id: 'b393ce1b09c1254c3a92c827',
      image: '/assets/products/product-5.png',
      name: 'Skincare Soja CO',
      updatedAt: subDays(subHours(now, 1), 1).getTime()
    },
    {
      id: 'a6ede15670da63f49f752c89',
      image: '/assets/products/product-6.png',
      name: 'Makeup Lipstick',
      updatedAt: subDays(subHours(now, 3), 3).getTime()
    },
    {
      id: 'bcad5524fe3a2f8f8620ceda',
      image: '/assets/products/product-7.png',
      name: 'Healthcare Ritual',
      updatedAt: subDays(subHours(now, 5), 6).getTime()
    }
  ];
  const ultimasVendas = [
    {
      id: 'f69f88012978187a6c12897f',
      ref: 'DEV1049',
      amount: 30.5,
      customer: {
        name: 'Ekaterina Tankova'
      },
      createdAt: 1555016400000,
      status: 'pago'
    },
    {
      id: '9eaa1c7dd4433f413c308ce2',
      ref: 'DEV1048',
      amount: 25.1,
      customer: {
        name: 'Cao Yu'
      },
      createdAt: 1555016400000,
      status: 'pago'
    },
    {
      id: '01a5230c811bd04996ce7c13',
      ref: 'DEV1047',
      amount: 10.99,
      customer: {
        name: 'Alexa Richardson'
      },
      createdAt: 1554930000000,
      status: 'pendente'
    },
    {
      id: '1f4e1bd0a87cea23cdb83d18',
      ref: 'DEV1046',
      amount: 96.43,
      customer: {
        name: 'Anje Keizer'
      },
      createdAt: 1554757200000,
      status: 'pago'
    },
    {
      id: '9f974f239d29ede969367103',
      ref: 'DEV1045',
      amount: 32.54,
      customer: {
        name: 'Clarke Gillebert'
      },
      createdAt: 1554670800000,
      status: 'pendente'
    },
    {
      id: 'ffc83c1560ec2f66a1c05596',
      ref: 'DEV1044',
      amount: 16.76,
      customer: {
        name: 'Adam Denisov'
      },
      createdAt: 1554670800000,
      status: 'pendente'
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
