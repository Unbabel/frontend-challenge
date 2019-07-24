import React from "react";
import FetchDocument from "../static/svg/fetch-document.svg";
import Upload from "../static/svg/upload.svg";

const Header = () => (
  <div className="container">
    <div>Transcriptions</div>
    <div className="icons">
      <FetchDocument />
      <Upload />
    </div>
    <style jsx>
      {`
        .container {
          background: white;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.24),
            0 1px 3px 0 rgba(0, 0, 0, 0.12);
          width: 100%;
          height: 64px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-family: Montserrat;
          font-size: 18px;
          font-weight: 600;
        }

        .icons svg {
          margin-right: 24px;
        }
      `}
    </style>
  </div>
);

export default Header;
