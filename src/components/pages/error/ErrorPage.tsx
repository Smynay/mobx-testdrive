import Typography, {
  TypographyVariants,
} from 'components/atoms/typography/Typography';

/**
 * Renders error page
 */
const ErrorPage: React.FC = () => {
  return (
    <>
      <Typography variant={TypographyVariants.TITLE}>Error</Typography>
    </>
  );
};

export default ErrorPage;
