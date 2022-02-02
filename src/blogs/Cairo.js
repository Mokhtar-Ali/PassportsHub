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
import Me from "../pics/painted.png";
import PyramidsPic from "../pics/pyramids.jpg";
import CairoTower from "../pics/Egypt/cairo-tower.jpg";
import Khan from "../pics/Egypt/khan.jpg";
import Pyramids from "../pics/Egypt/Pyramids.jpg";
import { Link } from "react-router-dom";
import "../style/blog.css";
// import { IoLogoYoutube } from 'react-icons';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100vh",
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

export default function Cairo() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="image" src={Me} className={classes.avatar} />
        }
        action={
          <IconButton aria-label="settings">
            <a href="/egypt">Egypt</a>
          </IconButton>
        }
        title={<h4>Cairo</h4>}
        subheader="August, 2015"
      />
      <CardMedia className={classes.media} image={Pyramids} title="image" />

      <CardContent>
        <Typography
          className="text"
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Whenever you hear Egypt, Your mind will always imagine three Pyramids,
          The Sphinx, Camels, and Horses. This picture isn't wrong, I'll be
          happy to write about it in this article that will make you more eager
          to visit Egypt. And I will write about everything you'll need to know
          before visiting The land of the Pharaohs.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {/* <FavoriteIcon /> */}
          {/* <IoLogoYoutube /> */}
          <a
            href="https://www.youtube.com/watch?v=0NjnKn63r8w"
            target="_blank"
            style={{ color: "red" }}
          >
            {" "}
            <ion-icon name="logo-youtube" />
          </a>
        </IconButton>
        <IconButton aria-label="share">
          {/* <ShareIcon /> */}
          {/* <FacebookShareButton /> */}
          {/* <FacebookIcon size={30} round={true}/> */}
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
            Cairo, "Qahera" how you pronounce it in Arabic, means the conqueror
            from ancient history. As an Egyptian citizen, I grew up in Cairo,
            the capital of Egypt. Only 10 miles away from the Pyramids. And yes
            it's always fascinating to see the Pyramids every day.
          </Typography>
          <Typography paragraph className="text">
            First getting to Egypt, The best time to visit is when the climate
            is nice, Egypt has four seasons but avoid going in the summer as
            it's brutal. Warm winters attract a lot of tourists. I recommend
            visiting Egypt between October and May.
            <br />
            <hr />
          </Typography>
          <Typography paragraph className="text">
            <h5 style={{ textAlign: "center" }}>3 Days Schedule in Cairo</h5>
            <strong>Day One:</strong> visit the Pyramids and the Sphinx in the
            morning, You can go inside The Great Pyramid as well. Ride a camel,
            it's an amazing experience. Before sunset, you can go see the Nile
            River, The 2nd largest river in the world, Take a boat or "Faloka"
            they call it and enjoy the view of the sunset and downtown Cairo
            with a beautiful breeze.
            <hr />
            <img src={PyramidsPic} className="image-in-blog" alt="" />
            <hr />
            <strong>Day Two:</strong> visit the Egyptian Museum in the morning,
            You'll learn more about ancient Egypt and how they started the first
            civilization on Earth and how modern in Medicine, Maths, Military,
            and more. Also, the full tomb of King Tut is in the museum, full of
            treasure and shiny items. From there, You are close to Old Cairo,
            where there are beautiful old Churches, Mosques, Temples, Roman old
            Castles. By Sunset, Visit Cairo Tower, where you can see Cairo from
            above and enjoy some dinner or a cup of Egyptian tea from one of the
            restaurants on the top of the Tower.
            <br />
            <hr />
            <img src={CairoTower} className="image-in-blog" alt="" />
            <hr />
            <strong>Day Three:</strong> visit Saladin Citadel in the morning,
            You'll be impressed by the old decorations of the Mosques in that
            area and how that Citadel used to be the Fortress to defend Cairo
            against invaders, so much culture to learn and beautiful pictures
            you can take. After, Head to Khan El Khalili. Where all the handmade
            souvenirs, silver, gold, and clothes where you'll not find anywhere
            else in the World. If you have more time and you like shopping,
            don't miss City Stars, The biggest mall in The Middle East where
            there is a lot of brands and sales.
            <hr />
            <img src={Khan} className="image-in-blog" alt="" />
            <hr />
          </Typography>

          <Typography paragraph className="text">
            <h5 style={{ textAlign: "center" }}>Tips</h5>
            Egypt has 4 seasons. <br />
            Use Uber for transportation.
            <br />
            Keep a light jacket on you all the time during spring. 
            <br />
            Don't show shiny things in crowded areas.  <br />
            You'll need to check the weather before going to each City. <br />
            Egypt is very affordable and you'll need cash in some parts. <br />
            Couchsurfing is important everywhere and very helpful in Egypt.  
            <br />
            One of the biggest Malls in the world is called City Stars in Cairo.{" "}
            <br />
            One Dollar = 17 Egyptian pounds, A good dinner for 2 in Egypt would
            vary from 1000 LE to 2000 LE in a medium class restaurant.
            <br />
          </Typography>
          <Typography></Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
