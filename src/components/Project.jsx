import Card from 'react-bootstrap/Card';

function Project(props) {
  return (
    <div>
      {props.projects.map(project => (
        <p className='card' key={project.title}>
          <Card className="bg-dark text-white" >
            <Card.Img src={project.image} alt={project.title} />
            <Card.ImgOverlay>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text href={project.hubLink}>
                {project.hub}
              </Card.Text>
              <Card.Text href={project.deployedLink}>
                {project.deployed}
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </p>
      ))}
    </div>
  );
}

export default Project;