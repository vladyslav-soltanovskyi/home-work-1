import { useReducer } from 'react';
import { TextField, Button, Typography } from '@mui/material';

function FormContacts({ addComment }) {
    const [comment, dispatchComment] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            fullName: "",
            email: "",
            text: ""
        }
      );

    const changeValue = (e) => {
        dispatchComment({ [e.target.name]: e.target.value.trim() });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let isAllFieldsFilled = Object.values(comment).every(field => !!field);
        
        if (!isAllFieldsFilled) {
            return;
        }

        const newComment = {...comment, createdAt: new Date(), id: Date.now() };
        
        addComment(newComment);

        Object.keys(comment).forEach((key) => {
            dispatchComment({ [key]: "" });
        });
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <Typography variant="h6" component="h6" sx={{ fontSize: 24 }}>Обратная связь:</Typography>
            <div className="form-group">
                <TextField 
                    fullWidth
                    label="Имя"
                    className="form-input"
                    name="fullName"
                    value={comment.fullName}
                    onChange={changeValue} />
            </div>
            <div className="form-group">
                <TextField 
                    fullWidth
                    label="Почта"
                    className="form-input"
                    name="email"
                    value={comment.email}
                    onChange={changeValue} />
            </div>
            <div className="form-group">
                <TextField 
                    multiline
                    fullWidth label="Текст..."
                    rows={4}
                    className="form-textarea"
                    name="text"
                    value={comment.text}
                    onChange={changeValue} />
            </div>
            <div className="form-group">
                <Button
                    variant="contained"
                    className="form-button"
                    fullWidth
                    type="submit">Отправить</Button>
            </div>
        </form>
    );
}

export default FormContacts;