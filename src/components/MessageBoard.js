import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';
import Typography from 'material-ui/Typography';
import Fade from 'material-ui/transitions/Fade';
import { withStyles } from 'material-ui/styles';
import { compose } from 'redux';   
import { fadeOutMessage } from '../redux/actions';

const styles = theme => ({
    root: {
      height: 180,
      margin: theme.spacing.unit
    },
    paper: {
      margin: theme.spacing.unit,
    },
    message: {
        margin: theme.spacing.unit,
      }
  });
class MessageBoard extends Component {
    handleFadeOut = () => {
        return this.props.dispatch(fadeOutMessage());
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
        <Fade 
            in={this.props.messageStore.newMessage}
            timeout={ 1000}
            onEntered={this.handleFadeOut}
        >
          <Paper elevation={4} className={classes.paper}>
            <Typography className={classes.message} variant="headline">
                Hello {this.props.messageStore.record.name}
            </Typography>
          </Paper>
        </Fade>
      </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default compose(
    connect(mapStateToProps),
    withStyles(styles)
)(MessageBoard);