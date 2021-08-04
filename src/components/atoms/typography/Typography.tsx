import classNames from 'classnames';

import './Typography.scss';

export enum TypographyVariants {
  TITLE = 'title',
  SUBTITLE = 'subtitle',
  TEXT = 'text',
}

export enum TypographyAlign {
  CENTER = 'center',
  RIGHT = 'right',
  LEFT = 'left',
}

type PropTypes = {
  children: React.ReactText;
  variant?: TypographyVariants;
  align?: TypographyAlign;
};

/**
 * Renders text block by variant
 */
const Typography: React.FC<PropTypes> = ({ variant, children, align }) => {
  const getAdditions = classNames('typography', `typography_${variant}`, {
    [`typography_${align}`]: align,
  });

  switch (variant) {
    case TypographyVariants.TITLE:
      return <h1 className={getAdditions}>{children}</h1>;

    case TypographyVariants.SUBTITLE:
      return <h3 className={getAdditions}>{children}</h3>;

    case TypographyVariants.TEXT:
    default:
      return <p className={getAdditions}>{children}</p>;
  }
};

export default Typography;
