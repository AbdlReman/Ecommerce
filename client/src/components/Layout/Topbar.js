import { useState } from "react";

import { Dropdown, DropdownButton } from "react-bootstrap";
import { Button, Modal } from "antd";
import SearchInput from "../Form/SearchInput";
import { NavLink, Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import { FaShoppingCart } from "react-icons/fa";
import logo from "./logo.jpeg";

const Topbar = () => {
  const [cart] = useCart();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="container-fluid d-flex justify-content-between align-items-center mb-2 mb-lg-0">
      <div className="d-flex align-items-center">
        <Button onClick={showModal}>
          <FaSearch />
        </Button>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <SearchInput />
        </Modal>
      </div>
      <div>
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" style={{ height: "150px", width: "150px" }} />
        </Link>
      </div>
      <div className="d-flex align-items-center">
        {/* Display dropdown on small screens */}
        <DropdownButton
          id="social-media-dropdown"
          title=""
          variant="secondary"
          className="d-lg-none"
          onClick={toggleDropdown}
        >
          <Dropdown.Item>
            <FaFacebook className="mx-2" style={{ fontSize: "24px" }} />
            Facebook
          </Dropdown.Item>
          <Dropdown.Item>
            <IoLogoWhatsapp className="mx-2" style={{ fontSize: "24px" }} />
            WhatsApp
          </Dropdown.Item>
          <Dropdown.Item>
            <FaSquareInstagram className="mx-2" style={{ fontSize: "24px" }} />
            Instagram
          </Dropdown.Item>
          <Dropdown.Item>
            <FaLinkedin className="mx-2" style={{ fontSize: "24px" }} />
            LinkedIn
          </Dropdown.Item>
          <Dropdown.Item>
            <Badge count={cart?.length} showZero>
              <NavLink to="/cart" className="nav-link">
                <FaShoppingCart className="mx-2" size={24} />
                Cart
              </NavLink>
            </Badge>
          </Dropdown.Item>
        </DropdownButton>
        {/* Display individual icons on large screens */}
        <div className="d-none d-lg-flex align-items-center">
          <FaFacebook className="mx-2" style={{ fontSize: "24px" }} />
          <IoLogoWhatsapp className="mx-2" style={{ fontSize: "24px" }} />
          <FaSquareInstagram className="mx-2" style={{ fontSize: "24px" }} />
          <FaLinkedin className="mx-2" style={{ fontSize: "24px" }} />
          <Badge count={cart?.length} showZero>
            <NavLink to="/cart" className="nav-link">
              <FaShoppingCart size={24} />
            </NavLink>
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
