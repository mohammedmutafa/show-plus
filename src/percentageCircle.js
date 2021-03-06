import React from 'react';

export default class CircularProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const radius = this.props.radius - this.props.strokeWidth / 2;
    const width = this.props.radius * 2;
    const height = this.props.radius * 2;
    const viewBox = `0 0 ${width} ${height}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * this.props.percentage / 100;

    return (
      <svg
        className="circularProgress"
        width={this.props.radius * 2}
        height={this.props.radius * 2}
        viewBox={viewBox}
      >
        <circle
          className="circularProgressBg"
          cx={this.props.radius}
          cy={this.props.radius}
          r={radius}
          strokeWidth={`${this.props.strokeWidth}px`}
        />
        <circle
          className={this.props.circleClass}
          cx={this.props.radius}
          cy={this.props.radius}
          r={radius}
          strokeWidth={`${this.props.strokeWidth}px`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset
          }}
        />
        <text
          className="circularProgressText"
          x={this.props.radius}
          y={this.props.radius}
          dy=".4em"
          textAnchor="middle"
        >
          {`${this.props.percentage}`}
        </text>
      </svg>
    );
  }
}

CircularProgress.defaultProps = {
  radius: 50,
  percentage: 50,
  strokeWidth: 1
};
