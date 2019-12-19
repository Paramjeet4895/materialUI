import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import { connect } from 'react-redux'
import { signOut, deleteMe, resetProductData} from '../actions';
import MyProducts from './MyProducts';
import StepperHome from './StepperHome';
import UserProfile from './UserProfile';
import UpdateUser from './UpdateUser'
import history from './History'
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
         
                Your Website{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

function Dashboard(props) {
    // const token = localStorage.getItem('usertoken') 
    // console.log('localstorage'+token);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [myProduct, setMyProduct] = React.useState(true);
    const [addProduct, setAddProduct] = React.useState(false);
    const [userProfile, setUserProfile] = React.useState(false);
    const [userUpdate, setUserUpdate] = React.useState(false);
    const [updateProductid, setUpdateProductid] = React.useState('');

    
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const onSignOut = async (event) => {
        event.preventDefault();
        props.signOut();
    };
    const onAddProduct = (val) => {
        setUpdateProductid(val)
        setMyProduct(false);
        setAddProduct(true);
        setUserProfile(false);
        setUserUpdate(false);
    }
    const onMyProduct = () => {
        setMyProduct(true);
        setAddProduct(false);
        setUserProfile(false);
        setUserUpdate(false);
    }
    const onUserProfile = () => {
        setMyProduct(false);
        setAddProduct(false);
        setUserProfile(true);
        setUserUpdate(false);
    }
    const onUserUpdate = () => {
        setMyProduct(false);
        setAddProduct(false);
        setUserProfile(false);
        setUserUpdate(true);
    }
    const onUserDelete = () => {
        props.deleteMe()
        history.push("/signin")
   }

    //props.showItems();

    return (

        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Material UI Vendor
          </Typography>
                    <IconButton color="inherit">
                        <Button color="inherit" onClick={onSignOut}>Log Out</Button>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List><div>
                    <ListItem button onClick={onMyProduct}>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="My Products" />
                    </ListItem>
                    <ListItem button onClick={onAddProduct} >
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add Product" />
                    </ListItem>
                </div></List>
                <Divider />
                <List><div>
                    <ListSubheader inset>My Profile</ListSubheader>
                    <ListItem button
                        onClick={onUserProfile}
                    >
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="View Profile" />
                    </ListItem>
                    <ListItem button
                        onClick={onUserUpdate}
                    >
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Update Profile" />
                    </ListItem>
                    <ListItem button
                        onClick={onUserDelete}
                    >
                        <ListItemIcon>
                            <LayersIcon />
                        </ListItemIcon>
                        <ListItemText primary="Delete Account" />
                    </ListItem>
                </div></List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid item xs={12} md={12} lg={12}>
                        {myProduct ? (
                            <MyProducts AddProduct={onAddProduct} />
                        ) :
                            addProduct ? 
                                <StepperHome productid={updateProductid} MyProducts={onMyProduct} /> 
                         
                                :
                                userProfile ? (
                                    <UserProfile />
                                ) : userUpdate ? (
                                        <UpdateUser MyProfile={onUserProfile}/>
                                ) :
                                        null
                        }

                    </Grid>
                </Container>
                <Copyright />
            </main>
        </div>
    );
}

export default connect(
    null,
    { signOut, deleteMe, resetProductData}
)(Dashboard);