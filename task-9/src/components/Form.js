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
    this.props.add(this.state.name, this.state.text);
    this.setState({name: '', text: ''})
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleName} />
        <textarea placeholder="Text" value={this.state.text} onChange={this.handleText} cols="6"></textarea>
        <button onClick={this.addItem}>Add</button>
        <style jsx>{`
          textarea {
            display: block;
            resize: none;
            width: 100%;
          }
        `}
        </style>
      </form>
    );
  }
}

export default Form;
