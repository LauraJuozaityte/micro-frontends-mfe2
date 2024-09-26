import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        background: "aliceblue",
        width: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "dimgray",
      }}
    >
      <h2>This is footer from remote:3001</h2>
    </footer>
  );
};

export default Footer;