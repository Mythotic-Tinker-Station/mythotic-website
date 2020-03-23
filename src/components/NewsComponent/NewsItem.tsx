/* This file handles all the news items that one might receive. These will cover the methods to add a news item
and display a news item. We do not want to delete any as typically news items should be kept

The data should be stored in a arry of objects and each object can be displayed.
*/

// Import the libraries required
import React from "react";

// Import other components if required

// Import data model

// Import CSS
import classes from './NewsItem.module.css'

// Interfaces required
interface NewsItemsProps {
    post_title: string
    post_content: string
    post_date: Date
    post_createdby: string
}

const NewsItem: React.FC<NewsItemsProps> = props => {
    return (
        <article className={classes.article}>
            <h1>{props.post_title}</h1>
            <div>
                <span>Author: {props.post_createdby}</span>
                <span>Date: {props.post_date}</span>
            </div>
            <div>{props.post_content}</div>
        </article>
    )
}

export default NewsItem;
