import React from 'react';
import { AppBar, Toolbar, Button, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const Navbar = () => {
    // State to manage the profile menu
    const [anchorEl, setAnchorEl] = React.useState(null);

    // Open the menu when the user clicks on the profile icon
    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Close the menu
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Handle the sign-out action (you can replace this with actual sign-out logic)
    const handleSignOut = () => {
        console.log("User signed out");
        // You can add your sign-out logic here (e.g., clear user data, redirect to login)
        handleClose();
    };


    return (
        <AppBar position="sticky">
            <Toolbar>
                {/* Logo or Title */}
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Shift Management
                </Typography>

                {/* Navigation Links */}
                <Button component={Link} to="/dashboard" color="inherit">
                    Dashboard
                </Button>
                <Button component={Link} to="/shift" color="inherit">
                    Shift
                </Button>
                <Button component={Link} to="/reports" color="inherit">
                    Reports
                </Button>
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={handleProfileClick}
                >
                    <AccountCircleIcon />
                </IconButton>

                {/* Menu for Sign Out */}
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;