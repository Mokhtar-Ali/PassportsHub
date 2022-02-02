import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Me from "../pics/painted.png";
import PyramidsPic from "../pics/pyramids.jpg";
import "../style/blog.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: "20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Sample() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={Me} className={classes.avatar} />
        }
        action={
          <IconButton aria-label="settings">
            <a href="/egypt">Egypt</a>
          </IconButton>
        }
        title={<h4>Cairo</h4>}
        subheader="September 14, 2016"
      />
      <CardMedia className={classes.media} image={PyramidsPic} title="image" />

      <CardContent>
        <Typography
          className="text"
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Whenever you hear Egypt, Your brain will always picture three
          Pyramids, The Sphinx, Camels and Horses. This picture isn't wrong,
          I'll be happy to write about it in this article that will make you
          more excited to visit Egypt. And I will write about all the info and
          tips you'll need to know before visiting The land of the Pharaohs.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <h5>Blog</h5>
          <Typography paragraph className="text">
            As an Egyptian Citizen, I grew up in Cairo, Capital of Egypt. Only
            10 miles away from the Pyramids. And yes it's always fascinating to
            see the Pyramids everyday.
          </Typography>
          <Typography paragraph className="text">
            First Getting to Egypt, The best time to visit is when the climate
            is nice, Egypt has four seasons but avoid going in the summer as its
            brutal, Warm winters attract a lot of tourists. I recommend visiting
            Egypt between October and May.
            <br />
          </Typography>
          <Typography paragraph className="text">
            <h5 style={{ textAlign: "center" }}>3 Days Schedule in Cairo</h5>
            Day One: visit the Pyramids and the Sphinx in the morning, You can
            go inside The Great Pyramid as well. Ride a camel, its an amazing
            experience. Before Sunset You can go check the Nile River, The 2nd
            largest river in the world after the Amazon, Take a boat (Faloka)
            they call it, and enjoy the view of the Sunset and downtown Cairo
            with a beautiful breeze. 
            <hr />
            <img src={PyramidsPic} className="image-in-blog" alt="" />
            <hr />
            Day Two: Visit the Egyptian Museum in the morning, You'll learn more
            about ancient Egypt and how they started the first civilization on
            Earth and how modern in Medicine, Math, Military and more. From
            there, You are not far away from Old Cairo, where there are
            beautiful old Churches, Mosques, Temples, Roman old Castles. By
            Sunset, Visit Cairo Tower, similar to Eiffel tower where you can see
            Cairo from above and enjoy a cup of Egyptian tea from one of the
            restaurants on the top of the Tower.
            <br />
            <hr />
            <img src={PyramidsPic} className="image-in-blog" alt="" />
            <hr />
            Day Three: Visit Saladin Citadel in the morning, You'll be impressed
            by the old decorations of the Mosques in that area and how that
            Citadel used to be the Fortress of Cairo, so many culture to learn
            and beautiful pictures you can take. After, Head to Khan El Khalili.
            Where all the handmade souvenirs, silver, gold and cloths where
            you'll not find anywhere else in the World.  If you have more time
            and you like shopping, don't miss City Stars, The biggest mall in
            The middle East where there is a lot of brands and sales.
            <hr />
            <img src={PyramidsPic} className="image-in-blog" alt="" />
            <hr />
          </Typography>

          <Typography paragraph className="text">
            <h5 style={{ textAlign: "center" }}>Tips</h5>
            Egypt has 4 seasons <br />
            Use Uber for Transportation.
            <br />
            Keep a light jacket on you all the time.  Don't show too much shiny
            things in crowded areas. 
            <br />
            You'll need to check the weather before going and each part. <br />
            Egypt is very affordable But you'll need cash in some parts. <br />
            Couchsurfing is Important Everywhere and very helpful in Egypt. 
            <br />
            one of the Biggest Malls in the world is called City Stars in Cairo{" "}
            <br />
          </Typography>
          <Typography></Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
