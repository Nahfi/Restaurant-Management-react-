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
  const Menui=(props)=>{

 
  return(

    <div >
<Card className="mt-4">
        <CardImg style={x}  top width="100%" src={props.name.image } alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.name.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.name.category}</CardSubtitle>
          {/* <CardText style={y}  >{props.name.description}</CardText> */}
          <Button onClick={props.details} >show Details</Button>
        </CardBody>
</Card>
    </div>
  )

  }
export default Menui;
