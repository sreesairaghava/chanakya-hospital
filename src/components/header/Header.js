import React, { Component } from 'react';
import {Row,Col,Container} from 'reactstrap';
import {MdPhone} from 'react-icons/md';
import {FaFacebookF,FaInstagram ,FaPinterestP,FaTwitter,FaMapMarkerAlt} from 'react-icons/fa';
class Header extends Component {
    render() {
        return (
        <Container>
              <Row>
              <Col>
                    <Col>
                        <Row>
                            <Col>
                              <FaMapMarkerAlt></FaMapMarkerAlt><span style={{marginLeft:'10px',verticalAlign:'-2px'}}>Rayavaram</span>
                            </Col>
                            <Col>
                                <MdPhone></MdPhone><span style={{marginLeft:'10px',verticalAlign:'-2px'}}>08857-234567</span>
                            </Col>
                        </Row>
                    </Col>
              </Col>


              <Col>
              <FaFacebookF className="iconStyle"></FaFacebookF>
              <FaInstagram className="iconStyle"></FaInstagram>
              <FaPinterestP className="iconStyle"></FaPinterestP>
              <FaTwitter className="iconStyle"></FaTwitter>
              </Col>
              <Col>
                    Test
              </Col>
      
          </Row>
        </Container>
        );
    }
}
export default Header;