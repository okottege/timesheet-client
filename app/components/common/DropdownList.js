import React from 'react';
import PropTypes from 'prop-types';
import randomString from 'randomstring';

import {DropdownButton, ButtonToolbar, MenuItem} from "react-bootstrap";

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
    if(!items) return undefined;

    const item = items.find(i => i.value === selectedItemValue);
    return item ? item.name : undefined;
  };

  render() {
    return (
      <div>
        <ButtonToolbar>
          <DropdownButton id={this.props.id} title={this.getItemNameByValue(this.props.items, this.props.selectedItem)}>
            {this.props.items && this.renderItems(this.props.items)}
          </DropdownButton>
        </ButtonToolbar>
      </div>
    );
  }
}

DropdownList.propTypes = {
  id: PropTypes.string.isRequired,
  selectedItem: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  })),
  onItemSelected: PropTypes.func
};

DropdownList.defaultProps = {
  id: randomString.generate({length: 10, charset: 'alphabetic'}),
  selectedItem: 'Select...'
};

export default DropdownList;
