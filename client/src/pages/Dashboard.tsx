import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { URLEnum } from '../RouterEnum'
import { NavLink } from 'react-router-dom'
import './Dashboard.css';

function Dashboard() {
  return (
        <div className='mt-5'>

          <Row xs={1} md={2} lg={2} xl={2} className="g-4" >
              <Col key="users">
                <Card as={NavLink} to={URLEnum.USERS} className="card-hover" >
                  <Card.Body>
                    <Card.Title className="text-truncate" style={{maxHeight: '3.6em'}}>Users</Card.Title>
                    <Card.Text className="text-truncate" style={{maxHeight: '3.6em'}}>
                      This is a summary of users.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col key="users">
                <Card as={NavLink} to={URLEnum.USERS} className="card-hover" >
                  <Card.Body>
                    <Card.Title className="text-truncate" style={{maxHeight: '3.6em'}}>Centers</Card.Title>
                    <Card.Text className="text-truncate" style={{maxHeight: '3.6em'}}>
                      This is a summary of users.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col key="users">
                <Card as={NavLink} to={URLEnum.USERS} className="card-hover" >
                  <Card.Body>
                    <Card.Title className="text-truncate" style={{maxHeight: '3.6em'}}>Transports</Card.Title>
                    <Card.Text className="text-truncate" style={{maxHeight: '3.6em'}}>
                      This is a summary of users.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col key="users">
                <Card as={NavLink} to={URLEnum.USERS} className="card-hover" >
                  <Card.Body>
                    <Card.Title className="text-truncate" style={{maxHeight: '3.6em'}}>Food</Card.Title>
                    <Card.Text className="text-truncate" style={{maxHeight: '3.6em'}}>
                      This is a summary of users.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
          </Row>

        </div>
  );
}

export default Dashboard