import React from 'react';
import {connect} from 'react-redux';
import {updateArticle} from '../actions';
// import {Link} from 'react-router-dom';


class ArticleEdit extends React.Component {

    componentDidMount() {
        console.log(this.props.article);
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const id = this.props.article.id;
        const first_name = this.state.first_name ? this.state.first_name : this.props.article.first_name;
        const last_name = this.state.last_name ? this.state.last_name : this.props.article.last_name;
        const email = this.state.email ? this.state.email : this.props.article.email;
        const article = {id: id, first_name: first_name, last_name: last_name, email: email}
        this.props.updateArticle(article);
    };

    handleCancel = () => {
        this.props.history.push(`/contact/`);
    };

    render() {
        console.log(this.props.article);
        return (

            <div>
                <h1>Edit</h1>
                <form >
                    <div className="form-group">
                        <label>First Name</label>

                        <input type="text" name="first_name" defaultValue={this.props.article.first_name}
                               onChange={this.handleChange} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" name="last_name" defaultValue={this.props.article.last_name}
                               onChange={this.handleChange} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" defaultValue={this.props.article.email}
                               onChange={this.handleChange} className="form-control"/>
                    </div>
                    <div className="btn-group">
                        {/*<Link className="btn btn-dark" to={`/contact/`}>Update</Link>*/}
                        <button type="button" onClick={this.handleSubmit} className="btn btn-dark">Update</button>
                        <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    console.log(props.match.params.id);
    return ({article: state.articles.find(contact => contact.id === +props.match.params.id)});
};

const mapDispatchToProps = {updateArticle};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEdit);