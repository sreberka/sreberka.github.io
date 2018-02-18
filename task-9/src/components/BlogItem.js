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
        <p>{this.props.name}</p>
        <p>{this.props.text}</p>
        <button className="fa fa-times" onClick={this.deleteItem}></button>
        <style jsx>{`
          .item {
            position: relative;
            height: 100px;
            background: yellow;
            margin-bottom: 20px;
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
        `}
        </style>
      </div>
    );
  }
}

export default BlogItem;
