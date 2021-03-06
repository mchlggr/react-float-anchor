/* @flow */

import * as React from 'react';

type Props = {|
  onMount: () => void;
|};

export default class LifecycleHelper extends React.Component<Props> {
  componentDidMount() {
    this.props.onMount();
  }
  render(): React.Node {
    return null;
  }
}
