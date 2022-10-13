import React, { ChangeEvent, FormEvent, useState } from 'react';
import './PostForm.css';

export default interface Post {
    title: string;
    thought: string;
};

interface Props {
    onSubmitForm: (post: Post) => void; //CALLBACK PROP
}

export const Form = ({ onSubmitForm }: Props) => {
    const [ title, setTitle ] = useState("");
    const [ thought, setThought ] = useState("");

    function handleSubmit(e:FormEvent) {
        e.preventDefault();
        onSubmitForm({ title, thought });
    }

    const onClose = () => {

    }

    return (
        <form>
            <label>Title
                <input 
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}/>
            </label>
            <label>Thought
                <input 
                type="text"
                value={thought}
                onChange={e => setThought(e.target.value)}/>
            </label>
            <input type="submit">Add Post</input>
        </form>
    );
};