import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
const CardCourse = ({ result, buttonData,deleteSubscribedCourse }) => {
  console.log("--->", result);
  const navigate = useNavigate();

  return (
    <Card
      sx={{ width: "400px" }}
      style={{ marginBottom: "20px", backgroundColor: "#F5E8C7" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="{result?.snippet?.thumbnails?.high?.height}"
          width="{result?.snippet?.thumbnails?.high?.width}"
          image={result?.thumbnail}
        />
        <CardContent sx={{ backgroundColor: "#F5E8C7" }}>
          <Typography gutterBottom variant="h5" component="div">
            {result?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {result?.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            backgroundColor: "#F5E8C7",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={() => {
              navigate(`/player/${result?.playlistID}`);
            }}
            size="small"
            sx={{ backgroundColor: "#FFFFFF", color: "black" }}
          >
            {buttonData}
          </Button>
          <DeleteIcon
            onClick={() => {
              deleteSubscribedCourse();
            }}
          />
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default CardCourse;
