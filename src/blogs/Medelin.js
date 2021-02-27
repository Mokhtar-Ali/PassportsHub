import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Me from '../pics/painted.png'
import PyramidsPic from '../pics/pyramids.jpg'
import CairoTower from '../pics/Egypt/cairo-tower.jpg'
import Khan from '../pics/Egypt/khan.jpg'
import Medelin1 from '../pics/Colombia/Medelin1.jpg'
import {Link} from 'react-router-dom'
import '../style/blog.css'
// import { IoLogoYoutube } from 'react-icons';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon, 
  WorkplaceIcon
} from "react-share";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100vh',
    margin: '20px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9

  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Medellin() {
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
            <a href='/colombia'>Colombia</a>
          </IconButton>
        }
        title={<h4>Medellín</h4>}
        subheader="July, 2019"
      />
      <CardMedia
        className={classes.media}
        image={Medelin1}
        title="image"
      />

      <CardContent>
        <Typography className='text' variant="body2" color="textSecondary" component="p">
        Medelin, The spring all year city. The most beautiful city in South America in my opinion. Medelin is surrounded by beautiful green mountains 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
         
          {/* <a href='https://www.youtube.com/watch?v=0NjnKn63r8w' target='_blank' style={{color:'red'}}> <ion-icon name="logo-youtube"/></a> */}

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
          <Typography paragraph className='text' >
            Medellín, "Qahera" how you pronounce it in Arabic, means the Conqueror from the Ancient History. <br />
            As an Egyptian Citizen, I grew up in Medellín, Capital of Egypt. Only 10 miles away from the Pyramids. And yes it's always fascinating to see the Pyramids everyday.
          </Typography>
          <Typography paragraph className='text' >
            First getting to Egypt,
            The best time to visit is when the climate is nice, Egypt has four seasons but avoid going in the summer as its brutal, Warm winters attract a lot of tourists.
            I recommend visiting Egypt between October and May.
            <br />
            <hr />

          </Typography>
          <Typography paragraph className='text' >
            <h5 style={{ textAlign: 'center' }}>3 Days Schedule in Cairo</h5>
            <strong>Day One:</strong> Visit the Pyramids and the Sphinx in the morning, You can go inside The Great Pyramid as well. Ride a camel, its an amazing experience.
            Before Sunset You can go check the Nile River, The 2nd largest river in the world, Take a boat or "Faloka" they call it, and enjoy the view of the Sunset and downtown Cairo with a beautiful breeze.
            <hr />
            <img src={PyramidsPic} className='image-in-blog' alt='' />
            <hr />
            <strong>Day Two:</strong> Visit the Egyptian Museum in the morning, You'll learn more about ancient Egypt and how they started the first civilization on Earth and how modern in Medicine, Math, Military and more.
            From there, You are not far away from Old Cairo, where there are beautiful old Churches, Mosques, Temples, Roman old Castles.
            By Sunset, Visit Cairo Tower, where you can see Cairo from above and enjoy some dinner or a cup of Egyptian tea from one of the restaurants on the top of the Tower.
            <br />
            <hr />
            <img src={CairoTower} className='image-in-blog' alt='' />
            <hr />
            <strong>Day Three:</strong> Visit Saladin Citadel in the morning, You'll be impressed by the old decorations of the Mosques in that area and how that Citadel used to be the Fortress to defend Cairo against invadors, so many culture to learn and beautiful pictures you can take.
            After, Head to Khan El Khalili. Where all the handmade souvenirs, silver, gold and cloths where you'll not find anywhere else in the World.
            If you have more time and you like shopping, don't miss City Stars, The biggest mall in The middle East where there is a lot of brands and sales.
            <hr />
            <img src={Khan} className='image-in-blog' alt='' />
            <hr />
          </Typography>

          <Typography paragraph className='text'>
            <h5 style={{ textAlign: 'center' }}>Tips</h5>
            Egypt has 4 seasons. <br />
            Use Uber for transportation.<br />
            Keep a light jacket on you all the time during spring. <br />
            Don't show too much shiny things in crowded areas. <br />
            You'll need to check the weather before going to each City. <br />
            Egypt is very affordable and you'll need cash in some parts. <br />
            Couchsurfing is important everywhere, and very helpful in Egypt. <br />
            One of the biggest Malls in the world is called City Stars in Cairo. <br />
            One Dollar = 17 Egyptian pound, A good dinner for 2 in Egypt would vary from 1000 LE to 2000 LE in a medium class restaurant. <br />
          </Typography>
          <Typography>

          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
