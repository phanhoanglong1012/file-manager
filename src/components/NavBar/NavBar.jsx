import "./Navbar.css";
import { useState } from "react";
import Account from "../modals/Account/Account";

const NavBar = ({ currentPage }) => {
    const [showAccount, setShowAccount] = useState(false);
    return (
        <>
            <nav className="navbar navbar-expand-lg px-3">
                <span className="navbar-name-page">{currentPage}</span>
                <div className="ms-auto d-flex align-items-center">
                    <button className="btn-tai-len btn btn-primary me-3">
                        <i class="bi bi-upload me-2"></i>
                        <span className="txt-tai-len">Tải lên</span>
                    </button>
                    <div className="d-flex align-items-center cursor-pointer"
                        onClick={() => setShowAccount(true)}
                    >
                        <img
                            src="https://www.geaves.com/media/catalog/product/cache/43ceea50484a8b0adcb18d996a748113/X/3/X3155_10.jpg"
                            alt="avatar"
                            className="rounded-circle me-2"
                        />
                        <span className="user-name">Phan Hoàng Long</span>
                    </div>
                </div>
            </nav>
            {/* Modal Account */}
            <Account show={showAccount} onClose={() => setShowAccount(false)} />
        </>
    );
}

export default NavBar;