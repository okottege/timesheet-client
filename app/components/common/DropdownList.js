import React from 'react';
import PropTypes from 'prop-types';
import {DropdownButton, MenuItem} from "react-bootstrap";

class DropdownList extends React.Component {
  render() {
    return (
      <div>
        <DropdownButton>
          <MenuItem/>
        </DropdownButton>
      </div>
    );
  }
}

DropdownList.propTypes = {
  items: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  })
};

export default DropdownList;
