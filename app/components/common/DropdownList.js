import React from 'react';
import PropTypes from 'prop-types';
import {DropdownButton, MenuItem} from "react-bootstrap";

class DropdownList extends React.Component {
  renderItems = items => items.map(i => (
      <MenuItem key={i.value} eventKey={i.value} onSelect={this.onItemSelected}>
        {i.name}
      </MenuItem>
    ));

  onItemSelected = eventKey => {
    if(this.props.onItemSelected) this.props.onItemSelected(eventKey);
  };

  render() {
    return (
      <div>
        <DropdownButton title={this.props.selectedItem}>
          {this.props.items && this.renderItems(this.props.items)}
        </DropdownButton>
      </div>
    );
  }
}

DropdownList.propTypes = {
  selectedItem: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  })),
  onItemSelected: PropTypes.func
};

DropdownList.defaultProps = {
  selectedItem: 'Select...'
};

export default DropdownList;
