import { useState, useEffect } from "react";
import Comments from './components/Comments';
import FormContacts from './components/FormContacts';
import { Container } from '@mui/material';
import { setComments as setCommentsToLocalStorage, getComments } from "./services/comments";
import "./App.scss";

export default function App() {
    let [ comments, setComments ] = useState([]);

    const handleAddComment = (newComment) => {
        setComments(prev => [...prev, newComment]);
    }

    const removeComment = (id) => {
        setComments(comments.filter(comment => comment.id !== id));
    }

    useEffect(() => {
        setComments(getComments());
    }, []);

    useEffect(() => {
        setCommentsToLocalStorage(comments);
    }, [comments]);
    
    return (
        <Container maxWidth="xs">
            <Comments comments={comments} removeComment={removeComment} />
            <FormContacts addComment={handleAddComment} />
        </Container>
    );
}