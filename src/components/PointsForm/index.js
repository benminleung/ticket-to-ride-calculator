import React, { Component, setGlobal } from 'reactn';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    minWidth: 275,
    padding: '10px 30px',
  },
};

class PointsForm extends Component {
  render() {
    const {
      versionData: { name, fields },
      classes,
    } = this.props;


    return (
      <React.Fragment>
        <h1>{name}</h1>
        <Card className={classes.card}>
          {Object.keys(fields).map(field => (
            <div key={`field-key-${field}`}>
              {fields[field].checkbox ? (
                <FormControlLabel
                  control={
                    <Checkbox
                      id={field}
                      checked={!!this.global.formData[field]}
                      onChange={e => setGlobal({
                        formData: { ...this.global.formData, [e.target.id]: e.target.checked },
                      })
                      }
                      color="primary"/>
                  }
                  label={fields[field].text}/>
              ) : (
                <TextField
                  id={field}
                  label={fields[field].text}
                  type="number"
                  margin="dense"
                  value={this.global.formData[field]}
                  onChange={e => setGlobal({
                    formData: { ...this.global.formData, [e.target.id]: e.target.value },
                  })
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">x{fields[field].unitPoints}pts</InputAdornment>
                    ),
                  }}/>
              )}
            </div>
          ))}
          <div>
            <h4>Points</h4>
            <h1>
              {Object.keys(this.global.formData)
                .filter(field => Object.keys(fields).includes(field))
                .reduce(
                  (acc, field) => this.global.formData[field] * fields[field].unitPoints + acc,
                  0,
                )}
            </h1>
          </div>
        </Card>
        {/* {Object.keys(fields).map(field => (
          <div key={`demo-${field}`}>
            {fields[field].text}: <code>{this.global.formData[field]}</code>
          </div>
        ))} */}
      </React.Fragment>
    );
  }
}

PointsForm.defaultProps = {};

PointsForm.propTypes = {
  versionData: PropTypes.shape({}).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(PointsForm);
