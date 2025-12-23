const Confirmation = ({
  data,
  onNext,
  onBack,
}: {
  data: any;
  onNext: () => void;
  onBack: () => void;
}) => {
  return (
    <>
      <div>
        <h2>Registration Successful!</h2>
        <p>
          Thank you for registering. A confirmation email has been sent to your
          inbox.
        </p>
      </div>
    </>
  );
};
export default Confirmation;
