import React, { useState } from "react";
import bg from './images/bg.png';
import tree from './images/tree.png';
import google from './images/google.png';
import fb from './images/fb.png'
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { RemoveCircle } from "@mui/icons-material";
import './Login.css';

export default function Login(email) {
    const [valid, setValid] = useState(true);
    const [exist, setExist] = useState(false);

    const validate = (email) => {
        if (email.length == 0) {
            setExist(false);
        }
        else {
            setExist(true);
        }
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || email.length == 0) {
            setValid(true);
        }
        else {
            setValid(false);
        }
    }

    return (
        <div style={{ width: '100%', height: '100vh', backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}>
            <Grid container sx={{ height: '100%' }} display="flex" alignItems="center" justifyContent="center">
                <Grid item xs={11} md={4} direction="column" sx={{ backgroundColor: 'white', borderRadius: '8px' }}>
                    <Box sx={{ paddingTop: 1.5, paddingBottom: 1, boxShadow: 3, borderRadius: '8px 8px 0 0' }}>
                        <img src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png" width="80" />
                    </Box>
                    <Grid sx={{ marginTop: 1 }}>
                        <Typography color="#20B716" fontSize="20px" fontWeight="bold">Login</Typography>
                    </Grid>
                    <Box sx={{ paddingTop: 1.5, paddingBottom: 1 }}>
                        <img src={tree} width='80%' />
                    </Box>
                    <Grid>
                        <TextField error={!valid} sx={{ width: '80%' }} variant="standard" label="Email" onChange={(e) => validate(e.target.value)} />
                        {!exist &&
                            <Typography display="flex" alignItems="center" sx={{ marginLeft: '10%', marginTop: 0.5 }} textAlign="left" fontSize="10px" color="red"><RemoveCircle style={{ fontSize: '15px', marginRight: 2 }} /> The email field is required</Typography>
                        }{
                            !valid &&
                            <Typography display="flex" alignItems="center" sx={{ marginLeft: '10%', marginTop: 0.5 }} textAlign="left" fontSize="10px" color="red"><RemoveCircle style={{ fontSize: '15px', marginRight: 2 }} /> Enter valid email</Typography>
                        }
                    </Grid>
                    <Grid sx={{ marginTop: 1 }}>
                        <TextField sx={{ width: '80%' }} variant="standard" label="Password" />
                    </Grid>
                    <Grid sx={{ marginTop: 2 }}>
                        <Button fullWidth sx={{ backgroundColor: "#20B716", borderRadius: '20px', width: '80%' }} variant="contained">Sign In</Button>
                    </Grid>
                    <Grid container sx={{ marginLeft: '10%', width: '80%', marginTop: 1 }}>
                        <Grid item xs={6} display="flex" justifyContent="flex-start">
                            <Typography color="#5c5c5c" fontSize="12px" fontWeight="bold">Forgot Password?</Typography>
                        </Grid>
                        <Grid item xs={6} display="flex" justifyContent="flex-end">
                            <Typography fontSize="12px" fontWeight="bold" color="#ff4122">New User? Sign Up?</Typography>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Typography sx={{ marginTop: 3 }} color="#5c5c5c" fontSize="12px" fontWeight="bold">Or</Typography>
                    </Grid>
                    <Grid sx={{ marginTop: 2 }}>
                        <Button fullWidth sx={{ backgroundColor: "#4285F4", width: '80%', paddingLeft: 1 }} variant="contained">
                            <img src={google} width={30} />
                            <Grid item xs>
                                CONTINUE WITH GOOGLE
                            </Grid>
                        </Button>
                    </Grid>
                    <Grid sx={{ marginTop: 2 }}>
                        <Button fullWidth sx={{ backgroundColor: "#1877F2", width: '80%', paddingLeft: 1 }} variant="contained">
                            <img src={fb} width={30} />
                            <Grid item xs>
                                CONTINUE WITH FACEBOOK
                            </Grid>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}