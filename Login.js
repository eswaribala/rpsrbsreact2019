import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import {TextField} from "@material-ui/core";


export class Login extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            "userName":"",
            "password":""
        }

    }

    handle=input=>e=>{
        this.setState({[input]:e.target.value})
    }




    render() {

        return(
            <form>
            <fieldset>
            <legend>Login</legend>
            <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
            <TextField id="userName" label="User Name" variant="outlined"  margin="normal"
            onchange={this.handle("userName")}
            />
            </Grid>
            <Grid item xs={12} sm={12}>
            <TextField type="password" id="password" label="Password" variant="outlined"  margin="normal"
            onchange={this.handle("password")}
            />
            </Grid>
            </Grid>




            </fieldset>
            </form>


        );

    }
}
