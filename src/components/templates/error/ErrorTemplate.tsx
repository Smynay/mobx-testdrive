import Typography, {
  TypographyVariants,
} from 'components/atoms/typography/Typography';

/**
 * Renders error pages template
 */
const ErrorPage: React.FC = () => {
  return (
    <>
      <Typography variant={TypographyVariants.TITLE}>Error</Typography>
    </>
  );
};

export default ErrorPage;
