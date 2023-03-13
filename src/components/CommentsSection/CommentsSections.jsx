import "./CommentsSections.scss"
import CommentCard from "../CommentCard/CommentCard";
import CommentForm from "../CommentForm/CommentForm";

const CommentsSection = ({data}) => {
    //Setting Up CommentCard Component for Parent CommentsSection
    let commentCards = data.comments.map((commentCard, i) => {
        const className = i === data.comments.length - 1 ? "comment--first comment" : "comment";
        return(
            <CommentCard key={commentCard.id} name={commentCard.name} comment={commentCard.comment} timestamp={commentCard.timestamp} className={className}/>
        );
    });
    //CommentsSection Component Return
    return(
        <div className="comments-section">
            <CommentForm />
            {commentCards}
        </div>
    );

};

export default CommentsSection;