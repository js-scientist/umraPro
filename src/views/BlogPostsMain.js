 
import React from "react";
import {
  Container,
  Row, 
} from "shards-react";
import {Spin} from 'antd'; 
import PageTitle from "../components/common/PageTitle"; 

class BlogPostsMain extends React.Component {
   
  render() { 
    return (
      <Container fluid className="main-content-container px-4">
 
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="All Properties" subtitle="Real Estate" className="text-sm-left" />
        </Row>  
       
      </Container>
    );
  }
}

export default BlogPostsMain;
