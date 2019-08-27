import React from 'react'
import Modal from 'react-modal'

const RestaurantModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Choice"
    >
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.clearOption}>Ok</button>
    </Modal>

);

export default RestaurantModal;
