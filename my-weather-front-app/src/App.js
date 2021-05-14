
import './App.css';
import "antd/dist/antd.css";
import SimpleMap from './map/google-map';
import React, { useEffect, useState } from 'react';
import ModalMap from './map/modal';

function App() {
  const [lat, setLat] = useState(-33);
  const [lng, setLng] = useState(-70);
  const [modalIsActive, setModalIsActive] = useState(false);

  const handleOk = () => {
    setModalIsActive(false);
  };

  const handleCancel = () => {
    setModalIsActive(false);
  };

  useEffect(() => {
    console.log(lat, lng, modalIsActive, "HOLAAA")
  })
  return (
    <div className="App">
      <SimpleMap setLat={setLat} setLng={setLng} setModalIsActive={setModalIsActive}/>
      <ModalMap modalIsActive={modalIsActive} handleOk={handleOk} handleCancel={handleCancel} lat={lat} lng={lng}/>
    </div>

  );
}

export default App;
