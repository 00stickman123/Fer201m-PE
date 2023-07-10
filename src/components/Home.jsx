import { Card, CardActions, CardContent, CardMedia, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export function Home(){
  const navigate = useNavigate();
  const datas = useSelector(state => state.user)
  return(
    <>
      <Grid container my={10}  columnGap={3} rowGap={5} justifyContent={"center"} alignContent={"start"}>
          {datas.map(data => (         
              <Grid item key={data.id}>             
                    <Card sx={{
                      width: '250px'
                    }}>
                        <CardMedia component='img' image={data.avatar} alt={data.createdAt}></CardMedia>
                        <CardContent>
                          <Typography>{data.name}</Typography>
                        </CardContent>
                        <CardActions>
                          <Button onClick={() => navigate(`detail/${data.id}`)}>Detail</Button> 
                        </CardActions>                      
                    </Card>
              </Grid>    
          ))}
      </Grid> 
      </>
  )
  
}