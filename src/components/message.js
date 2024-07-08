import './message.css';

function Message({ message, onLike, likedMessages}){
    const isLiked = likedMessages.includes(message.id);

    const handleLikeClick = () => {
        onLike(message.id, !isLiked);
    };

    return(
        <div className='message-container'>
            <div className='message-header'>
                <p>Posté le {message.timestamp}</p>
            </div>
            <div className='message-content'>
                <p>{message.text}</p>
            </div>
            <div className='message-likes'>
                <button
                    className='btn btn-link'
                    onClick={handleLikeClick}
                >
                    {isLiked ? '❤️' : '🤍'}
                </button>
                <span>{message.likes}</span>
            </div>
        </div>
    );
}

export default Message;

