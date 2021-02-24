import React,{useState} from 'react';
import Globalstats from './globalStats';
import Chart from './allconutries';

export default function FullWidthGrid({currentScreen}) {
  
if(currentScreen===0)
{
return <Globalstats />
}
  else if(currentScreen===1)
  {
    return <Chart />
  }
  else {
    return <Globalstats />
  }
}
