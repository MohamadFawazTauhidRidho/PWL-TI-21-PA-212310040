import React from 'react';

export default function Headers() {
  return (
    <>
      <h1 className="visually-hidden">Headers examples</h1>
      <div>
      <header className="d-flex flex-wrap justify-content-between align-items-center py-3 mb-4 border-bottom" style={{background: 'linear-gradient(to right, #007bff, #00bfff)'}}>
          <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/LOGO_IBIK.png" alt="IBIK Logo" className="me-2" width="40" height="40" />
            <span className="fs-4 navbar-brand text-light fw-bold ">IBI KESATUAN</span>
          </a>
          <ul className="nav nav-pills ms-auto">
            <li className="nav-item">
              <a href="#" className="nav-link text-light">Home</a>
            </li>
            <li className="nav-link text-light " href="#"> -
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-light">PWL</a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}