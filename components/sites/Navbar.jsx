"use client"
import useFetchSiteDetail from '@/dataActions/site-equipment/FetchSiteDetail'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";

function Navbar({  slug }) {
    const pathname = usePathname();
    const {
        isLoading: siteLoading,
        data: site,
        refetch: refetchSite,
    } = useFetchSiteDetail(slug)

    return (
        <nav className="navbar navbar-expand-md rounded shadow contractor-sidebar rounded">
            <div className="container-fluid">
                <Link href={`/sites/${slug}/dashboard`} className="navbar-brand text-white">
                    {site?.logo ? (
                        <Image
                            src={site?.logo}
                            alt="logo"
                            className="rounded"
                            width={35}
                            height={35}
                        />
                    ) : (
                        <Image
                            src="/machine.jpg"
                            alt="logo"
                            className="rounded"
                            width={35}
                            height={35}
                        />
                    )}
                </Link>

                <button
                    className="navbar-toggler border-0 text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavbar"
                    aria-controls="collapsibleNavbar"
                >
                    <i className="bi bi-list text-white"></i>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="collapsibleNavbar"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item rounded ">
                            <Link
                                href={`/sites/${slug}/dashboard`}
                                className={`${pathname === `/sites/${slug}/dashboard`
                                    ? "nav-link active text-primary"
                                    : "nav-link text-white"
                                    }`}
                            >
                                Dashboard
                            </Link>
                        </li>

                        <li className="nav-item rounded ">
                            <Link
                                href={`/sites/${slug}/employees`}
                                className={`${pathname === `/sites/${slug}/employees`
                                    ? "nav-link active text-primary"
                                    : "nav-link text-white"
                                    }`}
                            >
                                Employees
                            </Link>
                        </li>

                        <li className="nav-item rounded ">
                            <Link
                                href={`/sites/${slug}/settings`}
                                className={`${pathname === `/sites/${slug}/settings`
                                    ? "nav-link active text-primary"
                                    : "nav-link text-white"
                                    }`}
                            >
                                Settings
                            </Link>
                        </li>

                        <li className="nav-item rounded ">
                            <Link
                                href={
                                    `/contractor/dashboard`
                                }
                                className="nav-link text-danger"
                            >
                                Exit
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar