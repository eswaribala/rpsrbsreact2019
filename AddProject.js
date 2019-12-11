import React, {Component} from "react";
import axios from 'axios'
import {Fab, Grid, TextField,Select,MenuItem}from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import './AddProject.css'
export class AddProject extends Component
{

    constructor(props)
    {
        super();
        this.state={
            projectId:0,
            projectName:"",
            location:"",
            countries:[]
        }
    }

    componentDidMount() {
        var countriesArr=[];
        axios.get('https://restcountries.eu/rest/v2/all').then(response=>{
            response.data.forEach(data=>{
               countriesArr.push(data.name);
            })
            this.setState({
                countries:countriesArr
            })
          console.log(this.state.countries);
        })

    }
    handle=input=>e=>{
        this.setState({[input]:e.target.value})
    }
    save=(e)=>
    {
        e.preventDefault();
        console.log(this.state);
        /*
        var obj={
            "userName":this.state.userName,
            "password":this.state.password
        }
        axios.post('http://localhost:5000/login/',obj)
            .then(res => {
                //console.log(res.data)
                //console.log(this.state.userName);
                //console.log(res.data[0].userName);
                if(this.state.userName == res.data[0].userName)
                {
                    window.location.href="/project?userName="+this.state.userName;
                }
                else
                    window.location.href="/home";

            });*/
    }

    menuView(data, index){
        return (

            <MenuItem>
            {data}
            </MenuItem>

    )
    }


    render()
    {
        return(
            <form  onSubmit={this.save} style={{ backgroundColor: '#F0F0FF' }}  className="project" >
        <fieldset>
        <legend>Project Information</legend>
        <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
        <TextField id="projectId" type="number" label="Project Id" variant="outlined"  margin="normal"
        onChange={this.handle("projectId")}
        />
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField type="text" id="projectName" label="Project Name" variant="outlined"  margin="normal"
        onChange={this.handle("projectName")}
        />
        </Grid>
         <Grid>
        <Select  value={this.state.location}  onChange={this.handle("location")}
        displayEmpty >
        <MenuItem value="">
        <em>None</em>
        </MenuItem>
        {this.state.countries.map((country, i) => this.menuView(country, i))}
        </Select>
         </Grid>
        </Grid>
        <Fab color="primary" aria-label="add" type="submit" >
        <SaveIcon />
        </Fab>
        </fieldset>
        </form>

        );
    }

}
