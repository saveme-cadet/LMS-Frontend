import { NotValidTodoPage } from 'Components';

const WrongDay = ({ wrongType }) => {
  return <NotValidTodoPage code={wrongType} />;
};

export default WrongDay;
