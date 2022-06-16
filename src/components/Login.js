import React, { useEffect,useContext } from 'react'
import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Center from './Center'
import useForm from '../hooks/useForm'
import { createAPIEndpoint, ENDPOINTS } from '../api'
import useStateContext from '../hooks/useStateContext'
import { useNavigate } from 'react-router'

const getFreshModel = () => ({
    userId:0,
    username: '',
    password: ''
})
export default function Login() {
 
 const { context, setContext} = useStateContext();
   const navigate = useNavigate()

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);
/*
    useEffect(() => {
        resetContext()
    }, [])
*/

    const login = e => {
        e.preventDefault();
        if (validate())
            createAPIEndpoint(ENDPOINTS.user)
                .post(values)
                .then(res => {
                    setContext({ userId: res.data.ID })
                    setContext({ username: res.data.username })
                    console.log(context)
                    navigate('/overview')
                })
                .catch(err => console.log(err))
    }

    const validate = () => {
        let temp = {}
        //temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid."
        temp.username = values.username != "" ? "" : "This field is required."
        temp.password = values.password != "" ? "" : "This field is required."
        setErrors(temp)
        return Object.values(temp).every(x => x == "")
    }

    return (
        <Center>
            <Card sx={{ width: 400 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ my: 3 }}>
                        Quiz App
                    </Typography>
                    <Box sx={{
                        '& .MuiTextField-root': {
                            m: 1,
                            width: '90%'
                        }
                    }}>
                        <form noValidate autoComplete="on" onSubmit={login}>
                            
                            <TextField
                                label="Name"
                                name="username"
                                value={values.username}
                                onChange={handleInputChange}
                                variant="outlined"
                                {...(errors.username && { error: true, helperText: errors.username })} />
                                <TextField
                                label="Password"
                                name="password"
                                value={values.password}
                                onChange={handleInputChange}
                                variant="outlined"
                                {...(errors.password && { error: true, helperText: errors.password })} />
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{ width: '90%' }}>Start</Button>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </Center>


    )
}
