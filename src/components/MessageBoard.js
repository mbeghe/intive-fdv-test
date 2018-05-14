import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { Paper } from 'material-ui';
import Typography from 'material-ui/Typography';
import Fade from 'material-ui/transitions/Fade';
import { withStyles } from 'material-ui/styles';

import { fadeOutMessage } from '../redux/actions';

import moment from 'moment';

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

    calculateDate = (birthDate) => {
        if( birthDate!=null ) {
            let birthMonth = moment(birthDate).format('MMMM');
            let birthDay = moment(birthDate).format('DD');
            let age = moment().year() - moment(birthDate).year() + 1;

            return `On ${birthDay} of ${birthMonth} you will have ${age}.` 
            }else {
                'Missing date values'
            }
    }
    render() {
        const { classes } = this.props;
        const { record } = this.props.messageStore;

        return (
            
            <div>
                <Fade 
                    in={this.props.messageStore.newMessage}
                    timeout={ 1000}
                    onEntered={this.handleFadeOut}
                >
                    <Paper elevation={4} className={classes.paper}>
                        <Typography className={classes.message} variant="subheading">
                            Hello {record.name+' '}{record.surname} from {record.country}. 
                            { this.calculateDate(record.birthday) }
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