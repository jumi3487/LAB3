import { useState } from "react";

export default function NewsCard({title, author, content, image, link}) {
    const [isVisible, setIsVisible] = useState(true);

    const closeCard = () => {
        setIsVisible(false);
    }

    if (!isVisible) {
        return null;
    }

    return (
        <div className="story">
            <span className="delete" onClick={closeCard}>x</span>
            <div className="story_header">
                <div className="story_image">
                    <img src={image} alt="News Thumbnail" />
                </div>
                <div>
                    <h1>
                        <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                    </h1>
                    <p className="story_creator">By: {author}</p>
                </div>
            </div>
            <p className="content">{content}</p>
        </div>
    )
}