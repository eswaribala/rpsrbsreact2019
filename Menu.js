import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import Add from '@material-ui/icons/Add';
import Edit from '@material-ui/icons/Edit';
import ViewList from '@material-ui/icons/ViewList';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Menu.css'
import {useParams} from "react-router-dom";
import {AddBlog} from "../addblog/AddBlog";
import queryString from 'query-string'
import {ViewBlog} from "../viewblog/ViewBlog";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other} >
<Box p={3}>{children}</Box>
        </Typography>
);
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    appBar: {
        position: "relative",
        width:400,

    },
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));


export function Menu(props)
{
    var query = window.location.search.substring(1);
    console.log(query)//
    var pair = query.split("=");
    console.log(pair[1]);
    const classes = useStyles();
// Declare a new state variable, which we'll call value"
    const [value, setValue] = React.useState(0);
    const[userName,setuserName]=React.useState(pair[1]);
    //const [firstName, setFirstName] = React.useState(2);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <div className="menu">

            <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example" >
                <Tab label="Add" icon={<Add />} {...a11yProps(0)} />
        <Tab label="Edit" icon={<Edit/>} {...a11yProps(1)} />
        <Tab label="View" icon={<ViewList />} {...a11yProps(2)} />

        </Tabs>

        <TabPanel value={value} index={0}>
           <AddBlog item={userName} />
            </TabPanel>
            <TabPanel value={value} index={1}>
            Edit Blog
            </TabPanel>
            <TabPanel value={value} index={2}>
             <ViewBlog item={userName}/>
            </TabPanel>

    </div>
);



}
