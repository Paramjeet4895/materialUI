import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import DescriptionIcon from '@material-ui/icons/Description';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import { connect } from 'react-redux';
import { resetProductData, updateProduct, createProduct, showProduct } from '../actions'


const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <AddToQueueIcon />,
    2: <DescriptionIcon />,
    3: <CheckCircleIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};


class StepperHome extends React.Component {
  state = { activeStep: 0 }


  steps = ['Enter the Product Category', 'Add Item Description', 'Confirm and Save'];

  componentWillMount() {
    debugger;
    this.props.showProduct(this.props.productid)
    if (typeof (this.props.productid) === "object") {
      this.props.resetProductData();
    }

  }

  getStepContent = (step, props) => {

    switch (step) {
      case 0:
        return <FirstStep proid={this.props.productid} />;
      case 1:
        return <SecondStep />;
      case 2:
        return <ThirdStep />;
      default:
        return 'Unknown step';
    }
  }

  handleNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 })
    if (this.state.activeStep === this.steps.length - 1) {
      if (typeof (this.props.productid) === "string") {
        if (this.props.product.productname  &&
          this.props.product.productitemtype &&
          this.props.product.productcolor  &&
          this.props.product.productprice &&
          this.props.product.productquantity  &&
          this.props.product.productdescription ) {
          this.props.updateProduct(this.props.productid, this.props.product);
          this.props.MyProducts()
        } else {
          alert("All the fields are required")
          this.setState({ activeStep: 2 })
        }
      } else {
        if (this.props.product.productname &&
          this.props.product.productitemtype &&
          this.props.product.productcolor &&
          this.props.product.productprice &&
          this.props.product.productquantity &&
          this.props.product.productdescription ) {
          this.props.createProduct(this.props.product);
          this.props.MyProducts()
          console.log("products", this.props.product)
        } else { 
          alert("All the fields are required")
          this.setState({ activeStep: 2 })
        }

      }
    }
  };

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 })
  }
  handleReset = () => {
    this.setState({ activeStep: 0 });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render(props) {
    console.log("this.props.productid", typeof (this.props.productid))
    return (
      <div >
        <Stepper alternativeLabel activeStep={this.state.activeStep} connector={<ColorlibConnector />}>
          {this.steps.map(label => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {this.state.activeStep === this.steps.length ? (
            <div>
              <Button onClick={this.handleReset}>
                Resubmit
            </Button>
            </div>
          ) : (
              <div>
                <Typography >{this.getStepContent(this.state.activeStep, props)}</Typography>
                <br /><br />
                <div>
                  <Button disabled={this.state.activeStep === 0} onClick={this.handleBack} >
                    Back
                 </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext} >
                    {this.state.activeStep === this.steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { product: state.product.product }
}
export default connect(
  mapStateToProps, { resetProductData, updateProduct, showProduct, createProduct }
)(StepperHome);
