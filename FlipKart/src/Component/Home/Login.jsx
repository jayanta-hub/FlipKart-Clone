import { useState } from 'react';
import { Box, Dialog, DialogContent, makeStyles, Typography, TextField, Button } from '@material-ui/core';
import React from 'react';


const useStyle = makeStyles({
    DialogContent: {
        height: "85vh",
        width: "100%"
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

const initialValue = {
    login: {
        veiw: "login",
        heading: "Login",
        SubHeading: "Get access to your orders, Wishlist and Recommendations"
    },
    singup: {
        veiw: "singup",
        heading: "Looks like you are new here!",
        SubHeading: "Sing up with your mobile number to get started "
    }
}

const sinupInitialvalue = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const loginInitialvalue = {
    username: '',
    password: ''
}

const Login = ({ open, setOpen, setAccount }) => {
    const classes = useStyle();
    const [account, toggleAccount] = useState(initialValue.login)
    const [singup, setSingup] = useState(sinupInitialvalue)
    const [login, setLogin] = useState(loginInitialvalue)
    const handleClose = () => {
        setOpen(false);
        console.log(setOpen);
        toggleAccount(initialValue.login);

    }
    const toggleuserAccount = () => {
        toggleAccount(initialValue.singup);
    }

    const singupdetails = (e) => {
        setSingup({ ...singup, [e.target.name]: e.target.value })
    }

    const logindetails = (e) =>{
        setLogin({...login, [e.target.name]: e.target.value})
    }

    const singupuser = async () => {
        //    let respone = await authentcateSingup(sinup);
        //    if(!respone) return;
        handleClose();
        setAccount(singup.username);
    }

    const loginuser =async ()=>{
        // let respone = await authentcatesLogin(login);
        // if(!respone) return;
        handleClose();
        setAccount(login.username);
    
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
                        (account.veiw === "login") ?

                            <Box className={classes.login}>
                                <TextField onChange={logindetails} name='username' label='Enter Email/mobile number' />
                                <TextField onChange={logindetails}  name='password' label='Enter Password' />
                                <Typography className={classes.text}>By continuing. you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                                <Button  onClick={loginuser} variant="contained" className={classes.logBtn}>{account.heading}</Button>
                                <Typography className={classes.text} style={{ textAlign: 'center' }}>OR</Typography>
                                <Button variant="contained" className={classes.requestBtn}>Request OTP</Button>
                                <Typography onClick={() => toggleuserAccount()} className={classes.createText}>New to Flipkart? Create an account
                                </Typography>
                            </Box>
                            :
                            <Box className={classes.login} >
                                <TextField onChange={singupdetails} name='firstname' label='Enter First Name' />
                                <TextField onChange={singupdetails} name='lastname' label='Enter Last Name' />
                                <TextField onChange={singupdetails} name='username' label='Enter User Name' />
                                <TextField onChange={singupdetails} name='email' label='Enter Email number' />
                                <TextField onChange={singupdetails} name='password' label='Enter Password' />
                                <TextField onChange={singupdetails} name='phone' label='Enter Phone number' />
                                <Button variant="contained" onClick={singupuser} className={classes.logBtn}>{account.veiw}</Button>
                                {/*<pre>{JSON.stringify(singup)}</pre>*/}
                            </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
    )
};

export default Login;
