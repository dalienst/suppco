"use client";
import { signOut } from "next-auth/react";
import Link from 'next/link';
import React from 'react'

function Navbar() {

    return (
        <nav className="navbar navbar-expand-md rounded shadow bg-white rounded">
            <div className="container-fluid">
                <Link href="/admin" className="navbar-brand">
                    Admin Panel
                </Link>

                <button
                    className="navbar-toggler border-0  text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavbar"
                    aria-controls="collapsibleNavbar"
                >
                    <i className="bi bi-list text-dark"></i>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="collapsibleNavbar"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item supplier-sidebar rounded">
                            <Link href="/admin" className="nav-link text-dark">
                                Dashboard
                            </Link>
                        </li>

                        <li className="nav-item supplier-sidebar rounded">
                            <Link href="/admin/settings" className="nav-link text-dark">
                                Settings
                            </Link>
                        </li>

                        <li className="nav-item">
                            <button
                                onClick={() => signOut()}
                                className="nav-link text-danger"
                            >
                                Sign Out
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar