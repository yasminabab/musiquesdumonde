import './rechercher.css';
import { useState, useEffect } from 'react';
import { Button, Card, Dropdown, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { format, parseISO } from "date-fns";
import { enUS, fr, es, ko } from "date-fns/locale";
import ReactPaginate from 'react-paginate';

const Rechercher = () => {
    const {t, i18n} = useTranslation();
    const [musics, setMusics] = useState([]);
    const [filteredMusics, setFilteredMusics] = useState([]);
    const [filters, setFilters] = useState({
        format: [],
        genre: [],
        continent: [],
        language: [],
        duration: '',
    });
    const [currentPage, setCurrentPage] = useState(0);
    const [pagination, setPagination] = useState(9);
    const [sort, setSort] = useState('title');

    const musicsPerPage = pagination;

    const continentTranslation = {
        Afrique: t("afrique"),
        Asie: t("asie"),
        Europe: t("europe"),
        Amérique: t("amerique"),
        Océanie: t("oceanie")
    };

    const languageTranslations = {
        Anglais: t("anglais"),
        Français: t("francais"),
        Espagnol: t("espagnol"),
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = [
                { id: 1, title: 'Hey Oh', date: '2003-06-20', reviews: 3, format: 'Single', genre: 'R&B', continent: 'Europe', language: 'Français', duration: 3.5, artist: 'Tragédie' },
                { id: 2, title: 'Are You That Somebody', date: '1998-06-16', reviews: 5, format: 'Single', genre: 'R&B', continent: 'Amérique', language: 'Anglais', duration: 4.3, artist: 'Aaliyah' },
                { id: 3, title: 'Dilemma', date: '2002-06-25', reviews: 4, format: 'Single', genre: 'R&B', continent: 'Amérique', language: 'Anglais', duration: 4.5, artist: 'Kelly Rowland & Nelly' },
                { id: 4, title: 'Let Me Love You', date: '2004-10-12', reviews: 5, format: 'Single', genre: 'R&B', continent: 'Amérique', language: 'Anglais', duration: 4.2, artist: 'Mario' },
                { id: 5, title: 'U Got It Bad', date: '2001-08-21', reviews: 4, format: 'Single', genre: 'R&B', continent: 'Amérique', language: 'Anglais', duration: 4.4, artist: 'Usher' },
                { id: 6, title: 'Waving Flag', date: '2009-01-30', reviews: 5, format: 'Single', genre: 'Hip-Hop', continent: 'Afrique', language: 'Anglais', duration: 3.4, artist: 'K\'NAAN' },
                { id: 7, title: 'Volare', date: '1989-06-01', reviews: 4, format: 'Single', genre: 'Latin', continent: 'Europe', language: 'Espagnol', duration: 3.2, artist: 'Gipsy Kings' },
                { id: 8, title: 'Viva la vida', date: '2008-05-12', reviews: 3, format: 'Single', genre: 'Alternative', continent: 'Europe', language: 'Anglais', duration: 4.0, artist: 'Coldplay' },
                { id: 9, title: 'Waka Waka', date: '2010-05-07', reviews: 4, format: 'Single', genre: 'Pop', continent: 'Amérique', language: 'Espagnol', duration: 3.2, artist: 'Shakira' },
                { id: 10, title: 'We Are The Champions', date: '1977-10-07', reviews: 3, format: 'Single', genre: 'Rock', continent: 'Europe', language: 'Anglais', duration: 3.1, artist: 'Queen' },
                { id: 11, title: 'Somewhere Over The Rainbow', date: '1993-11-23', reviews: 5, format: 'Single', genre: 'Folk', continent: 'Océanie', language: 'Anglais', duration: 5.1, artist: 'Israel Kamakawiwo\'ole' },
                { id: 12, title: 'Billie Jean', date: '1982-11-30', reviews: 4, format: 'Single', genre: 'Pop', continent: 'Amérique', language: 'Anglais', duration: 4.5, artist: 'Michael Jackson' },
                { id: 13, title: 'I will always love you', date: '1992-11-03', reviews: 5, format: 'Single', genre: 'Soul', continent: 'Amérique', language: 'Anglais', duration: 4.3, artist: 'Whitney Houston' },
                { id: 14, title: 'My Heart Will Go On', date: '1997-11-18', reviews: 4, format: 'Single', genre: 'Pop', continent: 'Amérique', language: 'Anglais', duration: 4.4, artist: 'Celine Dion' },
                { id: 15, title: 'Je t\'aime', date: '1996-03-04', reviews: 5, format: 'Single', genre: 'Pop', continent: 'Europe', language: 'Français', duration: 4.2, artist: 'Lara Fabian' },
                { id: 16, title: 'Thriller', date: '1982-11-30', reviews: 5, format: 'LP', genre: 'Pop', continent: 'Amérique', language: 'Anglais', duration: 42.19, artist: 'Michael Jackson' },
                { id: 17, title: 'Back to Black', date: '2006-10-27', reviews: 5, format: 'LP', genre: 'Soul', continent: 'Europe', language: 'Anglais', duration: 34.00, artist: 'Amy Winehouse' },
            ];
            setMusics(data);
            setFilteredMusics(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [filters, sort, currentPage, musics]);


    const applyFilters = () => {
        let updatedMusics = [...musics];

        if (filters.format.length > 0) {
            updatedMusics = updatedMusics.filter(music => filters.format.includes(music.format));
        }
        if (filters.genre.length > 0) {
            updatedMusics = updatedMusics.filter(music => filters.genre.includes(music.genre));
        }
        if (filters.continent.length > 0) {
            updatedMusics = updatedMusics.filter(music => filters.continent.includes(music.continent));
        }
        if (filters.language.length > 0) {
            updatedMusics = updatedMusics.filter(music => filters.language.includes(music.language));
        }
        if (filters.duration) {
            updatedMusics = updatedMusics.filter(music => {
                if(filters.duration === '<2') return music.duration < 2;
                if(filters.duration === '2-4') return music.duration >= 2 && music.duration <= 4;
                if(filters.duration === '4-6') return music.duration >= 4 && music.duration <= 6;
                if(filters.duration === '>6') return music.duration > 6;
                return true; 
            });
         }

         updatedMusics.sort((a, b) => {
            if (sort === 'title') return a.title.localeCompare(b.title);
            if (sort === 'date') return new Date(b.date) - new Date(a.date);
            if (sort === 'reviews') return b.reviews - a.reviews;
            return 0;
         });
         setFilteredMusics(updatedMusics);
    };

    const handleFilterChange = (e) => {
        const { name, value, checked } = e.target;
        if (Array.isArray(filters[name])) {
            setFilters(prev => ({
                ...prev ,
                [name]: checked ? [...prev[name], value] : prev[name].filter(item => item !== value)     
            }));    
        } else {
            setFilters({ ...filters, [name]: value}); 
        }
        setCurrentPage(0);
    };

    const handleSortChange = (selectedSort) => {
        setSort(selectedSort);
        setCurrentPage(0);
    };

    const handlePaginationChange = (selectedPagination) => {
        setPagination(parseInt(selectedPagination));
        setCurrentPage(0);
    };

    const handlePageClick = ({selected}) => {
        setCurrentPage(selected);
    };

    const resetFilters = () => {
        setFilters({
            format: [],
            genre: [],
            continent: [],
            language: [],
            duration: '',
        });
        setFilteredMusics(musics);
        setCurrentPage(0);
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
        let formatString;
        switch (i18n.language) {
            case "en":
                formatString = "MM/dd/yyyy";                 
                break;
            case "es":
                formatString = "dd/MM/yyyy";                 
                break;
            case "ko":
                formatString = "yyyy년 M월 d일"; 
                break;
            default:
                formatString = "dd/MM/yyyy";                 
                break; 
        }
        return format(date, formatString, { locale });
    };

    const formatNumber = (number) => {
        return new Intl.NumberFormat(i18n.language).format(number);
    };

    const filteredMusicsForCurrentPage = filteredMusics.slice(currentPage * musicsPerPage, (currentPage + 1) * musicsPerPage);

    return(
        <div className='rechercher-container'>
            <div className='filters'>
                <h3>{t('selection-de-musique-0')}</h3>
                <Form>
                    <Form.Group controlId="format">
                        <Form.Label>{t('format-de-musique')}</Form.Label>
                        <Form.Check type="checkbox" label="LP" value="LP" name="format" checked={filters.format.includes('LP')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="EP" value="EP" name="format" checked={filters.format.includes('EP')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Single" value="Single" name="format" checked={filters.format.includes('Single')} onChange={handleFilterChange}/>
                    </Form.Group>
                    <Form.Group controlId="genre">
                        <Form.Label>{t('genre-de-musique')}</Form.Label>
                        <Form.Check type="checkbox" label="R&B" value="R&B" name="genre" checked={filters.genre.includes('R&B')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Hip-Hop" value="Hip-Hop" name="genre" checked={filters.genre.includes('Hip-Hop')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Latin" value="Latin" name="genre" checked={filters.genre.includes('Latin')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Alternative" value="Alternative" name="genre" checked={filters.genre.includes('Alternative')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Pop" value="Pop" name="genre" checked={filters.genre.includes('Pop')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Rock" value="Rock" name="genre" checked={filters.genre.includes('Rock')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Folk" value="Folk" name="genre" checked={filters.genre.includes('Folk')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Soul" value="Soul" name="genre" checked={filters.genre.includes('Soul')} onChange={handleFilterChange}/>
                    </Form.Group>
                    <Form.Group controlId="continent">
                        <Form.Label>{t('continent')}</Form.Label>
                        <Form.Check type="checkbox" label={t('afrique-0')} value="Afrique" name="continent" checked={filters.continent.includes('Afrique')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label={t('asie')} value="Asie" name="continent" checked={filters.continent.includes('Asie')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label={t('europe')} value="Europe" name="continent" checked={filters.continent.includes('Europe')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label={t('amerique')} value="Amérique" name="continent" checked={filters.continent.includes('Amérique')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label={t('oceanie')} value="Océanie" name="continent" checked={filters.continent.includes('Océanie')} onChange={handleFilterChange}/>
                    </Form.Group>
                    <Form.Group controlId="language">
                        <Form.Label>{t('langue')}</Form.Label>
                        <Form.Check type="checkbox" label={t('anglais')} value="Anglais" name="language" checked={filters.language.includes('Anglais')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label={t('francais')} value="Français" name="language" checked={filters.language.includes('Français')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label={t('espagnol')} value="Espagnol" name="language" checked={filters.language.includes('Espagnol')} onChange={handleFilterChange}/>
                    </Form.Group>
                    <Form.Group controlId="duration">
                        <Form.Label>{t('duree')}</Form.Label>
                        <Form.Check type="radio" label={t('less-than-2-min')} value="<2" name="duration" checked={filters.duration === '<2'} onChange={handleFilterChange}/>
                        <Form.Check type="radio" label={t('2-a-4-min')} value="2-4" name="duration" checked={filters.duration === '2-4'} onChange={handleFilterChange}/>
                        <Form.Check type="radio" label={t('4-a-6-min')} value="4-6" name="duration" checked={filters.duration === '4-6'} onChange={handleFilterChange}/>
                        <Form.Check type="radio" label={t('greater-than-6-min')} value=">6" name="duration" checked={filters.duration === '>6'} onChange={handleFilterChange}/>
                    </Form.Group>
                    <Button variant='secondary' onClick={resetFilters}>{t('reinitialiser-les-filtres')}</Button>
                </Form>
            </div>
            <div className='results'>
                <div className='results-header'>
                    <div className='left'>
                        <Dropdown onSelect={handlePaginationChange}>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                {pagination} {t('chansons-par-page')}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey={9}>{t('9-chansons-par-page')}</Dropdown.Item>
                                <Dropdown.Item eventKey={3}>{t('3-chansons-par-page')}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='center'>
                        <Dropdown onSelect={handleSortChange}>
                            <Dropdown.Toggle variant='secondary' id="dropdown-basic">
                                {t('trier-par')}: {sort === "title" ? t("a-z") : sort === "date" ? t("date-0") : t("avis-0")}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="title">{t('a-z')}</Dropdown.Item>
                                <Dropdown.Item eventKey="date">{t('date-0')}</Dropdown.Item>
                                <Dropdown.Item eventKey="reviews">{t('avis-0')}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='right'>
                        <ReactPaginate 
                            previousLabel={t('precedent-2')}
                            nextLabel={t('suivant-2')}
                            breakLabel="..."
                            pageCount={Math.ceil(filteredMusics.length / musicsPerPage)}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                            onPageChange={handlePageClick}
                            containerClassName='pagination'
                            activeClassName='active'
                            forcePage={currentPage}
                            disabledClassName='disabled'
                        />
                    </div>
                </div>
            <div className='music-list'>
                {filteredMusicsForCurrentPage.length > 0 ? (
                    filteredMusicsForCurrentPage.map(music => (
                        <Card key={music.id} className='music-card'>
                            <Card.Body>
                                <Card.Title>{music.title}</Card.Title>
                                <Card.Text>
                                    <strong>{t('artiste')}</strong> {music.artist}<br />
                                    <strong>{t('date')}</strong> {formatDate(music.date)}<br />
                                    <strong>{t('format')}</strong> {music.format}<br />
                                    <strong>{t('genre')}</strong> {music.genre}<br />
                                    <strong>{t('continent-0')}</strong> {continentTranslation[music.continent]}<br />
                                    <strong>{t('langue-0')}</strong> {languageTranslations[music.language]}<br />
                                    <strong>{t('duree-0')}</strong> {formatNumber(music.duration)}<br />
                                    <strong>{t('avis')}</strong> {formatNumber(music.reviews)}<br />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <p className='nothing'>{t('pas-de-chanson-trouvee-en-lien-avec-les-filtres-selectionnes')}</p>
                )}
            </div>
        </div>
    </div>
    );
};

export default Rechercher;