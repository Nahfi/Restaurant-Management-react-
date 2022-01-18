import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardFooter
  } from 'reactstrap';
  import dateFormat, { masks } from "dateformat";
  const x={
    height:"400px",
    cursor:"pointer"
  
}
const y={
  textAlign:'justify'
  
}
const  Comm=(props)=>{
    return(
        <Card body>
          <CardTitle tag="h5">comment- {props.name.id} from {props.name.author}</CardTitle>
          <CardText>{props.name.comment} ({props.name.rating} *).</CardText>
        
          <CardFooter className="text-muted">{dateFormat(props.name.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</CardFooter>
        </Card>
    )

}

export default Comm;