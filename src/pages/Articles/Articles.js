import React from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from "axios";

class Articles extends React.Component {
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: "",

    title: "",
    url: "",
    snippet: "",
    date: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${
          process.env.REACT_APP_NYT_API_KEY
        }`
      )
      .then(res => {
        const articles = res.data;
        console.log(articles);
        this.setState({ articles });
      });
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>NYT React Search</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (required)"
              />
              <Input
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name="startYear"
                placeholder="Start Year (Optional)"
              />
              <Input
                value={this.state.endYear}
                onChange={this.handleInputChange}
                name="endYear"
                placeholder="End Year (Optional)"
              />
              <FormBtn
                disabled={!this.state.topic}
                onClick={this.handleFormSubmit}
              >
                Search NYT
              </FormBtn>
            </form>
            {/* <div>
              <ul>
                {this.state.articles.map(article => (
                  <li>{article.response}</li>
                ))}
              </ul>
            </div> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
