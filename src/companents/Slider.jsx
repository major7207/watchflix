import React, {useEffect, useState} from 'react';
import api from "../api";
import {Link} from "react-router-dom";

function Slider(image) {
    const [lastImg, setLastImg] = useState([]);

    useEffect(async () => {
        const responseMain = await api('iron man');
        setLastImg(responseMain.slice(0, 4));
    }, []);

    return (
        <div className='slider-container'>
            <div className="container justify-content-between">
                {/*header start*/}
                <div className="header d-flex justify-content-between">
                    <div className="play-logo">
                        <svg width="144" height="144" viewBox="0 0 144 144" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="72" cy="72" r="32" fill="#FED530"/>
                            <path
                                d="M66 81.8689V62.1309L80.8 71.9999L66 81.8689ZM68 65.8689V78.1309L77.2 71.9999L68 65.8689Z"
                                fill="black"/>
                            <path
                                d="M144 72C144 111.765 111.765 144 72 144C32.2355 144 0 111.765 0 72C0 32.2355 32.2355 0 72 0C111.765 0 144 32.2355 144 72ZM1.44 72C1.44 110.969 33.0308 142.56 72 142.56C110.969 142.56 142.56 110.969 142.56 72C142.56 33.0308 110.969 1.44 72 1.44C33.0308 1.44 1.44 33.0308 1.44 72Z"
                                fill="#808080"/>
                            <path
                                d="M142.56 72C143.355 72 144.002 72.6449 143.986 73.44C143.722 86.6015 139.855 99.4492 132.792 110.58C125.471 122.115 115.019 131.33 102.656 137.148C90.2936 142.965 76.5311 145.145 62.976 143.432C49.4209 141.72 36.6329 136.186 26.1055 127.477C15.5781 118.768 7.74598 107.243 3.52393 94.2492C-0.698113 81.2551 -1.13579 67.3279 2.26201 54.0943C5.65982 40.8608 12.7528 28.8671 22.7126 19.5143C32.3222 10.4903 44.2177 4.28405 57.0967 1.55929C57.8748 1.39468 58.6293 1.90861 58.7784 2.68981C58.9274 3.47102 58.4144 4.22361 57.6365 4.38888C45.2943 7.01081 33.8953 12.9638 24.6841 21.6137C15.1227 30.5924 8.31343 42.1063 5.05154 54.8106C1.78964 67.5148 2.20982 80.8849 6.26298 93.3593C10.3161 105.834 17.835 116.897 27.9413 125.258C38.0476 133.619 50.3241 138.931 63.337 140.575C76.3499 142.219 89.5619 140.126 101.43 134.542C113.298 128.957 123.332 120.111 130.36 109.036C137.131 98.3675 140.842 86.0549 141.105 73.44C141.122 72.6449 141.765 72 142.56 72Z"
                                fill="#FED530"/>
                        </svg>
                    </div>
                    <div className="title d-grid">
                        <h1>The Legend of Sunrise</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <span>Genre : Adventure</span>
                        <span>Duration : 2 hr 45 mins</span>
                        <span>Ratings : 4.5</span>
                    </div>
                </div>
                <h2 className="trailers-title">Trailers</h2>
                <div className="container mb-5">
                    <div className="d-flex">
                        {lastImg.map((movie, index) => <Link
                                to={"/movie/" + movie.imdbID}
                                key={index}
                                className="trailers-item">
                                <img src={movie.Poster} alt=""/>
                                <span>{index + 1}</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;