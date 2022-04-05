import React from 'react';
import {useEffect, useState } from 'react';
import {LineChart,Line,BarChart, Bar, CartesianGrid, XAxis, YAxis,Tooltip,Legend } from 'recharts';



const Dashboard = () => {
    const [chart,setChart] = useState ([])

  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=> setChart(data))

},[])

    return (
<div className='pt-4 m-4'>
    <h3 className='p-4 fs-4' >Our sell chart</h3>

<BarChart width={730} height={450} data={chart}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis dataKey=""/>
  <Tooltip />
  <Legend />
  <Bar dataKey="sell" fill="#8884d8" />
  <Bar dataKey="revenue" fill="#82ca9d" />
</BarChart>


<h3 className='p-4 fs-4' >Our sell Line chart</h3>

<LineChart width={730} height={250} data={chart}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="sell" dataKey="revenue" stroke="#8884d8" />
  <Line type="month" dataKey="investment " stroke="#82ca9d" />
</LineChart>

</div>


   



    );
 }  

export default Dashboard;