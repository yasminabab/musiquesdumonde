import { Link, useLocation } from 'react-router-dom';
import Data from './dataForum.js'
import './forum.css'
import backgroundImage from '../assets/background-img.png';
import { useTranslation } from 'react-i18next';
import { format, parse, parseISO } from "date-fns";
import { enUS, fr, es, ko } from "date-fns/locale";

function Forum(){
    const {t, i18n} = useTranslation();

    const locales = {
        fr: fr, 
        en: enUS, 
        es: es, 
        ko: ko,
    };

    const getDateLocale = () => {
        switch (i18n.language) {
            case "en":
                return enUS; 
            case "es":
                return es; 
            case "ko":
                return ko; 
            default:
                return fr;                                                 
        }
    };

    const formatDate = (dateString) => {
        const locale = getDateLocale();
        const date = parseISO(dateString);
        const formatString = i18n.language === "ko" ? "yyyy년 M월 d일 a h:mm" : "Pp";
        return format(date, formatString, { locale });
    };

    const formatNumber = (number) => {
        return new Intl.NumberFormat(i18n.language).format(number);
    };

    return(
        <div className='forum-container container mt-4'>
            {Data.map((category, index) => (
                <div key={index} className='category-section'>
                    <h3 className='category-title'>{t(category.category)}</h3>
                    <table className='forum-table table table-bordered'>
                        <thead>
                            <tr>
                                <th>{t('forum-0')}</th>
                                <th>{t('sujets')}</th>
                                <th>{t('messages-0')}</th>
                                <th>{t('dernier-message')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {category.threads.map((thread) => (
                                <tr key={thread.id}>
                                    <td><Link to={`/forum/thread/${thread.id}`} className='thread-link'>{t(thread.title)}</Link></td>
                                    <td>{formatNumber(thread.subjects)}</td>
                                    <td>{formatNumber(thread.messages)}</td>
                                    <td>{formatDate(thread.lastMessage)}</td>
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