import React, { Component } from 'reactn';
import PropTypes from 'prop-types';
import PointsForm from '../../components/PointsForm';

export default class Version extends Component {
  render() {
    const { version: { name, versionFields }, fields } = this.props;

    const filteredFields = Object.keys(fields)
      .filter(key => versionFields.includes(key))
      .reduce((obj, key) => {
        const newObj = { ...obj, [key]: fields[key] };
        return newObj;
      }, {});

    const versionData = {
      name,
      fields: filteredFields,
    };
    return <PointsForm versionData={versionData} />;
  }
}

Version.defaultProps = {
  // versionFields: [],
  fields: {},
};

Version.propTypes = {
  version: PropTypes.shape({}).isRequired,
  // name: PropTypes.string.isRequired,
  // versionFields: PropTypes.arrayOf(PropTypes.string),
  fields: PropTypes.shape({}),
};
