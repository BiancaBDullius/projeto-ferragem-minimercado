import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';

export const OverviewLatestProducts = (props) => {
  const { products = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Mais vendidos" />
      <List>
        {products.map((product, index) => {
          const hasDivider = index < products.length - 1;
          const ago = `${product.sum} em estoque`;

          return (
            <ListItem
              divider={hasDivider}
              key={product.produto_codigo}
            >
              <ListItemAvatar>
                {
                  product.image
                    ? (
                      <Box
                        component="img"
                        src='/assets/products/product-1.png'
                        sx={{
                          borderRadius: 1,
                          height: 48,
                          width: 48
                        }}
                      />
                    )
                    : (
                      <Box
                        sx={{
                          borderRadius: 1,
                          backgroundColor: 'neutral.200',
                          height: 48,
                          width: 48
                        }}
                      />
                    )
                }
              </ListItemAvatar>
              <ListItemText
                primary={product.nome}
                primaryTypographyProps={{ variant: 'subtitle1' }}
                secondary={ago}
                secondaryTypographyProps={{ variant: 'body2' }}
              />
              <IconButton edge="end">
                
              </IconButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      
    </Card>
  );
};

OverviewLatestProducts.propTypes = {
  products: PropTypes.array,
  sx: PropTypes.object
};
