import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Me from '../images/Me.png';


export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        <Container className='' style={{ width: '100%',height: '25rem', objectFit: 'cover'}}>
          <Col xs={6} md={4}>
            <Image src={Me} alt="picture of me" thumbnail />
          </Col>
        </Container>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div >
  );
}
