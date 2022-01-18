import React,{Component} from "react";


import DISHES from "../../data"
import Menui from "./MenuItem";
import Details from "./Details";
import Comm from "./comment";
class MenuCard extends Component{


    constructor(props){
        
         super(props)
        this.state={
            dish:DISHES,
            det:null,
            com:null,
          
        }
    }


    dt=(x)=>{

    this.setState({
        det:x,
        com:x.comments
      })
  


    }

    render(){
        

         const menu=this.state.dish.map((item,i)=>{
            
          return (
            <Menui  name={item}
            id={i}
            details={()=>this.dt(item)}
            

             
            />
          )

         })
         let comments=null;
         if(this.state.com!=null){
              comments=this.state.com.map((value)=>{

                return (
                    <Comm name={value}/>
                )
             })
         }
  let n=null
         if(this.state.det!=null){
             n=  < Details name={this.state.det} />
           //  console.log(n)
       }
        return(

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    { menu}
                    </div>
                    <div className="col-lg-6">
                          {n}
                          {comments}
                    </div>
                 
                </div>
            </div>
        )
    }
}


export default MenuCard;