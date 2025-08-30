import "./side-bar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const SideBar = ({ setCurrentPage }) => {
    const [showWorkspaces, setShowWorkspaces] = useState(false);
    const [showCategories, setShowCategories] = useState(false);

    const mainItems = [
        { name: "Trang chủ", path: "/TrangChu", iconDefault: "bi-house", iconActive: "bi-house-fill" },
        { name: "Tài liệu của tôi", path: "/TaiLieuCuaToi", iconDefault: "bi-folder", iconActive: "bi-folder-fill" },
        { name: "Thông báo", path: "/ThongBao", iconDefault: "bi-bell", iconActive: "bi-bell-fill" },
    ];

    const workspaces = [
        { name: "Workspace A", path: "/WorkspaceA", iconDefault: "bi-person-workspace", iconActive: "bi-person-workspace" },
        { name: "Workspace B", path: "/WorkspaceB", iconDefault: "bi-person-workspace", iconActive: "bi-person-workspace" },
    ];

    const categories = [
        { name: "Hình", path: "/Hinh", icon: "bi-image" },
        { name: "Videos", path: "/Videos", icon: "bi-film" },
        { name: "Tệp", path: "/Tep", icon: "bi-file-earmark" },
        { name: "Âm thanh", path: "/AmThanh", icon: "bi-music-note" },
        { name: "Chia sẻ", path: "/ChiaSe", icon: "bi-share" },
        { name: "Thùng rác", path: "/ThungRac", icon: "bi-trash" },
    ];

    const bottomItems = [
        { name: "Cài đặt", path: "/CaiDat", icon: "bi-gear" },
        { name: "Trợ giúp", path: "/TroGiup", icon: "bi-question-circle" },
    ];

    return (
        <div className="sidebar bg-light border-end p-3 d-flex flex-column h-100">
            {/* Nội dung trên */}
            <ul className="nav flex-column">
                {mainItems.map((item, idx) => (
                    <li className="nav-item" key={idx}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                            onClick={() => setCurrentPage(item.name)}
                        >
                            {({ isActive }) => (
                                <>
                                    <i className={`bi ${isActive ? item.iconActive : item.iconDefault} me-2`}></i>
                                    <span className="sb-title">{item.name}</span>
                                </>
                            )}
                        </NavLink>
                    </li>
                ))}

                {/* Workspace */}
                <li className="nav-item mt-4">
                    <NavLink
                        to="/Workspace"
                        className={({ isActive }) =>
                            `nav-link d-flex justify-content-between align-items-center ${isActive ? "active" : ""}`
                        }
                        onClick={() => setCurrentPage("Workspace")}
                    >
                        <div className="d-flex align-items-center">
                            <i className="bi bi-diagram-3 me-2"></i>
                            <span className="sb-title">Workspace</span>
                        </div>
                        <i
                            className={`bi ${showWorkspaces ? "bi-chevron-up" : "bi-chevron-down"}`}
                            onClick={(e) => {
                                e.preventDefault(); // chặn đổi route khi bấm icon
                                e.stopPropagation();
                                setShowWorkspaces(!showWorkspaces);
                            }}
                        ></i>
                    </NavLink>
                </li>

                {showWorkspaces && (
                    <ul className="nav flex-column ms-3">
                        {workspaces.map((ws, idx) => (
                            <li className="nav-item" key={idx}>
                                <NavLink
                                    to={ws.path}
                                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                                    onClick={() => setCurrentPage(ws.name)}
                                >
                                    <i className={`bi ${ws.iconDefault} me-2`}></i>
                                    <span className="sb-title">{ws.name}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Danh mục */}
                <li className="nav-item mt-4">
                    <div
                        className="nav-link d-flex align-items-center justify-content-between"
                        role="button"
                        onClick={() => setShowCategories(!showCategories)}
                    >
                        <span className="sb-title">Danh mục</span>
                        <i className={`bi ${showCategories ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                    </div>
                </li>

                {showCategories && (
                    <ul className="nav flex-column ms-3">
                        {categories.map((cat, idx) => (
                            <li className="nav-item" key={idx}>
                                <NavLink
                                    to={cat.path}
                                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                                    onClick={() => setCurrentPage(cat.name)}
                                >
                                    <i className={`bi ${cat.icon} me-2`}></i>
                                    <span className="sb-title">{cat.name}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                )}
            </ul>

            {/* Nội dung dưới cùng */}
            <div className="mt-auto">
                <ul className="nav flex-column">
                    {bottomItems.map((item, idx) => (
                        <li className="nav-item" key={idx}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                                onClick={() => setCurrentPage(item.name)}
                            >
                                <i className={`bi ${item.icon} me-2`}></i>
                                <span className="sb-title">{item.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
