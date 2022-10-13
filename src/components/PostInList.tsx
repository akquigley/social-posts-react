import React, { useState } from 'react';
import Post, { Form } from '../components/PostForm';

export const List = ({title, thought}: Post) => {

    const [post, setPost] = useState<Post[]>([
        {title: 'Grand Circus', thought: 'doing good'}
    ]);

    const onDelete = () => {
        
    }

    return (
        <div className="list">
            <table>
                {post.map((post) => (
                <tr key={post.title}>
                    <td>{post.title}</td>
                    <td>{post.thought}</td>
                    <td>
                        <button onClick={onDelete}>Delete</button>
                    </td>
                </tr>
                ))};
            </table>
        </div>
    );
};