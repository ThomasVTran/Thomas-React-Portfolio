import Card from 'react-bootstrap/Card';

function Project(props) {
    return (
        <div>
            <h1>Portfolio</h1>
            {props.projects.map(project => (
                <p className='card' key={project.title}>
                    <Card className="bg-dark text-blue min-width:300px" style={{ width: '30rem' }}>
                        <Card.Title className="bg-dark text-white">{project.title}</Card.Title>
                        <Card.Body>
                            <Card.Img src={project.image} alt={project.title} />
                            <Card.Link className="bg-dark text-white" href={project.hubLink} target="blank">
                                {project.hub}
                            </Card.Link>
                            <Card.Link className="bg-dark text-white" href={project.deployedLink} target="blank">
                                {project.deployed}
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </p>
            ))}
        </div>
    );
}

export default Project;