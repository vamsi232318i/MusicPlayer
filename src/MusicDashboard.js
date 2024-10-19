import React from 'react';
import './style.css';
import 'boxicons/css/boxicons.min.css';

const MusicDashboard = () => {
    const handleSidebarToggle = () => {
        document.querySelector('.sidebar').classList.toggle('active');
    };

    const fun = (index) => {
        console.log(`Play song ${index + 1}`);
    };

    return (
        <div className="music-dashboard">
            <div className="sidebar">
                <div className="top">
                    <div className="logo">
                        <i className='bx bxs-music'></i>
                        <span>PlayYours</span>
                    </div>
                    <i className="bx bx-menu" id="btn" onClick={handleSidebarToggle}></i>
                </div>
                <ul>
                    <p id="menu">Menu</p>
                    {['Discover', 'Search', 'Genres', 'Albums', 'Artists', 'Recent', 'Favourities'].map((item, index) => (
                        <li key={index}>
                            <a href={`#${item.toLowerCase()}`}>
                                <i className={`bx bxs-${item.toLowerCase()}`}></i>
                                <span className="nav-item">{item}</span>
                            </a>
                            <span className="tooltip">{item}</span>
                        </li>
                    ))}
                    <li>
                        <a href="/logout">
                            <i className='bx bx-log-out'></i>
                            <span className="nav-item">LogOut</span>
                        </a>
                        <span className="tooltip">LogOut</span>
                    </li>
                </ul>
            </div>

            <main>
                <section id="main_cont">
                    <div id="discover">
                        <div id="discover_banner">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/033/861/501/original/music-player-green-screen-free-vide.jpg" alt="An image to get attention" />
                        </div>
                        <h1 id="popular">Popular songs</h1>
                        <div id="latest_music_flex">
                            {[...Array(9)].map((_, index) => (
                                <div className="latest_boxes" key={index}>
                                    <img src="https://th.bing.com/th/id/OIP.bLCU8HwL546JIVk9vLV3NAHaHa?rs=1&pid=ImgDetMain" alt="" className="discover_image" />
                                    <div className="discover_belowphoto">
                                        <p className="Dmatter">Song{index + 1}</p>
                                        <marquee><h5 className="genre"></h5></marquee>
                                        <i className='bx bx-play-circle' onClick={() => fun(index)}></i>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div id="popular_movie">
                            <h1 id="movie_head">Top Movie Songs</h1>
                            <div id="movie_flex"></div>
                        </div>
                    </div>
                </section>
            </main>
            <section id="right_cont">
                <img src="" alt="" id="get_image" />
                <div id="right_names">
                    <h4 id="right_h4"></h4>
                    <marquee><p id="right_p"></p></marquee>
                </div>
                <audio src="" id="audio" controls></audio>
            </section>
        </div>
    );
};

export default MusicDashboard;
