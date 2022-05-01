import React from 'react';
import './TopSlider.scss';
import img from '../../../assets/img/4.jpg';
import { Link } from 'react-router-dom';

const TopSlider = () => {
  return (
    <div className="contact__bg">
      <div className="contact__bg__img" style={{ backgroundImage: `url(${img}` }}>
        <div className="contact__bg__img__breadcrumb">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Contact</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopSlider;