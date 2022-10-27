import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/portafolio.png";
import projImg2 from "../assets/img/portafolio2.png";
import projImg3 from "../assets/img/antostore.png";
import projImg4 from "../assets/img/portfolio4.png";
import projImg5 from "../assets/img/Sena.png";
import projImg6 from "../assets/img/pokemoncel.jpg";
import ChatApp from "../assets/img/ChatApp.png";
import Swatch from "../assets/img/Swatch.png";
import Admin from "../assets/img/Admin.png";
import MapApp from "../assets/video/MapasApp.mp4";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "Primer Portafolio",
      description: "Al iniciar mi carrera como desarrollador decidí crear mi primer version del portafolio",
      imgUrl: projImg1,
    },
    {
      title: "WilvanaStore",
      description: "Como proyecto final de grado, realizamos un Ecommerce completo, Movil, Desktop y Web, Yo estuve encargado del desarrollo web, donde empecé a adquirir mi experiencia",
      imgUrl: projImg2,
    },
    {
      title: "Anto Store",
      description: "Como iniciativa decidí crear un emprendimiento con mi propio Ecommerce Desarrollado con Laravel/MySQl.",
      imgUrl: projImg3,
    },
    {
      title: "Tickets App",
      description: "Entrando más a fondo decidí experimentar con los Sockets, Para trabajar en tiempo real, así pude crear una App que genera tickets y un agente puede atender el ticket en un escritorio",
      imgUrl: projImg4,
    },
    {
      title: "Plataforma IntraNet Sena",
      description: "Debido a mi alto rendimiento el SENA decidió darme una oportunidad laboral para colaborar en el desarrollo de un proyecto para la intranet del SENA",
      imgUrl: projImg5,
    },
    {
      title: "Chat en tiempo real",
      description: "He desarrollado un aplicativo web que te permite Chatear en tiempo real con cualquier persona!",
      imgUrl: ChatApp,
    },
    {
      title: "Ecommerce",
      description: "Trabajé en un desarrollo de un eccomerce Moderno, el cual funciona con Sockets para mostrar todo en tiempo real, y a su vez contiene El Checkout de MercadoPago",
      imgUrl: Swatch,
    },
    {
      title: "Admin Dashboard Swatch",
      description: "A su vez el ecommerce fue desarrollado con ReactJS, NodeJs, express, MongoDB y Socket.IO",
      imgUrl: Admin,
    },
    {
      title: "Mapas App",
      description: "He trabajado en un proyecto con el objetivo de mostrar en tiempo real Puntos especificos en un Mapa, utilizando Mapbox, React y Socket.IO",
      video: MapApp,
    },

  ];

  const MobilProjects = [
    {
      title: "PokeDex",
      description: "He trabajado en un desarrollo de un Aplicativo movil en React Native con TypeScript Pronto disponible en PlayStore",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="Proyectos">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>Aquí podrás encontrar algunos proyectos en los que he trabajado en distintas oportunidades, en donde he forjado mi experiencia en cuanto al desarrollo</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Movil</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Skills</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map( ( project, index ) => {
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
                      <Row>
                        {
                          MobilProjects.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <ul style={{ display: 'flex', flexDirection: 'column', justifyContent:'center' }}>
                        <li>
                          <h5>
                            Aprendizaje Rapido y adaptativo
                          </h5>
                        </li>
                        <li>
                          <h5>
                            Agilidad para elaborar y proponer ideas
                          </h5>
                        </li>
                        <li>
                          <h5>
                          Liderazgo, perseverancia, esfuerzo, dedicación y respeto
                          </h5>
                        </li>
                        <li>
                          <h5>
                          Habilidad con instrumentos músicales
                          </h5>
                        </li>
                        <li>
                          <h5>
                          Trabajo bajo presión
                          </h5>
                        </li>
                        <li>
                          <h5>
                          Habilidad de aprender tecnologías nuevas en poco tiempo
                          </h5>
                        </li>
                        <li>
                          <h5>
                          Nivel de Inglés Actual B2
                          </h5>
                        </li>
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={ colorSharp2 } alt='Bg2'></img>
    </section>
  )
}
