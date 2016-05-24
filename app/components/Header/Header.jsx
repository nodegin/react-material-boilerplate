import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

export default class Header extends React.Component {
  icons = ['mdi-access-point', 'mdi-account-alert', 'mdi-apple-mobileme']
  index = 0

  getRandomIcon() {
    return this.icons[(this.index = ++this.index % this.icons.length)];
  }

  constructor(props) {
    super(props);

    this.state = {
      icon: this.getRandomIcon()
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        icon: this.getRandomIcon()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <AppBar
        title="React Material Boilerplate"
        iconElementLeft={<IconButton iconClassName={this.state.icon} />} />
    );
  }
}
