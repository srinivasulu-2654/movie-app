import React, { useState } from 'react';
import { Modal, show } from 'react-bootstrap';
import './MoviesElement.css';
const API_IMG = "https://image.tmdb.org/t/p/w500/";


const MovieElement = ({ title, poster_path, vote_average, release_date, overview, vote_count }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(true);
  const handleClose = () => setClick(false);


  return (
    <div className='card-head'>
      <div className='card-com'>
        <div className='setting'>
          <img className='card-img-top cardimg' src={API_IMG + poster_path} />
          <div className='rating'>{vote_average}</div>
        </div>
        <div className='card-body card-com'>
          <button type='button' className='btn' onClick={handleClick}>{title}</button>
          <Modal show={click} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='mod-item'>
                <div className='mod-tabitem'>
                  <div className='first'>
                    <b>{title}</b>
                    <img className='card-img' src={API_IMG + poster_path}></img>
                  </div>
                  <div className='second'>
                    {/* <h4>ImDB : {vote_average}/10</h4> */}
                    <b>Release Date : {release_date}</b>
                    <br></br>
                    <p>{overview}</p>
                    <h6><b>{vote_average}</b>/10 ({vote_count} total votes)</h6>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default MovieElement;