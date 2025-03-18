import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget.jsx';
import './Navbar.css';


const pages = ['Productos', 'Arma tu PC', 'Contacto'];
const settings = ['Perfil', 'Cuenta', 'Mis pedidos', 'Cerrar sesión'];
const productOptions = ['Electronicos'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElProducts, setAnchorElProducts] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleOpenProductsMenu = (event) => {
        setAnchorElProducts(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleCloseProductsMenu = () => {
        setAnchorElProducts(null);
    };

    const selectCategory = (option) => {
        if (option === "Electronicos") {
            return "/category/electronics"
        }
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <img className='logo' src="/src/assets/images/logoTecnoPlay.png" alt="" />
                    </Link>
                    {/* Titulo Tecno Play No Responsive */}
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 3,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
                            TECNO-PLAY
                        </NavLink>
                    </Typography>

                    {/* Boton hamburguesa */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Titulo Tecno Play Responsive */}
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                        TECNO-PLAY
                    </Typography>

                    {/* Paginas adicionales */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                        {pages.map((page) => (
                            page === 'Productos' ? (
                                <Box key={page}>
                                    <Button
                                        onClick={handleOpenProductsMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                    <Menu
                                        anchorEl={anchorElProducts}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        open={Boolean(anchorElProducts)}
                                        onClose={handleCloseProductsMenu}
                                    >
                                        {productOptions.map((option) => (
                                            <MenuItem key={option} onClick={handleCloseProductsMenu}>
                                                {/* {option}  */}
                                                <NavLink to={selectCategory(option)} style={{ textDecoration: 'none', color: 'black' }}>
                                                    {option}
                                                </NavLink>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            ) : (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}>
                                    {page}
                                </Button>
                            )
                        ))}
                    </Box>
                    {/* Carrito de compras */}
                    <Link to="/cart" style={{ textDecoration: 'none' }}>
                        <CartWidget />
                    </Link>
                    {/* Menu del usuario */}
                    <Box sx={{ flexGrow: 0, p: 0 }}>
                        <Tooltip title="Open settings" sx={{}}>
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ m: 1, width: 47, height: 47 }}>
                                <img className="tamañoAvatar" src="/src/assets/images/react.svg" alt="Brian Sarmiento" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;