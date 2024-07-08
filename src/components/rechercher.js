import './rechercher.css';
import { useState, useEffect } from 'react';
import { Button, Card, Dropdown, DropdownToggle, Form } from 'react-bootstrap';

const Rechercher = () => {
    const [musics, setMusics] = useState([]);
    const [filteredMusics, setFilteredMusics] = useState([]);
    const [filters, setFilters] = useState({
        format: [],
        genre: [],
        continent: [],
        language: [],
        duration: '',
    });
    const [pagination, setPagination] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);
    const [sort, setSort] = useState('title');

    useEffect(() => {
        const fetchData = async () => {
            const data = [
                { id: 1, title: 'Hey oh - Tragédie', date: '2003-06-20', reviews: 3, format: 'Single', genre: 'R&B', continent: 'Europe', language: 'Français', duration: 3.5, year: 2003, artist: 'Tragédie' },
                { id: 2, title: 'Are You That Somebody - Aaliyah', date: '1998-06-16', reviews: 5, format: 'Single', genre: 'R&B', continent: 'Amérique', language: 'Anglais', duration: 4.3, year: 1998, artist: 'Aaliyah' },
                { id: 3, title: 'Dilemma - Kelly Rowland & Nelly', date: '2002-06-25', reviews: 4, format: 'Single', genre: 'R&B', continent: 'Amérique', language: 'Anglais', duration: 4.5, year: 2002, artist: 'Kelly Rowland & Nelly' },
                { id: 4, title: 'Let Me Love You - Mario', date: '2004-10-12', reviews: 5, format: 'Single', genre: 'R&B', continent: 'Amérique', language: 'Anglais', duration: 4.2, year: 2004, artist: 'Mario' },
                { id: 5, title: 'U Got It Bad - Usher', date: '2001-08-21', reviews: 4, format: 'Single', genre: 'R&B', continent: 'Amérique', language: 'Anglais', duration: 4.4, year: 2001, artist: 'Usher' },
                { id: 6, title: 'Waving Flag - K\'NAAN', date: '2009-01-30', reviews: 5, format: 'Single', genre: 'Hip-Hop', continent: 'Afrique', language: 'Anglais', duration: 3.4, year: 2009, artist: 'K\'NAAN' },
                { id: 7, title: 'Volare - Gipsy Kings', date: '1989-06-01', reviews: 4, format: 'Single', genre: 'Latin', continent: 'Europe', language: 'Espagnol', duration: 3.2, year: 1989, artist: 'Gipsy Kings' },
                { id: 8, title: 'Viva la vida - Coldplay', date: '2008-05-12', reviews: 3, format: 'Single', genre: 'Alternative', continent: 'Europe', language: 'Anglais', duration: 4.0, year: 2008, artist: 'Coldplay' },
                { id: 9, title: 'Waka Waka - Shakira', date: '2010-05-07', reviews: 4, format: 'Single', genre: 'Pop', continent: 'Amérique', language: 'Espagnol', duration: 3.2, year: 2010, artist: 'Shakira' },
                { id: 10, title: 'We Are The Champions - Queen', date: '1977-10-07', reviews: 3, format: 'Single', genre: 'Rock', continent: 'Europe', language: 'Anglais', duration: 3.1, year: 1977, artist: 'Queen' },
                { id: 11, title: 'Somewhere Over The Rainbow - Israel Kamakawiwo\'ole', date: '1993-11-23', reviews: 5, format: 'Single', genre: 'Folk', continent: 'Océanie', language: 'Anglais', duration: 5.1, year: 1993, artist: 'Israel Kamakawiwo\'ole' },
                { id: 12, title: 'Billie Jean - Michael Jackson', date: '1982-11-30', reviews: 4, format: 'Single', genre: 'Pop', continent: 'Amérique', language: 'Anglais', duration: 4.5, year: 1982, artist: 'Michael Jackson' },
                { id: 13, title: 'I will always love you - Whitney Houston', date: '1992-11-03', reviews: 5, format: 'Single', genre: 'Soul', continent: 'Amérique', language: 'Anglais', duration: 4.3, year: 1992, artist: 'Whitney Houston' },
                { id: 14, title: 'My Heart Will Go On - Celine Dion', date: '1997-11-18', reviews: 4, format: 'Single', genre: 'Pop', continent: 'Amérique', language: 'Anglais', duration: 4.4, year: 1997, artist: 'Celine Dion' },
                { id: 15, title: 'Je t\'aime - Lara Fabian', date: '1996-03-04', reviews: 5, format: 'Single', genre: 'Pop', continent: 'Europe', language: 'Français', duration: 4.2, year: 1996, artist: 'Lara Fabian' },
                { id: 16, title: 'Thriller - Michael Jackson', date: '1982-11-30', reviews: 5, format: 'LP', genre: 'Pop', continent: 'Amérique', language: 'Anglais', duration: 42.19, year: 1982, artist: 'Michael Jackson' },
                { id: 17, title: 'Back to Black - Amy Winehouse', date: '2006-10-27', reviews: 5, format: 'LP', genre: 'Soul', continent: 'Europe', language: 'Anglais', duration: 34.00, year: 2006, artist: 'Amy Winehouse' },
            ];
            setMusics(data);
            setFilteredMusics(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [filters, sort, pagination, currentPage, musics]);


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
         })

         const startIndex = (currentPage - 1) * pagination;
         const endIndex = startIndex + pagination;
         setFilteredMusics(updatedMusics.slice(startIndex, endIndex));
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
    };

    const handleSortChange = (selectedSort) => {
        setSort(selectedSort);
    };

    const handlePaginationChange = (selectedPagination) => {
        setPagination(parseInt(selectedPagination));
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
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
    };

    return(
        <div className='rechercher-container'>
            <div className='filters'>
                <h3>Sélection de musique</h3>
                <Form>
                    <Form.Group conmtrolId="format">
                        <Form.Label>Format de Musique</Form.Label>
                        <Form.Check type="checkbox" label="LP" value="LP" name="format" checked={filters.format.includes('LP')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="EP" value="EP" name="format" checked={filters.format.includes('EP')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Single" value="Single" name="format" checked={filters.format.includes('Single')} onChange={handleFilterChange}/>
                    </Form.Group>
                    <Form.Group conmtrolId="genre">
                        <Form.Label>Genre de Musique</Form.Label>
                        <Form.Check type="checkbox" label="R&B" value="R&B" name="genre" checked={filters.genre.includes('R&B')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Hip-Hop" value="Hip-Hop" name="genre" checked={filters.genre.includes('Hip-Hop')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Latin" value="Latin" name="genre" checked={filters.genre.includes('Latin')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Alternative" value="Alternative" name="genre" checked={filters.genre.includes('Alternative')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Pop" value="Pop" name="genre" checked={filters.genre.includes('Pop')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Rock" value="Rock" name="genre" checked={filters.genre.includes('Rock')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Folk" value="Folk" name="genre" checked={filters.genre.includes('Folk')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Soul" value="Soul" name="genre" checked={filters.genre.includes('Soul')} onChange={handleFilterChange}/>
                    </Form.Group>
                    <Form.Group conmtrolId="continent">
                        <Form.Label>Continent</Form.Label>
                        <Form.Check type="checkbox" label="Afrique" value="Afrique" name="continent" checked={filters.continent.includes('Afrique')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Asie" value="Asie" name="continent" checked={filters.continent.includes('Asie')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Europe" value="Europe" name="continent" checked={filters.continent.includes('Europe')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Amérique" value="Amérique" name="continent" checked={filters.continent.includes('Amérique')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Océanie" value="Océanie" name="continent" checked={filters.continent.includes('Océanie')} onChange={handleFilterChange}/>
                    </Form.Group>
                    <Form.Group conmtrolId="language">
                        <Form.Label>Langue</Form.Label>
                        <Form.Check type="checkbox" label="Anglais" value="Anglais" name="language" checked={filters.language.includes('Anglais')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Français" value="Français" name="language" checked={filters.language.includes('Français')} onChange={handleFilterChange}/>
                        <Form.Check type="checkbox" label="Espagnol" value="Espagnol" name="language" checked={filters.language.includes('Espagnol')} onChange={handleFilterChange}/>
                    </Form.Group>
                    <Form.Group conmtrolId="duration">
                        <Form.Label>Durée</Form.Label>
                        <Form.Check type="radio" label="< 2 min>" value="<2" name="duration" checked={filters.duration.includes('<2')} onChange={handleFilterChange}/>
                        <Form.Check type="radio" label="2 à 4 min" value="2-4" name="duration" checked={filters.duration.includes('2-4')} onChange={handleFilterChange}/>
                        <Form.Check type="radio" label="4 à 6 min" value="4-6" name="duration" checked={filters.duration.includes('4-6')} onChange={handleFilterChange}/>
                        <Form.Check type="radio" label="> 6 min" value=">6" name="duration" checked={filters.duration.includes('>6')} onChange={handleFilterChange}/>
                    </Form.Group>
                    <Button variant='secondary' onClick={resetFilters}>Réinitialiser les filtres</Button>
                </Form>
            </div>
            <div className='results'>
                <div className='results-header'>
                    <Dropdown onSelect={handlePaginationChange}>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            {pagination} chansons par page
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey={9}>9 chansons par page</Dropdown.Item>
                            <Dropdown.Item eventKey={3}>3 chansons par page</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown onSelect={handleSortChange}>
                        <Dropdown.Toggle variant='secondary' id="dropdown-basic">
                            Trier par {sort}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="title">A-Z (alphabétique)</Dropdown.Item>
                            <Dropdown.Item eventKey="date">Date</Dropdown.Item>
                            <Dropdown.Item eventKey="reviews">Avis</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className='pagination'>
                        {[...Array(Math.ceil(musics.length / pagination)).keys()].map(page => (
                            <Button
                                key={page}
                                onClick={() => handlePageChange(page + 1)}
                                className={page + 1 === currentPage ? 'active' : ''}
                            >
                                {page + 1}
                            </Button>
                        ))}
                    </div>
                </div>
            <div className='music-list'>
                {filteredMusics.length > 0 ? (
                    filteredMusics.map(music => (
                        <Card key={music.id} className='music-card'>
                            <Card.Body>
                                <Card.Title>{music.title}</Card.Title>
                                <Card.Text>
                                    <strong>Date</strong> {music.date}<br />
                                    <strong>Avis</strong> {music.reviews}<br />
                                    <strong>Format</strong> {music.format}<br />
                                    <strong>Genre</strong> {music.genre}<br />
                                    <strong>Continent</strong> {music.continent}<br />
                                    <strong>Langue</strong> {music.language}<br />
                                    <strong>Durée</strong> {music.duration}<br />
                                    <strong>Année</strong> {music.year}<br />
                                    <strong>Artiste</strong> {music.artist}<br />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <p className='nothing'>Pas de chanson trouvée en lien avec les filtres sélectionnés.</p>
                )}
            </div>
        </div>
    </div>
    );
};

export default Rechercher;