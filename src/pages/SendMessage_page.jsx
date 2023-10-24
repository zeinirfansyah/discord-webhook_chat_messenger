import React, { lazy } from "react";

const Announcement = lazy(() =>
  import("../components/sendmessage_components/Announcement")
);

function SendMessage_page() {
  return (
    <>
      <div className="SendMessage_page">
        <Announcement />
      </div>
    </>
  );
}

export default SendMessage_page;
