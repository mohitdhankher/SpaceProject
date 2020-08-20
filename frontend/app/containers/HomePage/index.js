/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, {memo, useEffect} from "react";
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Avatar from '@material-ui/core/Avatar';
//import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useState} from "react";
import { Button, FormGroup, FormControl} from "react-bootstrap";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.mars.com/">
                Mars Inc
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function HomePage() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const classes = useStyles();

    useEffect(() => {
        // const head = document.getElementsByTagName('head');
        const script = document.createElement('script');

        script.innerHTML = 'var _paq = window._paq || [];\n' +
            '/* tracker methods like "setCustomDimension" should be called before "trackPageView" */\n' +
            '_paq.push([\'trackPageView\']);\n' +
            '_paq.push([\'enableLinkTracking\']);\n' +
            '(function() {\n' +
            '    var u="http://vmwl5879:81/";\n' +
            '    _paq.push([\'setTrackerUrl\', u+\'matomo.php\']);\n' +
            '    _paq.push([\'setSiteId\', \'3\']);\n' +
            '    var d=document, g=d.createElement(\'script\'), s=d.getElementsByTagName(\'script\')[0];\n' +
            '    g.type=\'text/javascript\'; g.async=true; g.defer=true; g.src=u+\'matomo.js\'; s.parentNode.insertBefore(g,s);\n' +
            '})();';
        script.type = 'text/javascript';
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        }
    }, []);


    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (email ==="mars@admin" && password === "password") {
            return window.location.href="/Newdashboard"
        }if (email ==="mars1@admin" && password === "password"){
            return window.location.href="/Newdashboard"
        }if (email ==="mars2@admin" && password === "password"){
            return window.location.href="/Newdashboard"
        }
            else alert("Wrong Credentials")
    }

    function handleEmailChange(e) {
        console.log(e.target.value);
        setEmail(e.target.value);
    }




    function handlePasswordChange(e) {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <FormGroup controlId="email" >
                        <Typography>Email</Typography>
                        <FormControl
                            autoFocus
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" >
                        <Typography>Password</Typography>
                        <FormControl
                            value={password}
                            onChange={handlePasswordChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button block disabled={!validateForm} type="submit" >
                        Login
                    </Button>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
  );
}
