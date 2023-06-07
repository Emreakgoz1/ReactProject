import { Button, Tabs, Tab } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const Bootstrap = () => {
  return (
    <div>
      <h3>Bootstrap komponentleri</h3>
      <Button>Button</Button>
      <Button variant="danger">Button</Button>
      <Button variant="success">Button</Button>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          Tab content for Home
        </Tab>
        <Tab eventKey="profile" title="Profile">
          Tab content for Profile
        </Tab>
        <Tab eventKey="contact" title="Contact">
          Tab content for Contact
        </Tab>
      </Tabs>
    </div>
  );
};

export default Bootstrap;
