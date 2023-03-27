import React, { useState, useEffect } from "react";
// import { Toast } from "bootstrap";

export function ToastComponent() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <img className="rounded mr-2" alt="..." />
          <strong className="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">Hello, world! This is a toast message.</div>
      </div>
    </div>
    // <Toast>
    //   <Toast.Header>
    //     <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
    //     <strong className="me-auto">Bootstrap</strong>
    //     <small>11 mins ago</small>
    //   </Toast.Header>
    //   <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    // </Toast>
  );
}
