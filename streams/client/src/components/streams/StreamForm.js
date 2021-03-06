import React from "react";
// reduxForm replaces the maptoProps 
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
    renderError({ error, touched }){
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    // renderInput(formProps) {
    renderInput = ( { input, label, meta } ) => { // destructure input out of formProps
        // console.log(formProps);
        // return (
        //     <input 
        //         onChange={formProps.input.onChange}
        //         value={formProps.input.value}
        //     />
        // );
        // can do this instead

        // console.log(meta);

        const className = `field ${meta.error && meta.touched ? "error" : ""}`;
        return (            
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>                       
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);    // onSubmit is passed down from StreamCreate and StreamEdit
    }

    render() {
        // console.log(this.props);
        return (            
            <form 
                onSubmit={this.props.handleSubmit(this.onSubmit)} 
                className="ui form error"
            >
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>

                <button className="ui button primary">Submit</button>
            </form>
        );
    }    
}

const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = "You must enter a title";
    }

    if (!formValues.description) {
        errors.description = "You must enter a description";
    }

    return errors;
};

export default reduxForm({
    form: "streamForm",        // can be named anything 
    validate
})(StreamForm);