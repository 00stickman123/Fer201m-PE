import {
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
  Grid,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export const Detail = () => {
  const datas = useSelector(state => state.user)
  const { userId } = useParams();
  const data = datas.filter((data) => data.id === userId);
  return (
    <Grid marginTop={18} justifyContent={"center"} container alignItems="center">
      <Paper elevation={5}>
        <Card
          sx={{
            width: "400px",
          }}
        >
          <CardMedia
            component="img"
            image={data[0].avatar}
            alt={data[0].id}
          ></CardMedia>
          <CardContent>
            <Typography variant="h5">{data[0].name}</Typography>
            <Typography variant="h6">Age: {data[0].age}</Typography>
            <Typography variant="h7">
              Created Date: {data[0].createdAt}
            </Typography>
            <Typography variant="h6">Address: {data[0].address}</Typography>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
};
