import React, { useState } from 'react';
import Post, { Form } from './PostForm';
import { List } from './PostInList';
import './SocialPosts.css';

export const Social = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    function handleAdd(post: Post) {
        setPosts(prevPosts => [...prevPosts, post]);
    }

    <Form onSubmitForm={handleAdd}/>

    return (
    <div>
        <div className="button">
            <button>New Thought</button>
        </div>
        <div className="postList">
            <List title={''} thought={''}></List>
        </div>
    </div>
    );
};