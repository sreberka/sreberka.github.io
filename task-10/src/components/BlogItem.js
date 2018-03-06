import React from 'react';

class BlogItem extends React.Component {
  constructor(props){
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.delete(this.props.id)
  }

  render() {
    return (
      <div className="item" id={this.props.id}>
        <p className="author">{this.props.name}</p>
        <p className="author-text">{this.props.text}</p>
        <button className="fa fa-times" onClick={this.deleteItem}></button>
        <style jsx>{`
          .item {
            position: relative;
            height: 100px;
            background: rgba(255, 255, 255, 0.5);
            margin-bottom: 20px;
            padding: 20px;
            font-family: 'Nunito', sans-serif;
          }
          .item button {
            position: absolute;
            right: 10px;
            top: 10px;
            font-size: 25px;
            background: transparent;
            border: none;
            cursor: pointer;
          }
          .author {
            font-weight: 600;
            padding-bottom: 10px;
            border-bottom: 1px dashed #000;
          }
          .author-text {
            padding: 5px;
            background: #fff;
          }
        `}
        </style>
      </div>
    );
  }
}

export default BlogItem;
