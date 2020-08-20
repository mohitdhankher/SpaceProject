/**
 *
 * LoginPage
 *
 */

import React, {memo, useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import  {makeSelectLoginUserCred} from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import {email, login_User, password} from "./actions"
import {useInjectSaga} from "../../utils/injectSaga";
import {useInjectReducer} from "../../utils/injectReducer";

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
        margin: theme.spacing(5, 0, 2),
    },

}));

export function LoginPage({LoginUser, Email, Password, UserCred}) {

    useInjectReducer({ key: "loginPage", reducer });
    useInjectSaga({ key: "loginPage", saga });

    const classes = useStyles();

    const [email, setEmail] = useState({value : '', isValid : true, errorText : ''});
    const [password, setPassword] = useState({value : '', isValid : true, errorText : ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        validate();
        LoginUser();
    }

    const handleEmailChange = (e) => {
        Email(e.target.value);
        setEmail({ value : e.target.value, isValid : true, errorText : ''});
    }

    const handlePasswordChange = (e) => {
        Password(e.target.value);
        setPassword({ value : e.target.value, isValid : true, errorText : ''});
    }

    const validate = () => {
        //const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(UserCred.userID.trim() === '') {
            setEmail({ value : '', isValid : false, errorText : "Email is Required"});
        }
        // else if (reg.test(UserCred.userID) === false)
        // {
        //     setEmail({ value : '', isValid : false, errorText : "Please enter correct Email"});
        // }
        if(UserCred.password.trim() === '') {
            setPassword( { value : '', isValid : false, errorText : "Password is Required"});
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email.value}
                        onChange={handleEmailChange}
                        error={!email.isValid}
                        helperText={email.errorText}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        password={password.value}
                        onChange={handlePasswordChange}
                        error={!password.isValid}
                        helperText={password.errorText}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );
}

LoginPage.propTypes = {
    LoginUser: PropTypes.func,
    Email: PropTypes.func,
    Password: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
    UserCred: makeSelectLoginUserCred()
});

const mapDispatchToProps = (dispatch) => {
    return {
        LoginUser : ()=> {
            dispatch(login_User())},
        Email : (user) => {
            dispatch(email(user))
        },
        Password : (user) => {
            dispatch(password(user))
        },
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(
    withConnect,
    memo
)(LoginPage);