import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { Col } from 'reactstrap';
import './RefreshDataArrow.scss';

const RefreshDataArrow = () => {
    return (
        <Col xs="12" className="d-flex justify-content-center mt-2 mb-5 refresh-icon">
            <FontAwesomeIcon icon={faSync} size="5x" />
        </Col>
    )
}

export default RefreshDataArrow;