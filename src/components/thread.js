import './thread.css';
import { useParams } from "react-router-dom";
import { useState } from "react";
import Data from './dataForum.js';
import Message from './message.js';
import Breadcrumb from './breadcrumb.js';

function Thread(){
    const { id } = useParams();
    const threadId = parseInt(id, 10);
    const thread = Data.flatMap(category => category.threads).find(t => t.id === threadId);

    const initialMessages = {
        1: [
            { id: 1, text: "Bonjour à tous ! Avant de commencer à participer, veuillez lire attentivement les règles du forum pour garantir une expérience agréable pour tous. Merci !", likes: 12599, timestamp:"2014-01-20 10:00:00"},
            { id: 2, text: "N'oubliez pas de rester respectueux et courtois dans vos échanges. Toute violation des règles sera sanctionnée.", likes: 12589, timestamp:"2014-01-20 10:05:43"}
        ],
        2: [
            { id: 1, text: "Vous avez une question sur le fonctionnement du forum ? Consultez notre FAQ pour trouver rapidement des réponses.", likes: 1155, timestamp:"2019-06-16 23:05:07"},
            { id: 2, text: "Si votre question ne figure pas dans la FAQ, n'hésitez pas à la poser ici et notre communauté se fera un plaisir de vous aider.", likes: 2589, timestamp:"2014-08-29 09:25:17"}
        ],
        3: [
            { id: 1, text: "Nouveau ! Découvrez les dernières mises à jour du site dans cette section. Votre feedback est précieux pour nous.", likes: 158, timestamp:"2024-05-15 10:00:00"},
            { id: 2, text: "Restez informés des nouvelles fonctionnalités et des annonces importantes en suivant ce fil de discussion.", likes: 692, timestamp:"2024-07-01 08:28:18"}
        ],
        4: [
            { id: 1, text: "Rencontrez-vous des problèmes techniques ? Signalez-les ici pour que notre équipe puisse les résoudre rapidement.", likes: 597, timestamp:"2024-04-28 17:52:43"},
            { id: 2, text: "Nous sommes toujours à l'écoute de vos suggestions pour améliorer le site. Partagez vos idées dans cette section.", likes: 148, timestamp:"2024-04-28 20:55:02"}
        ],
        5: [
            { id: 1, text: "Quelles sont vos impressions sur les nouveaux albums sortis cette semaine ? Partagez vos avis et vos morceaux préférés.", likes: 4650, timestamp:"2015-06-22 12:53:48"},
            { id: 2, text: "Vous avez découvert une nouvelle chanson ou un nouvel artiste ? Faites-nous part de vos découvertes ici.", likes: 3306, timestamp:"2015-06-22 19:44:27"}
        ],
        6: [
            { id: 1, text: "Vous cherchez des recommandations musicales ? Indiquez vos genres préférés et nous vous proposerons des pépites.", likes: 410, timestamp:"2018-07-08 10:15:52"},
            { id: 2, text: "Partagez vos critiques constructives sur les derniers albums ou concerts auxquels vous avez assisté.", likes: 585, timestamp:"2019-06-16 23:05:07"}
        ],
        7: [
            { id: 1, text: "Discutons des grands mouvements musicaux qui ont marqué l'histoire. Quel est votre courant préféré et pourquoi ?", likes: 3590, timestamp:"2018-07-24 14:09:38"},
            { id: 2, text: "Avez-vous des anecdotes intéressantes sur des artistes ou des événements musicaux historiques ? Racontez-les ici.", likes: 6759, timestamp:"2020-02-15 13:21:31"}
        ],
        8: [
            { id: 1, text: "Quels festivals prévoyez-vous de faire cet été ? Partagez vos plans et vos attentes.", likes: 1772, timestamp:"2017-12-15 01:54:12"},
            { id: 2, text: "Avez-vous assisté à un concert récemment ? Racontez-nous votre expérience et les moments inoubliables.", likes: 1301, timestamp:"2019-11-29 14:23:09"}
        ],
        9: [
            { id: 1, text: "Vous êtes musicien ou compositeur ? Partagez vos créations avec la communauté et recevez des retours constructifs.", likes: 2634, timestamp:"2021-07-29 06:45:02"},
            { id: 2, text: "Découvrez les œuvres des autres membres du forum et soutenez leurs talents en laissant des commentaires.", likes: 1319, timestamp:"2022-03-17 19:08:21"}
        ],
        10: [
            { id: 1, text: "Envie de discuter d'autre chose que de musique ? Cette section est dédiée à vos sujets divers et variés.", likes: 7826, timestamp:"2016-10-05 04:54:08"},
            { id: 2, text: "Partagez vos passions ou des sujets d'actualité qui vous tiennent à cœur dans cette section.", likes: 470, timestamp:"2017-07-19 18:21:27"}
        ],
    }

    const [messages, setMessages] = useState(initialMessages[threadId] || []);
    const [newMessage, setNewMessage] = useState('');
    const [likedMessages, setLikedMessages] = useState([]);

    const handleNewMessageChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleNewMessageSubmit = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            const currentTimestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
            setMessages([...messages, { id: messages.length +1, text: newMessage, likes: 0, timestamp: currentTimestamp}]);
            setNewMessage('');
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

    if (!thread) {
        return <div>Il n'y a pas de fil de discussion.</div>
    }

    const paths = [
        { to: '/accueil', label: 'Accueil'},
        { to: '/forum', label: 'Forum'},
        { to: `/forum/thread/${thread.id}`, label: thread.title},
    ];

    return(
        <div className="container mt-4">
            <Breadcrumb paths={paths}/>
            <h3 className='message-title'>{thread.title}</h3>
        <div>
            {messages.map(message => (
                <Message key={message.id} message={message} onLike={handleLike} likedMessages={likedMessages}/>
            ))}
        </div>
        <form onSubmit={handleNewMessageSubmit}>
            <div className="form-group">
                <label htmlFor="newMessage" className='new-message'>Nouveau Message</label>
                <textarea
                id="newMessage"
                className="form-control"
                value={newMessage}
                onChange={handleNewMessageChange} 
                />
            </div>
            <button type="submit" className="publish-btn btn btn-primary mt-2">Publier</button>
        </form>
        </div>
    )
}
export default Thread;
