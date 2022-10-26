import { Col } from "react-bootstrap";
import ReactPlayer from 'react-player'

export const ProjectCard = ({ title, description, imgUrl, video }) => {

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {
          ( video )
            ? <ReactPlayer playing width={ 430 } height={ 200 } url={ video } loop stopOnUnmount={false} muted={ true }/>
            : <img src={ imgUrl } alt='Project Card'/>
        }
        <div className="proj-txtx">
          <h4>{ title }</h4>
          <span>{ description }</span>
        </div>
      </div>
    </Col>
  )
}
