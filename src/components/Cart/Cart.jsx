import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@mui/material";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Box>
      <Box>
        <Typography
          sx={{ padding: "30px", fontWeight: "bold", fontSize: "30px" }}
        >
          {" "}
          Product List Item
        </Typography>
      </Box>
      <Grid
        container
        spacing={0}
        sx={{
          marginTop: 3,
          marginLeft: { md: "20px", sm: "0px" },
          padding: "4px",
        }}
      >
        {cartItems?.map((product) => (
          <Grid item xs={12} sm={12} md={4} lg={2.4} key={product.id}>
            <Card sx={{ maxWidth: { sm: "90%", md: 209.6 }, boxShadow: 0 }}>
              <CardMedia
                component="img"
                height="210"
                image={product.thumbnail}
                alt={product.title}
                sx={{ background: "#E5E4E2", borderRadius: "8px" }}
              />
              <CardContent>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  sx={{
                    color: "#77818C",
                    fontFamily: "Murecho",
                    fontSize: "14px",
                  }}
                >
                  {product.brand}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    lineHeight: "22px",
                    overflow: "hidden",
                    fontFamily: "Murecho",
                    color: "dark/900",
                    textOverflow: "ellipsis",
                  }}
                >
                  {product.description}
                </Typography>
                <Grid
                  item
                  xs={12}
                  textAlign="left"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography
                    variant="h6"
                    color="primary"
                    fontWeight="bold"
                    sx={{
                      marginTop: 1,
                      marginRight: 1,
                      color: "#1882FF",
                      fontSize: "20px",
                      lineHeight: "22px",
                      fontFamily: "Murecho",
                    }}
                  >
                    ${product.price}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    sx={{
                      textDecoration: "line-through",
                      color: "#77818C",
                      fontFamily: "Murecho",
                      fontSize: "14px",
                      mt: 1,
                      alignItems: "center",
                      lineHeight: "22px",
                    }}
                  >
                    {product.discountPercentage}
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Cart;
