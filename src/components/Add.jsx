import React, { useState } from 'react';
import { Stack, TextField, Grid, Button } from '@mui/material';
import { datas } from '../data';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/users/usersSlice';
export const Add = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
 
  function handleAdd(){
      dispatch(addUser(name, image, age, address));
      navigate('/');
  }
  console.log(datas);
  return (
    <Grid justifyContent={"center"} container>
    <Stack marginTop={30} direction={'column'} spacing={2}  sx={{
      width: "600px"
    }} >       
          <TextField label='name' variant='outlined'  required={true} inputProps={{
            required: true,
            maxLength: 12
          }} onChange={(e) => setName(e.target.value)} />
          <TextField label='Age' variant='outlined' required  onChange={(e) => setAge(e.target.value)}/>
          <TextField label='Image' variant='outlined' required onChange={(e) => setImage(e.target.value)}/>
          <TextField label='Address' variant='outlined' required  onChange={(e) => setAddress(e.target.value)}/>
       
          <Button onClick={handleAdd} variant='contained' color='primary'>Create</Button>
       
    </Stack>
    </Grid>
  )
}
