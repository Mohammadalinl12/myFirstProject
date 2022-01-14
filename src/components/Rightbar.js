import React from "react";
import {
  makeStyles,
  Container,
  Typography,
  ImageListItem,
  ImageList,
  itemData,
  Avatar,
  Link,
} from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles((theme) => ({

  


  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
    
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
    


  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: 20 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com//static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://mui.com//static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com//static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://mui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/6.jpg"
        />{" "}
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/7.jpg"
        />{" "}
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/8.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList rowHeight={160} style={{ marginBottom: 200 }} cols={2}>
        <ImageListItem>
          <img
            src="https://mui.com/static/images/image-list/breakfast.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://mui.com/static/images/image-list/burgers.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://mui.com/static/images/image-list/camera.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://mui.com/static/images/image-list/morning.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img src="https://mui.com/static/images/image-list/hats.jpg" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://mui.com/static/images/image-list/vegetables.jpg"
            alt=""
          />
        </ImageListItem>
        <Typography className={classes.title} gutterBottom>
          Categories
        </Typography>
      </ImageList>
      <Link href="#" className={classes.link} variant="body2">
        Sport
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Food
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Music
      </Link>
      <Divider flexItem style={{ marginBottom: 5 }} />
      <Link href="#" className={classes.link} variant="body2">
        Movies
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Science
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Life
      </Link>
    </Container>
  );
};
export default Rightbar;
