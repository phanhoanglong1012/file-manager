import "./Account.css";

const Account = ({ show, onClose }) => {
    if (!show) return null; // ẩn modal khi chưa mở

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* Avatar */}
                <div className="avatar-container">
                    <img
                        src="https://www.geaves.com/media/catalog/product/cache/43ceea50484a8b0adcb18d996a748113/X/3/X3155_10.jpg"
                        alt="avatar"
                        className="modal-avatar"
                    />
                </div>

                {/* Tên */}
                <span className="modal-user-name">Phan Hoàng Long</span>

                {/* Hàng nút */}
                <div className="actions">
                    <button className="btn btn-light btnDoiMatKhau">
                        <i className="bi bi-lock me-2"></i>
                        <span className="modal-txt-button">Đổi mật khẩu</span>
                    </button>
                    <button className="btn btn-light btnDangXuat">
                        <i className="bi bi-box-arrow-right me-2"></i>
                        <span className="modal-txt-button">Đăng xuất</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Account;
