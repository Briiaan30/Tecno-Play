import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContexto.jsx';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -1,
        top: 1,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));


const CustomizedBadges = () => {
    const {countCart} = useContext(CartContext)

    return (
        <IconButton aria-label="cart" fontSize="small">
            <StyledBadge badgeContent={countCart()} color="secondary">
                <ShoppingCartIcon sx={{p:1, fontSize:35}}/>
            </StyledBadge>
        </IconButton>
    );
}

export default CustomizedBadges;