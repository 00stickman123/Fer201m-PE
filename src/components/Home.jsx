import { Card, CardActions, CardContent, CardMedia, Stack, Typography, Grid, Button } from "@mui/material";
import { datas } from "../data";
export function Home(){
  return(
      <Grid container my={10}  columnGap={3} rowGap={5} justifyContent={"center"} alignContent={"start"}>
          {datas.map(data => (
             <Stack >
              <Grid item>             
                    <Card id={data.id} sx={{
                      width: '250px'
                    }}>
                        <CardMedia component='img' image={data.avatar} alt={data.createdAt}></CardMedia>
                        <CardContent>
                          <Typography>{data.name}</Typography>
                        </CardContent>
                        <CardActions>
                          <Button>Detail</Button>
                        </CardActions>
                    </Card>
                   
              </Grid>
              </Stack>
          ))}
      </Grid>
  )
}