import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";
import DeleteIcon from "@mui/icons-material/Delete"; 
import AddIcon from "@mui/icons-material/Add"; 
import VisibilityIcon from "@mui/icons-material/Visibility"; 
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import discount from "../../assets/images/products/discount.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const isInCart = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id)
  );

  const handleCartClick = () => {
    isInCart ? dispatch(removeFromCart(product)) : dispatch(addToCart(product));
  };

  return (
    <Card
      sx={{
        boxShadow: 2,
        position: "relative",
        borderRadius: "5px",
        padding: "1px",
      }}
    >
      <Box
        position="relative"
        sx={{ background: "#E5E4E2", borderRadius: "8px" }}
      >
        <CardMedia
          component="img"
          height="210"
          image={product.thumbnail}
          alt={product.title}
        />

        <Box
          position="absolute"
          top={12}
          left={0}
          gap={1}
          sx={{
            marginLeft: "-10px",
            display: "flex",
            justifyContent: "space-between",
            // width: "100%",
          }}
        >
          <Box>
            <img src={discount} alt="img" />
          </Box>
          <Box>
            <FavoriteBorderIcon sx={{ color: "white" }} />
          </Box>
        </Box>
        <Box
          position="absolute"
          bottom={10}
          left={40}
          display="flex"
          flexDirection="column"
          gap={1}
         
        >
          <Button
            variant="outlined"
            sx={{
              borderRadius: "6px",
              fontFamily: "Murecho",
              border: "1.5px solid #FFFFFF4D",
              backgroundColor: isInCart ? "#03A629" : "transparent",
              fontSize: "10px",
              color: "white",
              "&:hover": {
                backgroundColor: "#03A629",
                border: "1.5px solid #FFFFFF4D",
              },
              "&:focus": {
                outline: "none",
              },
              display: "flex",
              alignItems: "center",
              padding: "6px 12px",
            }}
            onClick={handleCartClick}
          >
            {isInCart ? (
              <>
                <DeleteIcon sx={{ marginRight: 1 }} />
                Add to cart
                <AddIcon sx={{ marginLeft: 1 }} />
              </>
            ) : (
              <>
                <AddShoppingCartIcon sx={{ marginRight: 1 }} />
                Add to cart
              </>
            )}
          </Button>

          <Button
            variant="outlined"
            sx={{
              borderRadius: "6px",
              fontFamily: "Murecho",
              border: "1.5px solid #FFFFFF4D",
              backgroundColor: "transparent",
              fontSize: "10px",
              color: "white",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
                border: "1.5px solid #FFFFFF4D",
              },
              "&:focus": {
                outline: "none",
              },
              display: "flex",
              alignItems: "center",
              padding: "6px 12px",
            }}
          >
            <VisibilityIcon sx={{ marginRight: 1 }} />
            Quick View
          </Button>
        </Box>
      </Box>

      <CardContent>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          sx={{ color: "#77818C", fontFamily: "Murecho", fontSize: "14px" }}
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

        <Box textAlign="left" sx={{ display: "flex", alignItems: "center" }}>
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
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
