import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../features/users/usersSlice";
export const Dashboard = () => {
  const dispatch = useDispatch()
  const datas = useSelector(state => state.user)
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(null);
  function handleDeleteClick(index) {
    setOpen(true);
    setIndex(index);
  }
  function handleDelete(){
    dispatch(deleteUser(index))
    setOpen(false);
  }
  console.log(index);
  const navigate = useNavigate();
  return (
    <>
      <Grid justifyContent={"start"} container>
        <Button
          onClick={() => navigate("/dashboard/add")}
          variant="contained"
          color="secondary"
          sx={{
            marginTop: "100px",
            marginLeft: "30px",
          }}
        >
          Add
        </Button>
      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Created date</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Address</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map((data, index) => (
              <TableRow key={data.id}>
                <TableCell>{data.id}</TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.age}</TableCell>
                <TableCell>{data.createdAt}</TableCell>
                <TableCell>{data.avatar}</TableCell>
                <TableCell>{data.address}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDeleteClick(index)}
                  >
                    Delete
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="outlined" color="info">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure want to delete this user
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button autoFocus onClick={handleDelete} >Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
