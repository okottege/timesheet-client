import React from 'react';
import PropTypes from 'prop-types';
import randomString from 'randomstring';

import {DropdownButton, Dropdown, ButtonGroup} from "react-bootstrap";
import Styles from '../styles/general';

const DEFAULT_SELECTED_VALUE = 'Select...';

class DropdownList extends React.Component {
  renderItems = items => items.map(i => (
      <Dropdown.Item key={i.value} eventKey={i.value} onSelect={this.onItemSelected}>
        {i.name}
      </Dropdown.Item>
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
      <DropdownButton
        style={Styles.dropDownStyle}
        id={this.getControlId(this.props.id)}
        variant="light"
        title={this.getItemNameByValue(this.props.items, this.props.selectedItem)}>
        {this.props.items && this.renderItems(this.props.items)}
      </DropdownButton>
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
