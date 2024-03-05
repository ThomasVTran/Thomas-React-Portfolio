import Card from 'react-bootstrap/Card';

export default function Portfolio(props) {
  return (
    <div>
      <h1>Portfolio</h1>
      <p className='card'>
        {props.projects.map(project => (
          <Card className="bg-dark text-white" key={project.title}>
            <Card.Img src={project.image} alt={project.title}/>
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
        ))}
      </p>
    </div>
  );
}