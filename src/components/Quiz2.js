import { Component } from "react";
import Button from '@mui/material/Button';
import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';


const Quiz_Set = [
    {
        queno:"que_1",
        que : "1) How many sides are equal in a scalene triangle?",
        options : [{que_options: "3" , selected: false},{que_options:"2", selected: false},{que_options:"0", selected: false}],
        ans : "0"
    },
    {
        queno:"que_2",
        que : "2) The angles of a triangle are 90°,35° and 55°.What type of triangle is this?",
        options : [{que_options: "Right Angled" , selected: false},{que_options:"Obtuse Angled", selected: false},{que_options:"Acute Angled", selected: false}],
        ans : "Right Angled"
    },
    {
        queno:"que_3",
        que : "3) The perimeter of an equilateral triangle is 24cm.Length of each side(in cm) is?",
        options : [{que_options: "9" , selected: false},{que_options:"6", selected: false},{que_options:"8", selected: false}],
        ans : "8"
    },
    {
        queno:"que_4",
        que : "4) The sum of angles of a triangle is?",
        options : [{que_options: "90" , selected: false},{que_options:"150", selected: false},{que_options:"180", selected: false}],
        ans : "180"
    },
    {
        queno:"que_5",
        que : "5) A triangle has angles 60°,60° and 60°.State the type of triangle?",
        options : [{que_options: "Isosceles" , selected: false},{que_options:"Equilateral", selected: false},{que_options:"Scalene", selected: false}],
        ans : "Equilateral"
    },
    {
        queno:"que_6",
        que : "6) What is a third angle for a triangle where angle1 = 57° and angle2 = 92° ?",
        options : [{que_options: "45" , selected: false},{que_options:"60", selected: false},{que_options:"31", selected: false}],
        ans : "31"
    },
    {
        queno:"que_7",
        que : "7) Pythagoras theorem is applicable to which type of triangles?",
        options : [{que_options: "Right" , selected: false},{que_options:"Acute", selected: false},{que_options:"Obtuse", selected: false}],
        ans : "Right"
    },
    {
        queno:"que_8",
        que : "8) The triangle which has 2 sides congruent?",
        options : [{que_options: "Equilateral" , selected: false},{que_options:"Isosceles", selected: false},{que_options:"Scalene", selected: false}],
        ans : "Isosceles"
    }
]

class Quiz2 extends Component{

   constructor(props){
        super(props)
        this.state = {
            activeStep:0,
            Quiz_Set : Quiz_Set,
            booleanonsubmit : false,
            Total:0,
            open:false,
            catchmsg:"",
            errormsg:"",
            score:0,
        }
        
   }

    

    onInputChange = (index,ans) => {

        //   const { Quiz_Set } = this.state;
        //     const nexState = Quiz_Set.map(card => {
        //     if (card.queno !== e.target.name) return card;
        //     return {
        //         ...card,
        //         options: card.options.map(opt => {
        //         const checked = opt.que_options === e.target.value;
        //         return {
        //             ...opt,
        //             selected: checked
        //         }
        //         })
        //     }
        //     });
        //     this.setState({ Quiz_Set: nexState })
        this.setState({score:this.state.score+ans})
    }

    onSubmit = () =>{
         //   console.log(this.state.Quiz_Set)
    //      let list = this.state.Quiz_Set ;
    //      let count = 0;
    //      let notattempcount = 0;
     
    //             list.map((item,key)=>{
    //                 item.options.map((anslist,key)=>{
    //                    //  console.log("anslist.selected===>",anslist.selected)
    //                    if(anslist.selected === true){
    //                        if(anslist.que_options === item.ans){
    //                        //   console.log("===>",anslist.que_options,item.ans)
    //                            count = count + 1;
    //                        }
    //                    }else{
    //                     notattempcount = notattempcount + 1
    //                    }
    //                 })
    //               })
          
   
    //    if(notattempcount<=24 && notattempcount>16){
    //           this.setState({booleanonsubmit:false,Total:count})
    //           this.setState({catchmsg:"Please attempt all questions",errormsg:"error",open:true})
    //    }else{
    //        this.setState({booleanonsubmit:true,Total:count})
    //    }
    console.log(this.state.score);
    }


    

render(){
return(
    <React.Fragment>
        <div >
            <div style={{display:"flex",justifyContent:"center"}}  className="Quiz_render_container">
                <div  className="Quiz_container_display"> 
                    {/* {this.state.Quiz_Set.map((item,index)=>{
                        return (
                            <React.Fragment>
                                <div>
                                <div className="Quiz_que">{item.que}</div>
                                    <div className="Quiz_options"> Options are : </div>
                                    {item.options.map((ans,index_ans)=>{
                                        index_ans = index_ans + 1
                                        return (
                                            <div key={index_ans} className="Quiz_multiple_options">
                                                    
                                            
                                                    <input
                                                    key={index_ans}
                                                    type="radio"
                                                    name={item.queno}
                                                    value={ans.que_options}
                                                    checked={!!ans.selected}
                                                    onChange={this.onInputChange}
                                                />
                                                    {index_ans}) {ans.que_options}

                                            </div>
                                            )
                                    })}   
                            </div>
                            <br />
                            </React.Fragment>
                            
                        )
                        })} */}
                        
                                {this.state.Quiz_Set.map((row,index) => (
                                    <React.Fragment>
                                    <p>{row.que}</p>
                                    <p>
                                        ACCURATE
                                        &emsp;
                                        <input onChange={()=>{this.onInputChange(index,5)}} type="radio" />
                                        <input onChange={()=>{this.onInputChange(index,4)}} type="radio" />
                                        <input onChange={()=>{this.onInputChange(index,3)}} type="radio" />
                                        <input onChange={()=>{this.onInputChange(index,2)}} type="radio" />
                                        <input onChange={()=>{this.onInputChange(index,1)}} type="radio" />
                                        &emsp;
                                        INACCURATE
                                    </p>
                                    <br />
                                    </React.Fragment>
                                    
                                    
                                ))}
                             
                </div>
                
            </div>
            <div>
                <Grid container width="100%" justifyContent="center">
                    <Grid item xs="auto">
                    <Button onClick={this.onSubmit} style={{marginTop:"10px"}} variant="contained" color="primary">
                        Submit
                    </Button>
                    </Grid>
                </Grid>
           
            </div>
           
        </div>
       
        
    </React.Fragment>
 
   )
  }
}

export default Quiz2;