import "./CommentForm.scss"


const CommentForm = () =>  {
    //Comment Form Component
    return (
        <div className="comment-form__container">
            <div className="comment-form__avatar"></div>
            <form className="comment-form">
                <div className="comment-form__input-container">
                    <label className="comment-form__label" htmlFor="comment">JOIN THE CONVERSATION</label>
                    <input className="comment-form__input" name="comment" placeholder="Add a new comment"></input>
                </div>
                <button className="comment-form__btn">COMMENT</button>
            </form>
        </div>
    );

};

export default CommentForm;