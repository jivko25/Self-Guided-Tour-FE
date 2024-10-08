function getStatusColor(status) {
  switch (status) {
    case "Under Review":
      return "#EF831F";
    case "Approved":
      return "#037E00";
    case "Declined":
      return "#E80000";
  }
}

function StatusDot({ status }) {
  return (
    <div
      style={{ backgroundColor: getStatusColor(status) }}
      className={` tablet:hidden rounded-full  h-3 w-3`}
    ></div>
  );
}

export default StatusDot;
