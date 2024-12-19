"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import ContractorLoadingSpinner from '@/components/contractor/LoadingSpinner';
import useFetchSiteDetail from '@/dataActions/site-equipment/FetchSiteDetail';
import FormModals from '@/components/forms/FormModals';
import SendInvite from '@/actionForms/invites/SendInvite';
import WorkersTable from '@/components/workers/WorkersTable';

function SiteEmployees({ params: { slug } }) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const {
        isLoading: siteLoading,
        data: site,
        refetch: refetchSite,
    } = useFetchSiteDetail(slug);

    if (siteLoading) {
        return (<ContractorLoadingSpinner />)
    }

    return (
        <div className="py-3">
            <nav aria-label='breadcrumb'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href={`/sites/${slug}/dashboard`}>Dashboard</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Employees</li>
                </ol>
            </nav>

            <section className="mb-3 mt-3">
                <h3>Employees Management</h3>
                <p>
                    Manage your employees
                </p>
            </section>

            <section className="mb-3 card">
                <div className="card-header bg-white d-flex flex-md-row flex-column justify-content-between">
                    <h5 className="card-title">List</h5>

                    <button onClick={handleShow} className="btn btn-sm btn-outline-info">Invite Employees</button>
                    <FormModals title="Invite Employee" show={show} handleClose={handleClose}>
                        <SendInvite site={site} handleCloseModal={handleClose} />
                    </FormModals>
                </div>

                <div className="card-body">
                    {siteLoading ? (
                        <ContractorLoadingSpinner />
                    ) :
                        site?.site_workers && site?.site_workers?.length > 0 ? (
                            <WorkersTable workers={site?.site_workers} slug={slug} />
                        ) : (

                            <div className="text-center">
                                <h6>You have no Employees</h6>
                            </div>
                        )}
                </div>
            </section>
        </div>
    )
}

export default SiteEmployees