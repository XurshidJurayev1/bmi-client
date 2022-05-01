import React from 'react';
import './About.scss';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div className=" about1 ">
      <div className="about1__content">
        <h3>
          Join Our Community Now!
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at
          rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
        </p>
        <button
          className="btn btn-primary  "
          onClick={() => navigate('/register')}>
          Register now
        </button>

      </div>
    </div>
  );
};

export default About;