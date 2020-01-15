import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const renderTextField = (
    {input, label, meta: {touched, error}, ...custom},
) => (
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />
);

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const MaterialUiForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props;
    const classes = useStyles();
    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <div style={{display: 'flex'}}>
                <Grid item xs={6} sm={3}>
                    <div>
                        <Field
                            name="ip"
                            component={renderTextField}
                            label="IP Address"
                        />
                    </div>
                    <div>
                        <Field name="addressMask" component={renderTextField} label="Address Mask"/>
                    </div>
                    <div>
                        <Field name="description" component={renderTextField} label="Description"/>
                    </div>
                    <div>
                        <Field name="id" component={renderTextField} label="Vlan id"/>
                    </div>
                    <div style={{marginTop: 20}}>
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                        <Button type="button" variant="contained" color="secondary" onClick={reset}
                                style={{marginLeft: 30}}>Clear
                            Values</Button>
                    </div>
                </Grid>
            </div>
        </form>
    );
};

export default reduxForm({form: 'NetworkForm',})(MaterialUiForm);