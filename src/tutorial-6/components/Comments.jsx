import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, IconButton } from '@mui/material';
import { convertTime } from "../helpers";
import CloseIcon from '@mui/icons-material/Close';

export default function Comments({ comments, removeComment }) {
  return (
    <List className="comments">
        <Typography variant="h4" component="h4" sx={{ fontSize: 20 }}>Отзывы:</Typography>
        {
            comments.length
            ?
            comments.map(comment => (
            <ListItem 
                className="comment"
                key={comment.id}
                secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => removeComment(comment.id)}>
                      <CloseIcon />
                    </IconButton>
                }>
                <ListItemAvatar>
                    <Avatar src="https://picsum.photos/200" />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <div className="comment-head">
                            <span className="comment-title">{comment.fullName}</span>
                            <Typography component="span" className="comment-date">{convertTime(comment.createdAt)}</Typography>
                        </div>
                    }
                    secondary={
                    <>
                        {comment.text}
                    </>
                    } />
            </ListItem>
            ))
        : <Typography component="span" className="comment-date">Комментариев нет</Typography>}
    </List>
  );
}