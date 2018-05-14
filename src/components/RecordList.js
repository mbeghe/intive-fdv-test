import React, { Component } from 'react';

import { connect } from 'react-redux';
import { newMessage } from '../redux/actions';
import { compose } from 'redux'; 

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { Paper } from 'material-ui';
import { withStyles } from 'material-ui/styles';

import moment from 'moment';

const styles = theme => ({
    table: {
      cursor: 'pointer'
    }
  });
class RecordList extends Component {
    handleRowClick = (record) => {
        return this.props.dispatch(newMessage(record));
    }
    
    render() {
        const { classes } = this.props;

        return(
            <div>
                <Paper>
                    <Table>
                        <TableHead>
                        <TableRow>
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell>
                                Country
                            </TableCell>
                            <TableCell>
                                Birthday
                            </TableCell>
                        </TableRow>  
                        </TableHead>
                        <TableBody className={ classes.table }>
                            {
                                this.props.recordStore.recordList.map( (record, ix) => {
                                    return(
                                        <TableRow 
                                            key={ix}
                                            hover
                                            onClick= {() => this.handleRowClick(record)}
                                        >
                                            <TableCell>
                                                {record.name} {' '} {record.surname}
                                            </TableCell>
                                            <TableCell>
                                                {record.country}
                                            </TableCell>
                                            <TableCell>
                                                {moment(record.birthday).format('DD-MM-YYYY')}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default compose(
    connect(mapStateToProps, null),
    withStyles(styles)
)(RecordList);