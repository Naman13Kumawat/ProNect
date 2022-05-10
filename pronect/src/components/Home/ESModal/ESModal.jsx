import React, {useState} from 'react'
import {Modal, Button} from "react-bootstrap"  
import { Link } from "react-router-dom";
import styles from "./ESModal.module.css"

export default function ESModal(props) {
  const [connectPage, setConnectPage] = useState("")

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            What you are searching for?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className={`${styles.btn_box}`}>
        <Link to="/event_cp"><Button onClick={props.onHide}>Events</Button></Link>
        <Link to="/sponsor_cp"><Button onClick={props.onHide}>Sponsors</Button></Link>
        </div>
        </Modal.Body>
      </Modal>
    );
    }