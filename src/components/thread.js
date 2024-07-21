import './thread.css';
import { useParams } from "react-router-dom";
import { useState } from "react";
import Data from './dataForum.js';
import Message from './message.js';
import { useTranslation } from 'react-i18next';
import Breadcrumb from './breadcrumb.js';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';

function Thread(){
    const {t} = useTranslation();
    const { id } = useParams();
    const threadId = parseInt(id, 10);
    const thread = Data.flatMap(category => category.threads).find(t => t.id === threadId);
    const currentUser = 3;

    const initialMessages = {
        1: [
            { id: 1, text: "1-1", likes: 12599, timestamp: "2014-01-20T10:00:00", owner: 1, translated: true},
            { id: 2, text: "1-2", likes: 9999, timestamp: "2014-01-20T10:05:43", owner: 2, translated: true}
        ],
        2: [
            { id: 1, text: "2-1", likes: 1155, timestamp:"2019-06-16T23:05:07", owner: 1, translated: true},
            { id: 2, text: "2-2", likes: 2589, timestamp:"2014-08-29T09:25:17", owner: 2, translated: true}
        ],
        3: [
            { id: 1, text: "3-1", likes: 158, timestamp:"2024-05-15T10:00:00", owner: 1, translated: true},
            { id: 2, text: "3-2", likes: 999, timestamp:"2024-07-01T08:28:18", owner: 2, translated: true}
        ],
        4: [
            { id: 1, text: "4-1", likes: 597, timestamp:"2024-04-28T17:52:43", owner: 1, translated: true},
            { id: 2, text: "4-2", likes: 148, timestamp:"2024-04-28T20:55:02", owner: 2, translated: true}
        ],
        5: [
            { id: 1, text: "5-1", likes: 4650, timestamp:"2015-06-22T12:53:48", owner: 1, translated: true},
            { id: 2, text: "5-2", likes: 3306, timestamp:"2015-06-22T19:44:27", owner: 2, translated: true}
        ],
        6: [
            { id: 1, text: "6-1", likes: 410, timestamp:"2018-07-08T10:15:52", owner: 1, translated: true},
            { id: 2, text: "6-2", likes: 585, timestamp:"2019-06-16T23:05:07", owner: 2, translated: true}
        ],
        7: [
            { id: 1, text: "7-1", likes: 3590, timestamp:"2018-07-24T14:09:38", owner: 1, translated: true},
            { id: 2, text: "7-2", likes: 6759, timestamp:"2020-02-15T13:21:31", owner: 2, translated: true}
        ],
        8: [
            { id: 1, text: "8-1", likes: 1772, timestamp:"2017-12-15T01:54:12", owner: 1, translated: true},
            { id: 2, text: "8-2", likes: 1301, timestamp:"2019-11-29T14:23:09", owner: 2, translated: true}
        ],
        9: [
            { id: 1, text: "9-1", likes: 2634, timestamp:"2021-07-29T06:45:02", owner: 1, translated: true},
            { id: 2, text: "9-2", likes: 1319, timestamp:"2022-03-17T19:08:21", owner: 2, translated: true}
        ],
        10: [
            { id: 1, text: "10-1", likes: 7826, timestamp:"2016-10-05T04:54:08", owner: 1, translated: true},
            { id: 2, text: "10-2", likes: 470, timestamp:"2017-07-19T18:21:02", owner: 2, translated: true}
        ],
    }

    const [messages, setMessages] = useState(initialMessages[threadId] || []);
    const [newMessage, setNewMessage] = useState('');
    const [likedMessages, setLikedMessages] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [target, setTarget] = useState(null);

    const handleNewMessageChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleNewMessageSubmit = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            setShowPopup(true);
            setTarget(e.currentTarget);
        }
    };
    
    const handleLike = (messageId, shouldLike) => {
        setMessages(messages.map(msg =>
            msg.id === messageId ? { ...msg, likes: shouldLike ? msg.likes + 1 : msg.likes - 1 } : msg 
        ));
        setLikedMessages(prevLikedMessages =>
            shouldLike ? [...prevLikedMessages, messageId] : prevLikedMessages.filter(id => id !== messageId)
        );
    };

    const handleDelete = (messageId) => {
        setMessages(messages.filter(msg => msg.id !== messageId));
    };

    const handlePopupHide = () => {
        setShowPopup(false);
    }

    const handlePopupConfirm = () => {
        const date = new Date().toISOString();
        setMessages([...messages, {id: messages.length + 1, text: newMessage, likes: 0, timestamp: date, owner: currentUser, translated: false}]);
        setNewMessage("");
        setShowPopup(false);
    }

    if (!thread) {
        return <div>{t('il-ny-a-pas-de-fil-de-discussion')}</div>
    }

    const paths = [
        { to: '/accueil', label: 'Accueil'},
        { to: '/forum', label: 'Forum'},
        { to: `/forum/thread/${thread.id}`, label: t(thread.title)},
    ];

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">{t('confirmation-1')}</Popover.Header>
            <Popover.Body>
                <strong className='popover-title'>{t('vous-etes-sur-le-point-de-publier-un-message')}</strong>
                <br /> <span className='popover-text'>{t('voulez-vous-continuer-1')} </span>
                <div className='mt-2'>
                    <Button className='yes-btn' variant="danger" onClick={handlePopupConfirm}>{t('oui')}</Button>{" "}
                    <Button className='no-btn' variant="secondary" onClick={handlePopupHide}>{t('non')}</Button>{" "}
                </div>
            </Popover.Body>
        </Popover>
    );

    return(
        <div className="container mt-4">
            <Breadcrumb paths={paths}/>
            <h3 className='message-title'>{t(thread.title)}</h3>
            <div>
                {messages.map(message => (
                    <Message 
                        key={message.id} 
                        message={{ ...message, text: message.translated ? t(`messages.${message.text}`) : message.text}} 
                        onLike={handleLike} 
                        likedMessages={likedMessages}
                        onDelete={handleDelete}
                        isOwner={message.owner === currentUser}
                    />
                ))}
            </div>
            <form onSubmit={handleNewMessageSubmit}>
                <div className="form-group">
                    <label htmlFor="newMessage" className='new-message'>{t('nouveau-message')}</label>
                    <textarea
                        id="newMessage"
                        className="form-control"
                        value={newMessage}
                        onChange={handleNewMessageChange} 
                    />
                </div>
                <OverlayTrigger
                    show={showPopup}
                    target={target}
                    placement="top"
                    overlay={popover}
                >
                    <button type="submit" className="publish-btn btn btn-primary mt-2">{t('publier')}</button>
                </OverlayTrigger>
            </form>
        </div>
    )
}
export default Thread;
