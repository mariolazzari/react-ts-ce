type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "error") {
    message = "Error";
  } else if (props.status === "loading") {
    message = "Loading...";
  } else {
    message = "Success";
  }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};

export default Status;
