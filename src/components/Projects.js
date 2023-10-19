import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Certifcate Generation",
      description: "A certificate generation website is a web application that allows users to create, customize, and generate digital or printable certificates for various purposes. It typically utilizes a combination of HTML, CSS, and JavaScript to provide a user-friendly interface and dynamic functionality.",
      imgUrl: projImg1,
    },
    {
      title: "Education Blog Website",
      description: "Creating an education blog website involves a combination of HTML, CSS, JavaScript, and Bootstrap to deliver an engaging platform for sharing knowledge.",
      imgUrl: projImg2,
    },
    {
      title: "Employee Provident Fund System",
      description: "developed responsive and user-friendly online applications utilizing the.NET Framework, C#,and Bootstrap through gaining practical web development expertise.",
      imgUrl: projImg3,
    },
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Welcome to the PROJECTS Section</h2>
                <p>Embark on a journey into the enigmatic realm of creativity and innovation, where boundless possibilities come to life.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Currently Working on Blockchain based CrowdFunding Platform.
                        <br></br>
                        Stay tuned For more Updates!
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>You Can also checkout my <a href="https://github.com/RIDHI-RANJAN">Github Profile</a> for more details.
                        <br></br>
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
