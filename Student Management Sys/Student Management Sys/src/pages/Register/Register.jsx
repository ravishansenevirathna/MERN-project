import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import * as React from "react";
import {useState} from "react";
import instance from "../../service/AxiosOrder.jsx";


export default function Register(){
    const [name, setName] = useState("");
    const [email,setMail]=useState("");
    const [password,setPassword]=useState("");

    
    const register = () => {
        instance.post('/register', {
            name: name,
            email: email,
            password:password

        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

//     const emailValidation =()=>{
//         const Regex = /^[A-Z0-9. _%+-]+@[A-Z0-9
//
//     };



    return(
        <div>
            <Card sx={{ maxWidth: 345 }}>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Register
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {m: 1, width: '25ch'},
                            }}
                            noValidate
                            autoComplete="off"
                        >

                            <TextField onChange={(val)=> setName(val.target.value)} id="outlined-basic" label="Enter your name" variant="outlined"/>
                            <br/><br/>
                            <TextField onChange={(val)=>setMail(val.target.value)} id="outlined-basic" label="Enter Your Email" variant="outlined"/>
                            <br/><br/>
                            <TextField onChange={(val)=>setPassword(val.target.value)} id="outlined-basic" label="Create a Password" variant="outlined"/>
                        </Box>
                    </Typography>

                </CardContent>
                <CardActions>
                    <Button variant="contained" onClick={register}>Register</Button>
                    <Link to={"/login"}>
                        <Button variant="contained">Login</Button>
                    </Link>
                </CardActions>
            </Card>

        </div>
    )
}