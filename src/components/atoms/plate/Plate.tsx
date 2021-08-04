import './Plate.scss';
import classNames from 'classnames';

type PropTypes = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Renders content visual container
 */
const Plate: React.FC<PropTypes> = ({ children, className }) => {
  return <div className={classNames('plate', className)}>{children}</div>;
};

export default Plate;
