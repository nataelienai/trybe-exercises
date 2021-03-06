import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  const { content, handleClick } = props;
  return (
    <div className="Item" onClick={ handleClick }>
      {content}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
