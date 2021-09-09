import { useState } from 'react';
import { Box, Dialog, DialogContent, makeStyles, Typography, TextField, Button } from '@material-ui/core';
import React from 'react';


const useStyle = makeStyles({
    DialogContent: {
        height: "85vh",
        width: "95vh"
    },

    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: "85vh",
        width: "40%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#2874f0",
        backgroundPosition: "center 85%",
        padding: "45px 35px",
        '& > *': {
            color: "#FFFFFF",
            fontWeight: 600,
        }
    },
    login: {
        padding: "25px 35px",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        '& > *': {
            marginTop: 15
        }
    },
    text: {
        color: "#878787",
        fontSize: 12
    },
    logBtn: {
        textTransform: "none",
        background: "#FB641B",
        color: "#FFFFFF",
        height: 40,
        borderRadius: 2

    },
    requestBtn: {
        textTransform: "none",
        background: "#FFFFFF",
        color: "#2874f0",
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'

    },
    createText: {
        textAlign: "center",
        marginTop: "auto",
        fontSize: "14px",
        color: "#2874f0",
        fontWeight: 600,
        cursor: "pointer"

    }


});

const initialValue={
    login:{
        veiw: "login",
        heading: "Login",
        SubHeading: "Get access to your orders, Wishlist and Recommendations"
    },
    singup:{
        veiw: "singup",
        heading: "Looks like you are new here!",
        SubHeading: "Sing up with your mobile number to get started "
    }
}
const Login = ({ open, setOpen }) => {
    const classes = useStyle();
    const [account, setAccount] = useState(initialValue.login)
    const handleClose = () => {
        setOpen(false);
        console.log(setOpen);
        setAccount(initialValue.login);

    }
    const toggleAccount=()=>{
        setAccount(initialValue.singup);
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.DialogContent}>
                <Box style={{ display: "flex" }}>
                    <Box className={classes.image}>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{ marginTop: '20px' }}>{account.SubHeading}</Typography>

                    </Box>

                    {
                        (account.veiw === "login")?

                        <Box className={classes.login}>
                            <TextField name='username' label='Enter Email/mobile number' />
                            <TextField name='password' label='Enter Password' />
                            <Typography className={classes.text}>By continuing. you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button variant="contained" className={classes.logBtn}>{account.heading}</Button>
                            <Typography className={classes.text} style={{ textAlign: 'center' }}>OR</Typography>
                            <Button variant="contained" className={classes.requestBtn}>Request OTP</Button>
                            <Typography  onClick={()=>toggleAccount()} className={classes.createText}>New to Flipkart? Create an account
                            </Typography>
                        </Box>
                        :
                        <Box className={classes.login}>
                            <TextField name='firstname' label='Enter First Name' />
                            <TextField name='lastname' label='Enter Last Name' />
                            <TextField name='username' label='Enter User Name' />
                            <TextField name='email' label='Enter Email number' />
                            <TextField name='password' label='Enter Password' />
                            <TextField name='phone' label='Enter Phone number' />
                            <Button variant="contained"  className={classes.logBtn}>{account.veiw}</Button>
                            
                        </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
    )
};

export default Login;
