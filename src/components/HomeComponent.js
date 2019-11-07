import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Image, Container } from "react-bootstrap";

const HeroSection = () => {
   return (
      <Row className="hero mx-0">
         <Col md={true} className="mx-0 px-0">
            <Image src="./assets/images/heroMen.jpg" alt="Men" fluid />
            <div className="hero-caption d-inline-block mx-auto white fw5">
               MEN
            </div>
         </Col>
         <Col md={true} className="mx-0 px-0">
            <Image src="./assets/images/heroWomen2.jpg" alt="Women" fluid />
            <div className="hero-caption d-inline-block mx-auto white fw5">
               WOMEN
            </div>
         </Col>
      </Row>
   );
};

const MembershipCard = props => {
   return (
      <Col md={true}>
         <Image
            src={props.membership.img}
            alt={props.membership.tagline}
            fluid
         />
         <h2 className="text-center image-subheading-fs">
            {props.membership.tagline}
         </h2>
      </Col>
   );
};

export class Home extends Component {
   render() {
      return (
         <>
            <HeroSection />
            <Container>
               <h5>GYM Membership Programs</h5>
               <Row className="membership">
                  {this.props.membership.map(promotion => (
                     <MembershipCard
                        key={promotion.id}
                        membership={promotion}
                     />
                  ))}
               </Row>
            </Container>
         </>
      );
   }
}

export default Home;
