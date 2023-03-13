import "./CommentCard.scss"

const CommentCard = ({id, className, name, comment, timestamp}) => {
    const timeStamp = new Date(timestamp).toLocaleDateString('en-us');
    //Comment Card Component
    return (
        <div key={id} className={className}>
            <div className="comment__avatar"></div>
            <div className="comment__info">
                <div className="comment__user-info">
                    <p className="comment__user-name">{name}</p>
                    <p className="comment__date">{timeStamp}</p>
                </div>
                <p className="comment__description">{comment}</p>
            </div>
        </div>
    );

};

export default CommentCard;
