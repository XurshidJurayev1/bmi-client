import React, { useState } from 'react';
import './Contact.scss';
import TopSlider from '../other/TopSlider';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FullscreenControl, GeolocationControl, Map, Placemark, YMaps, ZoomControl } from 'react-yandex-maps';
import {} from '../../../action';
import { connect } from 'react-redux';
import { sendContactMessage } from '../../../action';


const Contact = (props) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [lat, setLat] = useState(41.264190);
  const [lang, setLang] = useState(69.231094);


  const submit = (e) => {
    e.preventDefault();
    const user = {
      name, lastName, email, text,
    };
    props.sendContactMessage(user);

    setName('');
    setLastName('');
    setEmail('');
    setText('');
  };

  return (
    <div className="contact">
      <TopSlider />
      <div className="contact__container">
        <div className="contact__container__label">
          <div className="contact__container__label__card">
            <div className="contact__container__label__card__circle">
              <div>
                <MdLocationOn />
              </div>
            </div>
            <div className="contact__container__label__card__text">
              <h3>
                Address
              </h3>
              <p>
                1481 Creekside Lane Avila Beach, CA 931
              </p>
            </div>
          </div>
          <div className="contact__container__label__card">
            <div className="contact__container__label__card__circle">
              <div>
                <BsFillTelephoneFill />
              </div>
            </div>
            <div className="contact__container__label__card__text">
              <h3>
                Telephone number
              </h3>
              <a href="tel:+998935863877" target="_blank" rel="noreferrer">
                +998935863877
              </a>
            </div>
          </div>
          <div className="contact__container__label__card">
            <div className="contact__container__label__card__circle">
              <div>
                <MdEmail />
              </div>
            </div>
            <div className="contact__container__label__card__text">
              <h3>
                Email
              </h3>
              <a href="mailto:xjurayev99@gmail.com" target="_blank" rel="noreferrer">
                xjurayev99@gmail.com
              </a>
            </div>
          </div>

        </div>
        <div className="contact__container__flex">
          <div className="contact__container__flex__map">
            <YMaps style={{ width: '100%', height: '100vh' }}>
              <Map defaultState={{ center: [lat, lang], zoom: 16 }}
                   style={{ width: '100%', height: '75vh' }}>
                <Placemark geometry={[lat, lang]} />
                <FullscreenControl options={{ float: 'left' }} />
                <GeolocationControl options={{ float: 'right' }} />
                <ZoomControl options={{ float: 'left' }} />
              </Map>
            </YMaps>
          </div>
          <div className="contact__container__flex__form">
            <form onSubmit={submit}>
              <div className="mb-3">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="John" />
                </div>
                <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="McCandy" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3" />
              </div>
              <div className="d-flex">
                <button className="btn btn-primary" type="submit">Submit</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    response: state.userContactSend,
  };
};

export default connect(mapStateToProps, { sendContactMessage })(Contact);