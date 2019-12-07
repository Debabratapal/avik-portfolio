import { useEffect } from 'react';
import {withRouter} from 'react-router-dom'

const GoTop = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location])

  return props.children
};

export default withRouter(GoTop);