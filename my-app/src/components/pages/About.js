import React, { useState} from 'react';
import {
  Card,
  CardBody,
  CardImg,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  CardHeader,
  Button
} from 'reactstrap';
import { fetchGiphy } from '../utils/API';

const About = () => {
  const [searchedGiphy, setSearchedGiphy] = useState('');
  const [searchInput, setSearchInput] = useState('');

  // useEffect(() => {
  //   handleSearchGiphy('dog');
  // }, []);

  const handleSearchGiphy = async query => {
    try {
      const response = await fetchGiphy(query);

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
      
      <h1>About Denise</h1>
      <Row>
      <p>
       Denise (Danqi Yin) is a full-stack web developer and also a "software" engineer. She is very into to making this world a better place that she forgets about herself sometimes.
       She used to study environmental science and engineering in the hope of improving the environment. She then worked in the solar industry as a project engineer with a thought to promote renewable energy with sustainble development for the good of people. Now she wants to build her dream on the Internet for the future of both human and nature.
      </p>
      </Row>

      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card body inverse color="info">
            <CardBody>
              <CardHeader tag="h1">Search for a gif to light up your day \(^-^)/:</CardHeader>
              <Form onSubmit={handleFormSubmit}>
                <FormGroup>
                  <Label for="Search" size="lg">
                    Search:
                  </Label>
                  <Input
                    type="text"
                    name="searchInput"
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                  />
                </FormGroup>
                <Button color="danger" type="submit">
                  SUBMIT
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

export default About;