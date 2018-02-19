import React from 'react';
import BlogItem from './BlogItem';
import Form from './Form';

class Blog extends React.Component {
  constructor(props){
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.filterAuthor = this.filterAuthor.bind(this);
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
    let itemsForFilter = this.state.items;
    let filtered = itemsForFilter.filter(item => item.name === e.target.value);
    this.setState({
      items: filtered
    });
  }

  render() {
    let blogItems = this.state.items;
    return (
      <div className="blog">
        <select onChange={this.filterAuthor}>
          <option>Choose the author</option>
          {blogItems.map((index) => (
            <option>{index.name}</option>
          ))}
        </select>
        {blogItems.map((index) => (
          <BlogItem key={blogItems.indexOf(index)} id={blogItems.indexOf(index)} name={index.name} text={index.text} delete={this.deleteItem} />
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
          }
        `}
        </style>
      </div>
    );
  }
}

export default Blog;
