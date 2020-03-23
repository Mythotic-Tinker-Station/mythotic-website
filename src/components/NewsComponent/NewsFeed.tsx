/* This file handles all the news items that one might receive. These will cover the methods to add a news item
and display a news item. We do not want to delete any as typically news items should be kept

The data should be stored in a arry of objects and each object can be displayed.
*/

// Import the libraries required
import React, { Component } from "react";
import Axios from "axios";

// Import other components if required
import NewsItem from './NewsItem';

// Import data model
import { NewsData } from "../../model/NewsData";

// Interfaces required
interface NewsFeedProps {
	childern?: any;
}

class NewsFeed extends Component<NewsFeedProps, NewsData> {
	constructor(props: NewsFeedProps) {
		super(props);

		this.state = { newsObj: [] };
	}

	async componentDidMount() {
		let request = await Axios.get("http://localhost:9000/api/news");
		let newsObj = await request.data;
		this.setState({ newsObj });
	}

	render() {
        const NewsItems = this.state.newsObj.map(Items => {
            return <NewsItem key={Items.post_id} post_title={Items.post_title} post_content={Items.post_content} post_date={Items.post_date} post_createdby={Items.post_createdby} />
        })

		return (
            <div>
                <section>
                    {NewsItems}
                </section>
            </div>
        )
	}
}

export default NewsFeed;