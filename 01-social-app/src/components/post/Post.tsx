import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Checkbox,
	IconButton,
	Typography
} from "@mui/material";

export interface PostData {
  user: string;
  userColor: string;
  date: string;
  text: string;
  image: string;
  imageAlt: string;
}

type Props = PostData;

export default function Post({
  user,
  userColor,
  date,
  text,
  image,
  imageAlt,
}: Props) {
  return (
    <Card sx={{ margin: 3 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: userColor }} aria-label={user}>
            {user[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={user}
        subheader={date}
      />
      <CardMedia component="img" height="350" image={image} alt={imageAlt} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "error.main" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}
