import { Dialog, DialogContent, makeStyles } from '@material-ui/core';
import React from 'react';


const useStyle=makeStyles({
    DialogContent:{
        height:"70vh",
        width:"90vh"
    }
});
const Login = ({open,setOpen}) => {
    const classes=useStyle();
    const handleClose=()=>{
        setOpen(false);
    }
    return (
        <Dialog  open={open} onClick={handleClose}>
            <DialogContent className={classes.DialogContent}>
            <p>hello</p>
            </DialogContent>
        </Dialog>
    )
};

export default Login;
