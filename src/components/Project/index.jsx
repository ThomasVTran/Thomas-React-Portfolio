import Card from 'react-bootstrap/Card';

function Project(props) {
    return (
        <div>
            <h1>Portfolio</h1>
            {props.projects.map(project => (
                <p className='card' key={project.title}>
                    <Card className="bg-dark text-white max-width:200px" >
                        <Card.Img src={project.image} alt={project.title} />
                        <Card.ImgOverlay>
                            <Card.Title className="bg-dark text-white">{project.title}</Card.Title>
                            <Card.Link className="bg-dark text-white" href={project.hubLink} target="blank">
                                {project.hub}
                            </Card.Link>
                            <Card.Link className="bg-dark text-white" href={project.deployedLink} target="blank">
                                {project.deployed}
                            </Card.Link>
                        </Card.ImgOverlay>
                    </Card>
                </p>
            ))}
        </div>
    );
}

export default Project;