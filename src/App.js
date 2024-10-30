import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import { Box } from "@mui/material";
function App() {
    return (_jsxs(Box, { sx: { overflow: "hidden" }, children: [_jsx(ProductList, {}), _jsx(Cart, {})] }));
}
export default App;
