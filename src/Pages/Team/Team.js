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
                src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/475164028_2941677409333130_5245578244059576246_n.jpg?stp=dst-jpg_p350x350_tt6&_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHFmTaapTiy3WCXFUg9SliWC7j8x4qIaKcLuPzHiohopwi781DFmJHpx0gSfdsXwRpe101VPJj-CbRPQVUdK4fQ&_nc_ohc=c7-k8FtdCYoQ7kNvgFSFXVW&_nc_oc=AdgmnSgd0QZ6S_i1kb0GH1Hxo5xkYUqbPX1P1NCTSZd8xZeaK8XtyQ_aa-iGDkHqnV0&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=jTfbEs4mGJBF_JsXsmjbEA&oh=00_AYERBcs88gFsIOw6ki9-bEyTtJPwxEu0MP2XEd8OibkHDw&oe=67DE03FB"
              />
              <Card.Body>
                <Card.Title className="title">Maynul Hossain</Card.Title>
                <Card.Text>Team Leader</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mx-2 border-0 card-design bg-dark text-light shadow p-3 mb-5  rounded">
              <Card.Img
                variant="top"
                src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/475164028_2941677409333130_5245578244059576246_n.jpg?stp=dst-jpg_p350x350_tt6&_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHFmTaapTiy3WCXFUg9SliWC7j8x4qIaKcLuPzHiohopwi781DFmJHpx0gSfdsXwRpe101VPJj-CbRPQVUdK4fQ&_nc_ohc=c7-k8FtdCYoQ7kNvgFSFXVW&_nc_oc=AdgmnSgd0QZ6S_i1kb0GH1Hxo5xkYUqbPX1P1NCTSZd8xZeaK8XtyQ_aa-iGDkHqnV0&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=jTfbEs4mGJBF_JsXsmjbEA&oh=00_AYERBcs88gFsIOw6ki9-bEyTtJPwxEu0MP2XEd8OibkHDw&oe=67DE03FB"
              />
              <Card.Body>
                <Card.Title className="title">Maynul Hossain</Card.Title>
                <Card.Text>Team Member</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mx-2 border-0 card-design bg-dark text-light shadow p-3 mb-5  rounded">
              <Card.Img
                variant="top"
                src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/475164028_2941677409333130_5245578244059576246_n.jpg?stp=dst-jpg_p350x350_tt6&_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHFmTaapTiy3WCXFUg9SliWC7j8x4qIaKcLuPzHiohopwi781DFmJHpx0gSfdsXwRpe101VPJj-CbRPQVUdK4fQ&_nc_ohc=c7-k8FtdCYoQ7kNvgFSFXVW&_nc_oc=AdgmnSgd0QZ6S_i1kb0GH1Hxo5xkYUqbPX1P1NCTSZd8xZeaK8XtyQ_aa-iGDkHqnV0&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=jTfbEs4mGJBF_JsXsmjbEA&oh=00_AYERBcs88gFsIOw6ki9-bEyTtJPwxEu0MP2XEd8OibkHDw&oe=67DE03FB"
              />
              <Card.Body>
                <Card.Title className="title">Maynul Hossain</Card.Title>
                <Card.Text>Team Member</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </div>
    );
};

export default Team;