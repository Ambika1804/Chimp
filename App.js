import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';


class aacfourthExample extends React.Component{
	constructor (props)	{
	super(props);
	this.state = {
		data: 
         [
			
            {
               "id":1,
               "language":"Unix Shell Scripting",
               "expertise":"Low",
			   "Company":"TechMahindra",
				"email":"at106447@techmahindra.com"

            },
            {
               "id":2,
               "language":"PL/SQL",
               "expertise":"Low",
				"Company":"TechMahindra",
				"email":"at106447@techmahindra.com"


            },
            {
               "id":3,
               "language":"Javascript",
               "expertise":"High",
			   	"Company":"Cognizant",
				"email":"ambika.tewari@cognizant.com"


            },
			{
               "id":4,
               "language":"React.js",
               "expertise":"Medium",
			   	"Company":"Adobe",
				"email":"ambika.tewari@adobe.com"


            }	
	]
		
	}
	}
	
	
	renderTableHeader() {
      let header = Object.keys(this.state.data[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }
   
	renderTableData() {
      return this.state.data.map((ambikaData, index) => {
         const { id, language, expertise, Company, email  } = ambikaData //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{language}</td>
               <td>{expertise}</td>
               <td>{Company}</td>
               <td>{email}</td>

            </tr>
         )
      })
   }
	
	render() {
	  var mainDivStyle ={backgroundColor: '#A9A9A9',height:1000}
var table
      return (
         <div id ="mainDiv" style={mainDivStyle}>
			<Logo/>
            <Header/>
            <Content1/>
			<Content2/>
			<table id='tableData'>
               <tbody>
				  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
		<Link/>
         </div>
      );
   }
}

class Logo extends React.Component
{
	render()
	{
		var logoStyle = {textAlignVertical: "center",textAlign: "center"}
		return( 
		<div class="imageClass" style={logoStyle}>
		<img src={logo}  className="App-logo" alt="logo"/>
		{/*this is an example of comments*/}		
		</div>
		);
		
	}
}


class Header extends React.Component
{
	render()
	{
		var mainDivStyle ={backgroundColor: '#F5F5DC',height:1000}
		var headingStyle = {color:'#fa8072',fontSize: 25,textAlignVertical: "center",textAlign: "center"}
		return( 
		<div>
		<h1 style={headingStyle}>Hello Ambika Ankush Chander</h1>
		</div>
		);
		
	}
}




class Content1 extends React.Component
{
	render()
	{
		var paraStyle = {color:'#483d8b',fontSize: 20,textAlignVertical: "center",textAlign: "center"}
		return( 
		<div>
		<p style={paraStyle}>Welcome to world of programming!!</p>
		</div>
		);
		
	}
}


class Content2 extends React.Component
{
	render()
	{
		var paraStyle = {color:'#483d8b',fontSize: 20,textAlignVertical: "center",textAlign: "center"}
		return( 
		<div>
		<p style={paraStyle}>Below are the few programming languages that you already know :</p>
		</div>
		);
		
	}
}

{/*
class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.language}</td>
            <td>{this.props.data.expertise}</td>
			<td>{this.props.data.Company}</td>
			<td>{this.props.data.email}</td>

         </tr>
      );
   }
}
*/}

class Link extends React.Component
{
	render()
	{
		var hyperlinkStyle= {color:'#FF7F50',fontSize: 15,textAlignVertical: "center",textAlign: "center"}
		var paraStyle = {color:'#FF7F50',fontSize: 15,textAlignVertical: "center",textAlign: "center"}

		return( 
		<div>
		<p style={paraStyle}>In this tutorial you will learn about React.js. <a href="https://reactjs.org" target="blank" style={hyperlinkStyle}>  Click here to explore more!</a>
</p>
		</div>
		);
		
	}
}

export default aacfourthExample;
