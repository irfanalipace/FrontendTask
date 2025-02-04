import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <ProductList />
      <Cart />
    </Box>
  );
}

export default App;
