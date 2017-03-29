import React, { PropTypes } from 'react'
import { withStyles } from '@everydayhero/stranger'
import styles from './styles'

const MetricGroup = ({
  children,
  classNames
}) => (
  <div className={classNames.root}>
    {children}
  </div>
)

MetricGroup.propTypes = {
  /**
  * The metrics to be displayed
  */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,

  /**
  * The color to be used
  */
  foreground: PropTypes.string,

  /**
  * The background color to be used
  */
  background: PropTypes.string,

  /**
  * Custom styles to be applied
  */
  styles: PropTypes.object
}

MetricGroup.defaultProps = {
  styles: {}
}

export default withStyles(styles)(MetricGroup)
