import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../services/productService";
import ProductCard from "../ProductCard/ProductCard";
import { Grid, Container, Box, Typography, Pagination } from "@mui/material";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box>
      <Box sx={{ margin:{sm:"30px"}}}>
        <Typography
          sx={{
            padding:"20px" ,
            fontWeight: "bold",
            fontSize: "30px",
         
          }}
        >
          Add Product Item
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Grid container spacing={4} justifyContent="center">
            {currentProducts.map((product) => (
              <Grid item xs={12} sm={6} md={2.4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Pagination controls */}
      <Box sx={{ display: "flex", justifyContent: "center", margin: "20px" }}>
        <Pagination
          count={Math.ceil(products.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default ProductList;
