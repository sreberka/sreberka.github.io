import React from 'react';
import BlogItem from './BlogItem';
import Form from './Form';

class Blog extends React.Component {
  constructor(props){
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.filterAuthor = this.filterAuthor.bind(this);
    this.showAll = this.showAll.bind(this);
    this.state = {
      items: [{name: 'Kate', text: 'text'}, {name: 'Vita', text: 'text'}],
      authorName: ''
    };
  }

  deleteItem(itemIndex) {
    let afterDelete = this.state.items;
    afterDelete.splice(itemIndex, 1);
    this.setState({items: afterDelete})
  }

  addItem(name, text) {
    let arr = {name: name, text: text};
    this.setState({
      items: [...this.state.items, arr]
    });
  }

  filterAuthor(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      authorName: e.target.value
    });
  }

  showAll() {
    this.setState({
      authorName: ''
    });
  }

  render() {
    let blogItems = this.state.items;
    return (
      <div className="blog">
        <select onChange={this.filterAuthor}>
          <option disabled>Choose the author</option>
          {blogItems.map((index) => (
            <option>{index.name}</option>
          ))}
        </select>
        <button onClick={this.showAll}>Show all</button>
        {blogItems.filter(item => item.name.match(this.state.authorName))
          .map((index, i) => (
            <BlogItem key={i} id={i} name={index.name} text={index.text} delete={this.deleteItem} />
          ))}
        <Form add={this.addItem} />
        <style jsx>{`
          .blog {
            background: #ccc;
            padding: 30px;
            max-width: 1280px;
            margin: 0 auto;
          }

          select {
            margin-bottom: 20px;
            border: none;
            padding: 5px;
            font-family: 'Nunito', sans-serif;
            display: inline-block;
            vertical-align: middle;
          }

          button {
            display: inline-block;
            vertical-align: middle;
            border: 2px solid #000;
            color: #fff;
            background: #000;
            font-size: 15px;
            text-transform: uppercase;
            font-weight: 600;
            padding: 5px 10px;
            margin-left: 5px;
            margin-bottom: 20px;
            cursor: pointer;
          }

          button:hover {
            color: #000;
            background: #fff;
          }
        `}
        </style>
      </div>
    );
  }
}

export default Blog;
