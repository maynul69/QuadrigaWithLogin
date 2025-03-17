import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';

const Team = () => {
    return (
      <div>
        <Container>
          <div className="text-center">
            <h1 className="my-2 headline-design text-center">Our Team</h1>
          </div>
          <CardGroup className="my-4">
            <Card className="mx-2 border-0 card-design bg-dark text-light shadow p-3 mb-5  rounded ">
              <Card.Img
                style={{ width: "100%" }}
                variant="top"
                src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/433190443_3641663336108454_7375523714735453836_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEGLf65C4OlqoRw2orx-KRySyYlnlV5ShFLJiWeVXlKEWkd6qv4hvqNmwSsw87pJ5jz5_zFZlZicCOLrZrNOwdh&_nc_ohc=7zWt-AfnAYkQ7kNvgE4uwEV&_nc_ht=scontent.fdac24-5.fna&oh=00_AfBhVFi4ZIfNzFs5IvzFopPQ9hkWoeGCKX2QM7eFHJtqwA&oe=663E9BEC"
              />
              <Card.Body>
                <Card.Title className="title">Anmoy Kar</Card.Title>
                <Card.Text>Team Leader</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mx-2 border-0 card-design bg-dark text-light shadow p-3 mb-5  rounded">
              <Card.Img
                variant="top"
                src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/433190443_3641663336108454_7375523714735453836_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEGLf65C4OlqoRw2orx-KRySyYlnlV5ShFLJiWeVXlKEWkd6qv4hvqNmwSsw87pJ5jz5_zFZlZicCOLrZrNOwdh&_nc_ohc=7zWt-AfnAYkQ7kNvgE4uwEV&_nc_ht=scontent.fdac24-5.fna&oh=00_AfBhVFi4ZIfNzFs5IvzFopPQ9hkWoeGCKX2QM7eFHJtqwA&oe=663E9BEC"
              />
              <Card.Body>
                <Card.Title className="title">Anmoy Kar</Card.Title>
                <Card.Text>Team Member</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mx-2 border-0 card-design bg-dark text-light shadow p-3 mb-5  rounded">
              <Card.Img
                variant="top"
                src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/433190443_3641663336108454_7375523714735453836_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEGLf65C4OlqoRw2orx-KRySyYlnlV5ShFLJiWeVXlKEWkd6qv4hvqNmwSsw87pJ5jz5_zFZlZicCOLrZrNOwdh&_nc_ohc=7zWt-AfnAYkQ7kNvgE4uwEV&_nc_ht=scontent.fdac24-5.fna&oh=00_AfBhVFi4ZIfNzFs5IvzFopPQ9hkWoeGCKX2QM7eFHJtqwA&oe=663E9BEC"
              />
              <Card.Body>
                <Card.Title className="title">Anmoy Kar</Card.Title>
                <Card.Text>Team Member</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </div>
    );
};

export default Team;