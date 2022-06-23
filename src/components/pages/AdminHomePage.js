import { Outlet } from "react-router-dom";

function AdminHomePage() {
  return (
    <>
      {/* ----- Container ----- */}
      <div className="container admin-container mt-3">
        <div className="row">
          {/* ----- Sidebar ----- */}
          <div className="col-2 admin-sidebar">
            <p className="desc-text">
              <a
                href="/view-orders"
                style={{ color: "black", textDecoration: "none" }}
              >
                <strong>View orders</strong>
              </a>
            </p>
            <p className="desc-text">
              <a
                href="/manage-products"
                style={{ color: "black", textDecoration: "none" }}
              >
                <strong>Manage products</strong>
              </a>
            </p>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AdminHomePage;
