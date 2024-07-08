import { Link, useLocation } from 'react-router-dom';
import Data from './dataForum.js'
import './forum.css'
import backgroundImage from '../assets/background-img.png';

function Forum(){
    return(
        <div className='forum-container container mt-4'>
            {Data.map((category, index) => (
                <div key={index} className='category-section'>
                    <h3 className='category-title'>{category.category}</h3>
                    <table className='forum-table table table-bordered'>
                        <thead>
                            <tr>
                                <th>Forum</th>
                                <th>Sujets</th>
                                <th>Messages</th>
                                <th>Dernier message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {category.threads.map((thread) => (
                                <tr key={thread.id}>
                                    <td><Link to={`/forum/thread/${thread.id}`} className='thread-link'>{thread.title}</Link></td>
                                    <td>{thread.subjects}</td>
                                    <td>{thread.messages}</td>
                                    <td>{thread.lastMessage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}

export default Forum;