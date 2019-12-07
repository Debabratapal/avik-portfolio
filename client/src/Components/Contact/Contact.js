import React from 'react'
import './Contact.css'
import axios from '../../utils/axios';

class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
  }
  handleChange = (e, field) => {
    this.setState({[field]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, message} = this.state;
    let contact = {name,email, message}
    axios.post('/contacts', contact).then(data => {
      console.log(data);
    })
  }

  render() {
  const {name, email, message} = this.state;
  return (
    <div className='rmdb-loginform container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-sm-12 col-md-8 col-lg-5'>
          <form className='form-holder' onSubmit={this.handleSubmit}>
          <div className="form-group">
              <label htmlFor="exampleInputEmail1">Your Name</label>
              <input type="name" value={name} onChange={e => this.handleChange(e, 'name')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"></input>
              <small id="emailHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Your Email Address</label>
              <input type="email" value={email} onChange={e => this.handleChange(e, 'email')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Your Comment</label>
              <textarea value={message}  onChange={e => this.handleChange(e, 'message')} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
              <button type="submit" className="btn btn-success btn-block">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
  }
}

export default Contact;