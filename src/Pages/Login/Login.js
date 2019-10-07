import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CopyRight from '../CopyRight/CopyRight'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import './Login.css';

class Login extends React.Component {

    render() {
        const form = {
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        };
        const div = {
            width: '100%',
            margin: '100px 16px',
            boxShadow: '0 3px 4px #ccc',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        };
        const submit = {
            margin: '3px 0px 2px'
        };
        const avatar = {
            margin: '1px',
            backgroundColor: '#ff6666',
            alignItems: 'center'
        }
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div style={div}>
                    <Avatar style={avatar}>
                        <LockOutlinedIcon type="colorSecondary" />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                        </Typography>
                    <form className={form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button className={submit}
                            type="submit"
                            
                            variant="contained"
                            color="secondary">
                            Sign In
                            </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                    </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <CopyRight />
                </Box>
            </Container>
        );
    }
}
export default Login;