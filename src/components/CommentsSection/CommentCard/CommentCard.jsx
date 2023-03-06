import "./CommentCard.scss"

const CommentCard = (props) => {
    const timeStamp = new Date(props.timestamp).toLocaleDateString('en-us')
    return (
        <div key={props.id} className={props.className}>
            <div className="comment__avatar"></div>
            <div className="comment__info">
                <div className="comment__user-info">
                    <p className="comment__user-name">{props.name}</p>
                    <p className="comment__date">{timeStamp}</p>
                </div>
                <p className="comment__description">{props.comment}</p>
            </div>
        </div>
    );

};

export default CommentCard;
