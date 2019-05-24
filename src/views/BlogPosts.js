import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";
import { Spin } from "antd";
import { Link } from "react-router-dom";
import PageTitle from "../components/common/PageTitle"; 

class BlogPosts extends React.Component { 
  render() { 
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="My Properties"
            subtitle="Real Estate"
            className="text-sm-left"
          />
        </Row> 
      </Container>
    );
  }
}

export default BlogPosts;
