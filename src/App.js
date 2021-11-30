import { useState, useEffect } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopBar from './componets/TopBar'
import Searchbar from './componets/Searchbar';
import Spinner from './componets/Spinner';
import ImageGallery from './componets/ImageGallery';
import ImageGalleryItem from './componets/ImageGallery/ImageGalleryItem';
import imgApiService from './services/api-img-service';
import ButtonMore from './componets/ButtonMore';
import Modal from './componets/Modal';
import BtnToTop from './componets/BtnToTop';
import ScrollToggle from './componets/ScrollToggle';
import { imgOpen, changeModalImg } from './services/modal-service';



function App() {
    
    const [searchQuery, setSearchQuery] = useState('');
    const [status, setStatus] = useState('pending');
    const [totalImg, setTotalImg] = useState(0);
    const [page, setPage] = useState(1);
    const [imgObjArr, setImgObjArr] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [largeImageURL, setLargeImageURL] = useState('');
    const [tags, setTags] = useState('');
    const [imgId, setImgId] = useState(0);
    const [scrollPoint, setScrollPoint] = useState(0);
    const [endlessScroll, setEndlessScroll] = useState(false);


    // подгрузку только первой страницы

    useEffect(() => {
        async function fetchData() {
            // if (!searchQuery ) {
            //     return setStatus('idle');
            // };
            // setStatus('pending');
            let newRequest;
            try {
                newRequest = await imgApiService.fetchImages(searchQuery, 1);
                setImgObjArr([...newRequest.data.hits]);
                setTotalImg(newRequest.data.totalHits);
                setStatus(() => {
                    return (
                        newRequest.data.totalHits === 0 ?
                            'rejected' :
                            'resolved'
                    )
                });
            }
            catch (error) {
                console.log('Error: request failed');
                return setStatus('failed')
            };
        };

        fetchData();
    }, [searchQuery]);

    // подгрузку последующих страниц, кроме первой

    useEffect(() => {
        if (page === 1) return;
        async function nextFetch() {
            let newRequest;
            try {
                newRequest = await imgApiService.fetchImages(searchQuery, page);
                if (newRequest.data.hits.length === 0) return;
                setImgObjArr(prevState => [...prevState, ...newRequest.data.hits]);
                setTotalImg(newRequest.data.totalHits);
            }
            catch (error) {
                console.log('Error: request failed');
                return setStatus('failed')
            };    
        };
        nextFetch();
    }, [searchQuery, page]);

    // подмотка при loadMore

    useEffect(() => {
        setTimeout(() => {
            
            if (page === 1 || endlessScroll) return;
                // скролл к началу вновь подгруженого
                let scrTo = scrollPoint + 60;
                window.scrollTo({
                    top: scrTo,
                    behavior: 'smooth',
                });
                //скролл в конец галереи
                // window.scrollTo({
                //     top: document.documentElement.scrollHeight,
                //     behavior: 'smooth',
                // });
        }, 600);
    }, [scrollPoint, page, endlessScroll]);

    // endless Scroll

    useEffect(() => {

        if (imgObjArr.length === 0 || !endlessScroll) return;
        
        let lastId = (imgObjArr[imgObjArr.length - 1].id);   //запоминаем id крайнего на даный момент элемента гллереи
        setTimeout(() => { 
            const lastTarget = document.getElementById(lastId); //получаем этот элемент и делаем его целью наблюдения для IntersectionObserver
            let observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setScrollPoint(imgObjArr.length !== 0 && document.querySelector(`[id="gallery"]`).offsetHeight);
                        setPage(prevState => prevState + 1); //запуск подгрузки следующих элементов
                        observer.unobserve(entry.target);  //остановка наблюдателя видимой частью окна для объявленой цели
                    };
                });
            }, {threshold: 0.2}); //подгрузка следующих элементов сработает при появлении 20% цели в области видимости окна

            observer.observe(lastTarget);  //запуск наблюдателя за видимой частью окна 
        }, 600);

    }, [imgObjArr, endlessScroll]);

    const searchQuerySubmit = query => {
        setSearchQuery(query);
        setPage(1);
    };

    const loadMore = async () => {
        console.log(document.querySelector(`[id="gallery"]`).offsetHeight)
        setScrollPoint(imgObjArr.length !== 0 && document.querySelector(`[id="gallery"]`).offsetHeight);
        setPage(prevState => prevState + 1);
    };

    const infScrollToggle = data => setEndlessScroll(data);

    const closeModalClick = (data) => {
       data && toggleModal()
    };

    const toggleModal = () => setShowModal(!showModal);

    const openModal = (imageId) => {
        const { lrgImgURL, imgTags, imgNo } = imgOpen(imageId, imgObjArr);
        setShowModal(!showModal);
        setImgId(imgNo);
        setLargeImageURL(lrgImgURL);
        setTags(imgTags);
    };

    const moveImg = value => {
        const { lrgImgURL, imgTags, imgNo } = changeModalImg(value, imgId, imgObjArr);
        setImgId(imgNo);
        setLargeImageURL(lrgImgURL);
        setTags(imgTags);
    };

    return (

        <div className="App">

            <TopBar>
                
                <h1 className="serviceTitle">search images</h1>

                <Searchbar searchQueryToUp={searchQuerySubmit} />

                <ScrollToggle toggleScroll={infScrollToggle} position={endlessScroll} />
                
            </TopBar>

            {(status === 'idle') && <h2 className="galleryTitle">Введите запрос</h2>}

            {(status === 'pending') && <Spinner/>}

            {(status === 'rejected') && <h2 className="galleryTitle">По запросу "{searchQuery.toUpperCase()}" ничего не найдено</h2>}

            {(status === 'failed') && <h2 className="galleryTitle">Error: request failed. Нет соединения с интернетом или сервером</h2>}

            {(status === 'resolved') && (
                <>
                    <h2 className="galleryTitle">Найдено {totalImg} изображений по запросу "{searchQuery.toUpperCase()}":</h2>

                    <ImageGallery>
                        {imgObjArr.map(item => {
                            const { id } = item;
                            return (
                                <ImageGalleryItem key={id} contactObj={item} imgIdToUp={openModal }/>
                            );
                        })}
                    </ImageGallery>
                    {console.log("!RENDER!")}
                </>   
            )}

            {((status === 'resolved') && (page * 12 < totalImg) && !endlessScroll) && <ButtonMore clickOn={loadMore}/>}
            {((page * 12 >= totalImg) && (status === 'resolved')) && <h2 className="galleryTitle">Запрос "{searchQuery.toUpperCase()}" успешно выполнен</h2>}
        
            <ToastContainer />

            <BtnToTop/>
            
            {showModal &&
                <Modal closeModalClick={closeModalClick} closeModalEsc={toggleModal} changeImg={moveImg} modalOn={showModal}>
                    <img src={largeImageURL} alt={tags} className="modalImg" onClick={e => moveImg(e.clientX)}/>
                </Modal>}

        </div>
    );
};


export default App;