import React, { Component } from 'react';

import { connect } from 'react-redux';

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { Paper } from 'material-ui';
class RecordList extends Component {
    render() {
        
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
                        <TableBody>
                            {
                                this.props.recordStore.recordList.map( (record, ix) => {
                                    return(
                                        <TableRow>
                                            <TableCell>
                                                {record.name} {' '} {record.surname}
                                            </TableCell>
                                            <TableCell>
                                                {record.plan}
                                            </TableCell>
                                            <TableCell>
                                                {record.birthday}
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

export default connect(mapStateToProps, null)(RecordList);