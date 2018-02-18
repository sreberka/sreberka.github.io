import React from 'react';
import BlogItem from './BlogItem';
import Form from './Form';

class Blog extends React.Component {
  constructor(props){
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.state = {
      items: [{name: 'Kate', text: 'text'}, {name: 'Vita', text: 'text'}]
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
    console.log(this.state.items)
  }

  render() {
    let blogItems = this.state.items;
    return (
      <div className="blog">
        {blogItems.map((index) => (
          <BlogItem key={blogItems.indexOf(index)} id={blogItems.indexOf(index)} name={index.name} text={index.text} delete={this.deleteItem} />
        ))}
        <Form add={this.addItem} />
        <style jsx>{`
          .blog {
            background: #ccc;
            padding: 30px;
          }
        `}
        </style>
      </div>
    );
  }
}

export default Blog;




