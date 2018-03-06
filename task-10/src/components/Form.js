import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleText = this.handleText.bind(this);
    this.state = {
      name: '',
      text: ''
    }
  }

  handleName(event) {
    this.setState({name: event.target.value});
  }

  handleText(event) {
    this.setState({text: event.target.value});
  }

  addItem(e) {
    e.stopPropagation();
    e.preventDefault();
    if(this.state.name && this.state.text){
      this.props.add(this.state.name, this.state.text);
      this.setState({name: '', text: ''})
    }
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleName} />
        <textarea placeholder="Text" value={this.state.text} onChange={this.handleText} rows="6"></textarea>
        <button onClick={this.addItem}>Add</button>
        <style jsx>{`
          textarea {
            display: block;
            resize: none;
            width: 100%;
          }
          form {
            font-family: 'Nunito', sans-serif;
          }
          input {
            display: inline-block;
            margin-bottom: 10px;
            width: 20%;
          }
          input, textarea {
            border: none;
            padding: 5px
          }
          button {
            display: inline-block;
            border: 2px solid #000;
            color: #fff;
            background: #000;
            font-size: 15px;
            text-transform: uppercase;
            font-weight: 600;
            padding: 5px 10px;
            margin-top: 10px;
            cursor: pointer;
          }
          button:hover {
            color: #000;
            background: #fff;
          }
          input, textarea, button {
            font-family: 'Nunito', sans-serif;
          }
        `}
        </style>
      </form>
    );
  }
}

export default Form;
