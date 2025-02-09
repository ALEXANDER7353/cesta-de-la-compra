import { useContext } from "react";
import {
  List,
  Typography,
  Box,
  Button,
  ListItem,
  ListItemText,
} from "@mui/material";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <Box sx={{ width: 320, p: 2 }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Carrito de Compras
      </Typography>
      <List>
        {cart.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={`$${item.price}`} />
            <Button
              size="small"
              color="secondary"
              onClick={() => removeFromCart(item)}
            >
              Eliminar
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Cart;
