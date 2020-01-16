import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField';
import {RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from '@material-ui/core/styles';

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

const renderCheckbox = ({input, label}) => (
    <Checkbox
        label={label}
        checked={!!input.value}
        onCheck={input.onChange}
    />
);

const renderRadioGroup = ({input, ...rest}) => (
    <RadioButtonGroup
        {...input}
        {...rest}
        valueSelected={input.value}
        onChange={(event, value) => input.onChange(value)}
    />
);

const renderSelectField = (
    {input, label, meta: {touched, error}, children, ...custom},
) => (
    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
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
    handleSubmit();
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
                </Grid>
                <Grid item xs={6} sm={3}>
                    <div>
                        <Field name="description" component={renderTextField} label="Description"/>
                    </div>
                    <div>
                        <Field name="id" component={renderTextField} label="Vlan id"/>
                    </div>
                    <div>
                        <Field name="description" component={renderTextField} label="Vlan description"/>
                    </div>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <div>
                        <Field name="nameServers" component={renderTextField} label="Name Servers"/>
                    </div>
                    <div>
                        <Field name="physicalLocation" component={renderTextField} label="Physical Location"/>
                    </div>
                    <div>
                        <Field name="description" component={renderTextField} label="Location Description"/>
                    </div>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <div>
                        <Field name="description" component={renderTextField} label="Location Description"/>
                    </div>
                    <div>
                        <Field name="isRoutable" component={renderCheckbox} label="Routable"/>
                    </div>
                    <div>
                        <Field name="employed" component={renderCheckbox} label="Employed"/>
                    </div>
                    <div>
                        <Field
                            name="firewallType"
                            component={renderSelectField}
                            label="Firewall Type"
                        >
                            <MenuItem value="PUBLIC" primaryText="Public"/>
                            <MenuItem value="DMZ" primaryText="DMZ"/>
                        </Field>
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

export default reduxForm({form: 'TestForm',})(MaterialUiForm);