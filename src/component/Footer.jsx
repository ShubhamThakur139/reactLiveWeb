import React from "react";

function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-light text-center align-items-center">
        <p>
          © {currYear} ShubhamThakur. All Rights Reserved | Terms and Conditions
        </p>
      </footer>
    </>
  );
}

export default Footer;
