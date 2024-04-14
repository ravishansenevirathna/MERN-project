// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Link} from "react-router-dom";
import {Axios} from "axios";

import instance from "../../service/AxiosOrder.jsx";
import {useState} from "react";
export default function Login(){
    const [email, setMail] = useState("");
    const [password,setPassword]=useState("");



    const loginAction = () => {
        instance.post('/login', {
            email: email,
            password: password
        })
            .then(function (response) {

                localStorage.setItem('stmToken',response.data.token);
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return(
        <div>
            <Card sx={{ maxWidth: 345 }}>


                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Login
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField onChange={(val)=> setMail(val.target.value)} id="outlined-basic" label="Enter Your Email" variant="outlined" />
                            <br/><br/>
                            <TextField onChange={(val)=> setPassword(val.target.value)} id="outlined-basic" label="Enter Your Password" variant="outlined" />
                        </Box>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" onClick={()=>loginAction()}>Login</Button>


                    <p>dont have an account?</p>


                    <Link to={"/register"}>
                        <Button variant="contained">Register</Button>

                    </Link>
                </CardActions>
            </Card>
        </div>
    )
}