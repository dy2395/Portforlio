import React, { useState, useEffect} from 'react';
import {
  Card,
  CardBody,
  CardImg,
  Form,
  FormGroup,
  Input,
  Row,
  Col,
  CardHeader,
  Button,
} from 'reactstrap';
import { fetchgif } from '../utils/API';

const Home = () => {
  const [searchedGiphy, setSearchedGiphy] = useState('');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
     handleSearchGiphy('cute dog');
   }, []);


  const handleSearchGiphy = async query => {
    try {
      const response = await fetchgif(query);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const gif = await response.json();

      setSearchedGiphy(gif.data[0].images.fixed_height.url);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    handleSearchGiphy(searchInput);
  };
  
  return (
    <div>
      
      <div class="container-fluid p-5 text-center">
      <h1>Welcome</h1>
      </div>
      <div class="container-fluid mb-5 text-center">
      <p>
      This is where Denise's virtual dream starts :P
      </p>
      </div>

      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card body className="text-center">
            <CardBody>
              <CardHeader style={{backgroundColor: 'pink'}} tag="h4">Search for a gif to light up your day (^-^):</CardHeader>
              <Form onSubmit={handleFormSubmit}>
                <FormGroup>
                  <Input
                    type="text"
                    name="searchInput"
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                  />
                </FormGroup>
                <Button style={{backgroundColor: '#7cc3ef',border:'none'}} type="submit">
                  Go!
                </Button>
              </Form>
              <br />
              <div>
                {searchedGiphy ? (
                  <CardImg bottom src={searchedGiphy} alt="gif" />
                ) : (
                  'No related GIF yet!'
                )}
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;