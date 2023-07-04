import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Section.module.css'

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={css.section}>
        <h1>{title}</h1>
        {children}
      </div>
    );
  };
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.string,
};

export default Section;
