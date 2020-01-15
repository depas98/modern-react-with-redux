import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
    renderActions() {
        const {id} = this.props.match.params;

        return (
            // this is in place off div tags, use in case div messes 
            // up rendering use this and it doesn't intoduce any HTML
            // You can use this as wrll <> </> this means React.Fragment

            // link is for naviagtion

            <React.Fragment>    
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">
                        Cancel
                </Link>                 
            </React.Fragment>        
        );
    }

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    // onSubmit = formValues => {
    //     console.log(formValues);
    //     this.props.editStream(this.props.match.params.id, formValues);
    // }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }

        return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`
    }

    render() {


        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push("/")}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);