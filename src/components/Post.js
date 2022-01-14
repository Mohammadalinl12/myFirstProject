import React from "react";
import {
  makeStyles,
  Container,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card:{
      marginButtom:theme.spacing(5),
  }
    ,media: {
    height: 250,
    [theme.breakpoints.down("sm")]:{
        height:150
    }
  },
}));

const Post = (img, title) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          classes={classes.media}
          image="https://v4.mui.com//static/images/cards/contemplative-reptile.jpg"
          title="My Post"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5">
            My First Post
          </Typography>
          <Typography variant="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
      
      
      
};
export default Post;
