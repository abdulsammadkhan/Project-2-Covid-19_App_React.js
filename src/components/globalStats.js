import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Line,Bar} from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: 50
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title:{
    color:'blue'
  }
}));

export default function Globalstats() {
  const classes = useStyles();

let [pkdata,setPkdata]=useState({})

  useEffect(()=>{
    const getData=async()=>{
      // try{
        const response=await fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort");
        console.log("Response without .json()==>",response);
        const data=await response.json();
        console.log("Response with .json()==>",data);
        delete data[150].countryInfo;
        setPkdata(data[150]);
        console.log(data[150]);
        // catch(error){
        //   console.log(`Error==> ${error}`);

        // }

    }
    getData()
    .catch((error)=>{
      console.log("Error in file==>",error);
    })
},[])

const linechart=(
  
  <Line 
  data={{
    labels:'',
    datasets:[{
      data:[0,pkdata.cases],
      label:'Cases',
      borderColor:'#3333ff',
      fill:true,
    },{
      data:[0,pkdata.deaths],
      label:'Deaths',
      borderColor:'red',
      fill:true
    },{
      data:[0,pkdata.critical],
      label:'Crictical',
      borderColor:'orange',
      fill:true
    },{
      data:[0,pkdata.recovered],
      label:'Recoverd',
      borderColor:'Green',
      fill:true
    }
  ]
    
  }}
  
  />
);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(pkdata).map((v,i)=>{
          return (
        <Grid item xs={12} sm={4} key={i}>
          <Paper className={classes.paper} elevation={3} >
            <h3 className={classes.title}>{v}</h3>
            <h3>{pkdata[v]}</h3>
            </Paper>
        </Grid>
                  )
                })}
      </Grid>

      <div>
        {linechart}
      </div>
    </div>
  );
}
