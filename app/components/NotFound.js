import React from 'react';
import {Card} from "react-bootstrap";

const NotFound = () => (
  <Card>
    <Card.Body>
      <Card.Title>Page not found</Card.Title>
      <Card.Text>The page that you are looking for is not found, try visiting the home page.</Card.Text>
    </Card.Body>
  </Card>
);

export default NotFound;
