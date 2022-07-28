import { Component } from "react";
import Button from '@mui/material/Button';
import React from "react";
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import axios from "axios";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { Checkbox } from "@mui/material";
import GridCard from "./GridCard";
import GridCard2 from "./GridCard2";


const fileQuestions = require("../assets/questions.json");
const {quizResults} = require("../assets/QuizResults.js");

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow:"none"
  }));


class Quiz extends Component{
  
   constructor(props){
        super(props)
        this.state = {
            activeStep:0,
            Quiz_Set : fileQuestions.questions,
            booleanonsubmit : false,
            Total:0,
            open:false,
            catchmsg:"",
            errormsg:"",
            o:0,os:"",
            c:0,cs:"",
            e:0,es:"",
            a:0,as:"",
            n:0,ns:"",
            style : {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                stream:[],
                profession:[],
                backgroundColor:"white",
                border: '1px solid #000',
                borderRadius:"10px",
                paddingTop:"30px",
                paddingBottom:"30px",
                textAlign:"center",
                boxShadow: 24,
                p: 4,
               
              },
            score:0,
            showModal:false,
            showResults:false,
            checked:[
                [false,true,false,false,false],
                [true,false,false,false,false],
                [false,false,false,true,false],
                [false,false,false,true,false],
                [true,false,false,false,false],
                [false,false,false,true,false],
                [true,false,false,false,false],
                [false,false,false,true,false],
                [true,false,false,false,false],
                [false,false,false,true,false],
                [true,false,false,false,false],
                [true,false,false,false,false],
                [false,false,false,true,false],
                [true,false,false,false,false],
                [false,false,false,true,false],
                [true,false,false,false,false],
                [true,false,false,false,false],
                [true,false,false,false,false],
                [true,false,false,false,false],
                [true,false,false,false,false],
                [true,false,false,false,false],
                [false,false,false,false,true],
                [false,false,false,true,false],
                [true,false,false,false,false],
                [false,false,false,true,false],
                [true,false,false,false,false],
                [false,false,false,true,false],
                [true,false,false,false,false],
                [false,false,false,true,false],
                [false,false,false,true,false],
                [false,false,false,true,false],
                [false,false,false,true,false],
                [true,false,false,false,false],
                [false,false,false,true,false],
                [true,false,false,false,false],
                [false,false,false,true,false],
                [true,false,false,false,false],
                [true,false,false,false,false],
                [false,false,false,true,false],
                [false,false,false,true,false],
                [false,false,false,false,true],
                [true,false,false,false,false],
                [false,false,false,false,true],
                [true,false,false,false,false],
                [false,false,false,true,false],
                [true,false,false,false,false],
                [false,false,false,true,false],
                [false,false,false,true,false],
                [false,false,false,true,false],
                [false,false,false,true,false],
            ],
        }
        this.opposite = this.opposite.bind(this);
        this.handleClose = this.handleClose.bind(this);
        
        
   }

   

    onInputChange = (index,ans) => {

        this.setState({score:this.state.score+ans})
    }

    onSubmit = () =>{
        let answers = new Array(50);
        
        //creating answer array to send to django
        for(let i=0;i<50;i++)
        {
            answers[i] = 0;
            for(let j=0;j<5;j++)
            {
                if(this.state.checked[i][j])
                {
                    answers[i] = j+1;
                }
            }
        }
        let temp;
        
        temp = (8 + answers[40] - answers[41] + answers[42] - answers[43] + answers[44] - answers[45] + answers[46] + answers[47] + answers[48] + answers[49] )
        
        this.setState({o : temp},()=>{
            if(temp<9)
            {
                this.setState({os:"Poor"})
            }
            else if(temp>=10&&temp<=19)
            {
                this.setState({os:"Average"})
            }
            else if(temp>=20&&temp<=29)
            {
                this.setState({os:"Fair"})
            }
            else{
                this.setState({os:"Great"})
            }
    
        })

        this.setState({c :(14 + answers[30] - answers[31] + answers[32] - answers[33] + answers[34] - answers[35] - answers[36] - answers[37] + answers[38] + answers[39] )},()=>{
            if(this.state.c<9)
            {
                this.setState({cs:"Poor"})
            }
            else if(this.state.c>=10&&this.state.c<=19)
            {
                this.setState({cs:"Average"})
            }
            else if(this.state.c>=20&&this.state.c<=29)
            {
                this.setState({cs:"Fair"})
            }
            else{
                this.setState({cs:"Great"})
            }
        })
       
        this.setState({e : (20 + answers[0] - answers[1] + answers[2] - answers[3] + answers[4] - answers[5] + answers[6] - answers[7] + answers[8] - answers[9])},()=>{
            if(this.state.e<9)
        {
            this.setState({es:"Poor"})
        }
        else if(this.state.e>=10&&this.state.e<=19)
        {
            this.setState({es:"Average"})
        }
        else if(this.state.e>=20&&this.state.c<=29)
        {
            this.setState({es:"Fair"})
        }
        else{
            this.setState({es:"Great"})
        }
        })
        
        this.setState({a : (14 - answers[20] + answers[21] - answers[22] + answers[23] - answers[24] + answers[25] - answers[26] + answers[27] + answers[28] + answers[29])},()=>{
            if(this.state.a<9)
            {
                this.setState({as:"Poor"})
            }
            else if(this.state.a>=10&&this.state.a<=19)
            {
                this.setState({as:"Average"})
            }
            else if(this.state.a>=20&&this.state.a<=29)
            {
                this.setState({as:"Fair"})
            }
            else{
                this.setState({as:"Great"})
            }
        })
       
        this.setState({n : (38 - answers[10] + answers[11] - answers[12] + answers[13] - answers[14] - answers[15] - answers[16] - answers[17] - answers[18] - answers[19])},()=>{
            if(this.state.n<9)
            {
                this.setState({ns:"Poor"})
            }
            else if(this.state.n>=10&&this.state.n<=19)
            {
                this.setState({ns:"Average"})
            }
            else if(this.state.n>=20&&this.state.n<=29)
            {
                this.setState({ns:"Fair"})
            }
            else{
                this.setState({ns:"Great"})
            }
        })

        var response;
        axios({
            method: 'post',
            url: process.env.REACT_APP_TAKE_TEST,
            headers: {
                "Authorization":localStorage.getItem("accessToken")
            }, 
            data:{"data":{"answers":answers}}, // This is the body part
            
          }).then(res=>{
                response = res.data;
                let tempProfession = response.profession;
                let tempState;
                for(let i=0;i<tempProfession[0].length;i++)
                {
                    
                    if(tempProfession[0][i]===true)
                    {
                        let tempState = this.state.profession;
                        if(tempState===undefined)
                        {
                            tempState=[];
                        }
                        let tempString = quizResults.profession[i];
                        tempState.push(tempString);
                        this.setState({profession:tempState})
                    }
                    console.log(tempState)
                }

                 let tempStream = response.stream;
                 for(let i=0;i<tempStream[0].length;i++)
                 {
                     
                     if(tempStream[0][i]===true)
                     {
                         let tempState2 = this.state.stream;
                         if(tempState2===undefined)
                         {
                             tempState2=[];
                         }
                         let tempString =quizResults.stream[i];
                         tempState2.push(tempString);
                         this.setState({stream:tempState2})
                     }
                 }

            });
            
            this.setState({showResults:true},)
       
          
    this.setState({showModal:true})
    }
    handleClose()
    {
        this.setState({showModal:false})
    }

    opposite (event,index1,index2){
        let checkedarray = this.state.checked;
        checkedarray[index1][index2] = !checkedarray[index1][index2];
        if(checkedarray[index1][index2]===true)
        {
            for(let i=0;i<5;i++)
            {
                if(index2===i)
                continue;
                checkedarray[index1][i] = false;
            }
        }
        this.setState({checked:checkedarray});
    }

    

render(){
return(
    <React.Fragment>
            {
                this.state.showResults===false?
                <React.Fragment>
                    <div >
            <div style={{display:"flex",justifyContent:"center"}}  className="Quiz_render_container">
                <div  className="Quiz_container_display"> 
                        <TableContainer component={Paper}>

                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="center">QUESTION</TableCell>
                                 
                                    <TableCell colSpan={3} align="right">INACCURATE</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell colSpan={3} align="center">NORMAL</TableCell>
                                    <TableCell></TableCell>
                                    
                                    <TableCell colSpan={3} align="left">ACCURATE</TableCell>
                                    
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {this.state.Quiz_Set.map((row,index) => (
                                    <TableRow
                                    key={index}
                                    >
                                        
                                            <TableCell align="left">{row}</TableCell>
                                    
                                    <TableCell></TableCell>
                                    <TableCell align="left"><Checkbox checked={this.state.checked[index][0]} onChange={(event)=>this.opposite(event,index,0)} /> </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell align="left"><Checkbox  checked={this.state.checked[index][1]} onChange={(event)=>this.opposite(event,index,1)} /></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell align="left"><Checkbox checked={this.state.checked[index][2]} onChange={(event)=>this.opposite(event,index,2)} /></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell align="left"><Checkbox checked={this.state.checked[index][3]} onChange={(event)=>this.opposite(event,index,3)}/></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell align="left"><Checkbox checked={this.state.checked[index][4]} onChange={(event)=>this.opposite(event,index,4)} /></TableCell>
                                        
                                    </TableRow>
                                
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
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

        <Modal
        open={this.state.showModal}
        onClose={this.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        
      </Modal>
                </React.Fragment>
                :<React.Fragment>
                    <Box >
                        <Typography id="modal-modal-title" style={{textAlign:"center"}} variant="h6" component="h2">
                            Your Score is Validated
                        </Typography>
                        <Paper  style={{textAlign:"center"}}>
                           
                <Accordion >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography> O - Openness &emsp;&emsp; &emsp;&emsp; &emsp; Score:{this.state.o} &emsp;&emsp; Percentile:{2.5*this.state.o}  &emsp;&emsp; Performance:{this.state.os}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                This trait features characteristics such as imagination and insight.1﻿ People who are high in this trait also tend to have a broad range of interests. They are curious about the world and other people and eager to learn new things and enjoy new experiences.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography> C - Conscientousness &emsp; &emsp; Score:{this.state.c} &emsp;&emsp; Percentile:{2.5*this.state.c}  &emsp;&emsp; Performance:{this.state.cs}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Standard features of this dimension include high levels of thoughtfulness, good impulse control, and goal-directed behaviors.1﻿ Highly conscientious people tend to be organized and mindful of details.
                </Typography>
                </AccordionDetails>
      </Accordion>
      <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>  E - Extroversion &emsp;&emsp; &emsp; &emsp; Score:{this.state.e} &emsp;&emsp; Percentile:{2.5*this.state.e}  &emsp;&emsp; Performance:{this.state.es}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Extraversion (or extroversion) is characterized by excitability, sociability, talkativeness, assertiveness, and high amounts of emotional expressiveness.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>  A - Agreeableness &emsp; &emsp; &emsp; Score:{this.state.a} &emsp;&emsp; Percentile:{2.5*this.state.a}  &emsp;&emsp; Performance:{this.state.as}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                This personality dimension includes attributes such as trust, altruism, kindness, affection, and other prosocial behaviors.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>   N - Neuroticism &emsp; &emsp; &emsp; &emsp; Score:{this.state.n} &emsp;&emsp; Percentile:{2.5*this.state.n}  &emsp;&emsp; Performance:{this.state.ns}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                Neuroticism is a trait characterized by sadness, moodiness, and emotional instability.
                </Typography>
                </AccordionDetails>
            </Accordion>
            
          </Paper>
          <Paper style={{padding:"20px",fontSize:"1.3rem",textAlign:"center"}}>
          Other Strong personality traits correlated with you are intellect , ideas , actions , feeling and values.You also have some correlation with impulsiveness and self-consciousness since your answers to the questions were high 
          </Paper>
            
            <Box>
                
                <Box style={{display:"block",marginTop:"20px"}}>
                <Typography style={{textAlign:"center",fontSize:"1.5rem"}}>
                    Suitable Streams for you
                </Typography>
                </Box>
              
               
                {
                    this.state.stream?
                    <Grid container justifyContent="space-evenly" rowSpacing={6} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
                        {
                            this.state.stream?this.state.stream.map(item=>{return(
                                <Grid  item xs="auto">
                                    <Item >
                                        <GridCard name={item.name} image={item.img} description={item.description}/>
                                    </Item>
                                </Grid>)
                            }):""
                        }
                        </Grid>
                    :<div style={{width:"100%",marginTop:"20px",display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
                        <CircularProgress />
                    </div>
                }
                            
            </Box>

            <Box>
          
                <Box style={{display:"block",margin:"10px"}}>
                <Typography style={{textAlign:"center",fontSize:"1.5rem"}}>
                    Suitable Professions for you
                </Typography>
                </Box>
          
               {
                this.state.profession?
                <Grid container justifyContent="space-evenly" rowSpacing={6} columnSpacing={{ xs: 4, sm: 4, md: 4 }}>
                {
                    this.state.profession?this.state.profession.map(item=>{
                        return(
                                <Grid  item xs="auto">
                                    <a href={"./"+item.name} style={{textDecoration:"none"}}>
                                    <Item  >
                                        <GridCard2 style={{color:"black"}} name={item.name} image={item.img} description={item.description}/>
                                    </Item>
                                    </a>
                                </Grid>
                            )
                        }):""
                        
                }
                </Grid>
                :<div style={{width:"100%",marginTop:"20px",display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
                <CircularProgress />
            </div>

               }
                
              
            </Box>
         
        </Box>
                </React.Fragment>
            }
        
        
    </React.Fragment>
 
   )
  }
}

export default Quiz;