import React from 'react';
import {BillboardChart, Spinner} from 'nr1';

export default class HomeNerdlet extends React.Component {
  render() {
    return <BillboardChart fullWidth
    accountId={3774110}
    query={"FROM TestingAutoFeedNR SELECT count(*) AS 'TestingAutoFeedNR count' SINCE 1 DAY AGO"}
    />
  }
}
