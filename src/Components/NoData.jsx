import { getMessage } from 'Utils';

const NoData = ({ code }) => {
  return <div className="message">{getMessage(code)}</div>;
};

export default NoData;
