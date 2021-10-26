import { Menu, MenuItem, Typography, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    component: {
        marginTop: 40
    },
    logout: {
        marginLeft: 8,
        fontSize: 14
    }
});
const Profile = ({ account, setAccount }) => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        setAccount('');
    }


    const handleclick = (e) => {
        setOpen(e.currentTarget);
    }

    return (
        <>
            <Link>
                <Typography onClick={handleclick} style={{ marginTop: 4 }}>
                    {account}
                </Typography>
            </Link>
            <Menu

                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.component}
            >
                <MenuItem onClick= { handleClose}>
                    <PowerSettingsNewIcon fontSize="small" color="primary" />
                    <Typography className={classes.logout}>Logout</Typography></MenuItem>

            </Menu>
        </>
    )
}
export default Profile;