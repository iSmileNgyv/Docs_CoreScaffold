"use client";

import { useState } from "react";
import "@/styles/components/sidebar.scss";

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside
            className={`sidebar-wrapper ${collapsed ? "collapsed" : ""}`}
        >
            {/* Workspace info */}
            <div className="workspace-info">
                <div
                    className="workspace-avatar"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgUERcOk1fEfudUapPBjUmpyyBYEv1Q1D1HCkfDDaztiMeQ_oGDfX5XHQwQkZiqEn7dlwpTpsvw3pDIbIhScA9T917HEFb-rfM1ft5AVa7JPI68Po0ogj4FtPatO-6uJBLi85hEGf_IzY0-0Blly2MOw0CTQvquUR22NEQyioKTDk10ZT1JpOpRiZiu3tUl9hS3vLpgcJcWgwM4_EAVb9PA4e-NwYmBP2EYvuby1dUNBOzqwbZUIns1qnISXqpSUH9moHqNIXmBGOs')",
                    }}
                ></div>
                {!collapsed && (
                    <div className="workspace-meta">
                        <h1>My Workspace</h1>
                        <p>Personal Docs</p>
                    </div>
                )}
            </div>

            {/* Navigation */}
            <nav className="nav-section">
                {[
                    { icon: "folder", title: "Project A" },
                    { icon: "folder", title: "APIs" },
                    {
                        icon: "description",
                        title: "Dev Environment Setup",
                        active: true,
                    },
                    { icon: "folder", title: "My Notes" },
                    { icon: "description", title: "Meeting 2024-05-21" },
                ].map((item, i) => (
                    <a
                        key={i}
                        href="#"
                        className={`nav-item ${item.active ? "active" : ""}`}
                    >
            <span className="material-symbols-outlined">
              {item.icon}
            </span>
                        {!collapsed && <p>{item.title}</p>}
                    </a>
                ))}
            </nav>

            {/* Collapse button */}
            <button
                className="collapse-btn"
                onClick={() => setCollapsed(!collapsed)}
            >
        <span className="material-symbols-outlined">
          {collapsed ? "keyboard_double_arrow_right" : "keyboard_double_arrow_left"}
        </span>
                {!collapsed ? 'Collapse sidebar' : ''}
            </button>
        </aside>
    );
}
