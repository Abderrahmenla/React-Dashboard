import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';
const StatCard = ({ updated, title, smallIcon, stat, bigIcon, ...rest }) => {
  return (
    <Col lg='3' sm='6'>
      <Card className='card-stats'>
        <Card.Body>
          <Row>
            <Col xs='5'>
              <div className='icon-big text-center icon-warning'>
                <i className={bigIcon}></i>
              </div>
            </Col>
            <Col xs='7'>
              <div className='numbers'>
                <p className='card-category'>{title} </p>
                <Card.Title as='h4'>{stat} </Card.Title>
              </div>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <hr></hr>
          <div className='stats'>
            <i className={smallIcon}></i>
            {updated}
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

StatCard.propTypes = {
  updated: PropTypes.string,
  title: PropTypes.string,
  stat: PropTypes.string,
  smallIcon: PropTypes.string,
  bigIcon: PropTypes.string,
};

StatCard.defaultProps = {
  path: '#!',
  updated: 'Updated now',
  title: 'Monthly revenue',
  stat: '150$',
  smallIcon: 'fas fa-redo mr-1',
  bigIcon: 'nc-icon nc-chart text-warning',
};

export default StatCard;
