function Spinner() {
  return (
    <div
      className="d-flex justify-content-center align-items-center offcanvas-backdrop show"
      style={{ zIndex: 1100 }}
    >
      <div className="spinner-border"></div>
      <span className="ms-3">Please Wait</span>
    </div>
  );
}

export default Spinner;
