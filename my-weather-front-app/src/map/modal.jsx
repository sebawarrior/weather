import React from 'react';
import {Modal} from 'antd';

const ModalMap = ({modalIsActive, handleOk, handleCancel, lat, lng}) => {

    return (
        <Modal visible={modalIsActive} onOk={handleOk} onCancel={handleCancel}>
        {/* TODO: Here goes the consult to the api! */}
        <p>El país que seleccionaste es: {lat}</p>
        <p>La capital seleccionada es: {lng}</p>
      </Modal>
    );
}

export default ModalMap;
 