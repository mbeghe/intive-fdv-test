import React, { Component } from 'react';
import InputForm from './InputForm';

import Grid from 'material-ui/Grid';


class App extends Component {
    render() {
        return(
            <div>
                <Grid container justify='center'>
                    <Grid item xs={2}>
                        <InputForm />
                    </Grid>
                    <Grid item xs={2}>
                        <InputForm />
                    </Grid>
                </Grid>
                <Grid container justify='flex-end' direction='column'>
                    <Grid item xs={6}>
                        <InputForm />
                    </Grid>
                    <Grid item xs={6}>
                        <InputForm />
                    </Grid>
                    <Grid item xs={12}>
                        <InputForm />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default App;