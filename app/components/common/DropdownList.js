import React from 'react';
import PropTypes from 'prop-types';
import randomString from 'randomstring';

import {DropdownButton, ButtonToolbar, MenuItem} from "react-bootstrap";

const DEFAULT_SELECTED_VALUE = 'Select...';

class DropdownList extends React.Component {
  renderItems = items => items.map(i => (
      <MenuItem key={i.value} eventKey={i.value} onSelect={this.onItemSelected}>
        {i.name}
      </MenuItem>
    ));

  onItemSelected = eventKey => {
    if(this.props.onItemSelected) this.props.onItemSelected(eventKey);
  };

  getItemNameByValue = (items, selectedItemValue) => {
    const item = items.find(i => i.value === selectedItemValue);
    return item ? item.name : DEFAULT_SELECTED_VALUE;
  };

  getControlId = (id) =>
    !id ? randomString.generate({length: 10, charset: 'alphabetic'}) : id;

  render() {
    return (
      <div>
        <DropdownButton
          id={this.getControlId(this.props.id)}
          title={this.getItemNameByValue(this.props.items, this.props.selectedItem)}>
          {this.props.items && this.renderItems(this.props.items)}
        </DropdownButton>
      </div>
    );
  }
}

DropdownList.propTypes = {
  id: PropTypes.string,
  selectedItem: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  })),
  onItemSelected: PropTypes.func
};

DropdownList.defaultProps = {
  selectedItem: DEFAULT_SELECTED_VALUE,
  items: []
};

export default DropdownList;
