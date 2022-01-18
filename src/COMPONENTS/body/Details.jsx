import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  const x={
    height:"400px",
    cursor:"pointer"
  
}
const y={
  textAlign:'justify'
  
}

  const Details=(props)=>{
      return (
<Card className="mt-4">
        <CardImg style={x}  top width="100%" src={props.name.image } alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.name.name}</CardTitle>
  
          <CardText style={y}  >{props.name.description}</CardText>
        </CardBody>
</Card>
       
      )
  }

export default Details;