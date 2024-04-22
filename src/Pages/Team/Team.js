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
                src="https://scontent.fjsr12-1.fna.fbcdn.net/v/t39.30808-6/427795232_2646004292233778_498756915922700561_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFgIv11KoMlFqLmhRxw_a6MZMax4r3hmuNkxrHiveGa4xwupvbU5DODPo8fc6GveXDt3Qa7LoIp5RWgUqkyS8bA&_nc_ohc=q9dtxziKfwMAb56_Ti-&_nc_ht=scontent.fjsr12-1.fna&oh=00_AfB5Ib8Wch-6p5N7065QGRZU85V6bSVpvyMDay_UgRL3wA&oe=6615F8EE"
              />
              <Card.Body>
                <Card.Title className="title">Maynul Hossain</Card.Title>
                <Card.Text>Team Leader</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mx-2 border-0 card-design bg-dark text-light shadow p-3 mb-5  rounded">
              <Card.Img
                variant="top"
                src="https://scontent.fjsr12-1.fna.fbcdn.net/v/t39.30808-6/427795232_2646004292233778_498756915922700561_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFgIv11KoMlFqLmhRxw_a6MZMax4r3hmuNkxrHiveGa4xwupvbU5DODPo8fc6GveXDt3Qa7LoIp5RWgUqkyS8bA&_nc_ohc=q9dtxziKfwMAb56_Ti-&_nc_ht=scontent.fjsr12-1.fna&oh=00_AfB5Ib8Wch-6p5N7065QGRZU85V6bSVpvyMDay_UgRL3wA&oe=6615F8EE"
              />
              <Card.Body>
                <Card.Title className="title">Maynul Hossain</Card.Title>
                <Card.Text>Team Member</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mx-2 border-0 card-design bg-dark text-light shadow p-3 mb-5  rounded">
              <Card.Img
                variant="top"
                src="https://scontent.fjsr12-1.fna.fbcdn.net/v/t39.30808-6/427795232_2646004292233778_498756915922700561_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFgIv11KoMlFqLmhRxw_a6MZMax4r3hmuNkxrHiveGa4xwupvbU5DODPo8fc6GveXDt3Qa7LoIp5RWgUqkyS8bA&_nc_ohc=q9dtxziKfwMAb56_Ti-&_nc_ht=scontent.fjsr12-1.fna&oh=00_AfB5Ib8Wch-6p5N7065QGRZU85V6bSVpvyMDay_UgRL3wA&oe=6615F8EE"
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