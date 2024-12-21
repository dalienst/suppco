"use client";
import UpdateWorker from '@/actionForms/workers/UpdateWorker';
import useFetchSiteDetail from '@/dataActions/site-equipment/FetchSiteDetail';
import { useFetchWorkerDetail } from '@/dataActions/workers/workersActions';
import { useRouter } from 'next/navigation';
import React from 'react'

function WorkerDetail({ params: { slug, workerSlug } }) {
    const router = useRouter();

    const { isLoading: siteLoading, data: site, refetch: refetchSite } = useFetchSiteDetail(slug);

    const {
        isLoading: isLoadingWorker,
        data: worker,
        refetch: refetchWorker
    } = useFetchWorkerDetail(workerSlug);


    if (isLoadingWorker || siteLoading) {
        return (
            <section
                className="p-2 mt-3 d-flex justify-content-center align-items-center flex-column"
                style={{ height: "100vh" }}
            >
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </section>
        );
    }

    return (
        <div className="container py-3">
            <div className="card bg-white mt-3">
                <div className="card-header bg-white d-flex justify-content-between align-content-center">
                    <div className="d-flex gap-3 align-items-center flex-row">
                        <button className="btn btn-sm btn-outline-info" onClick={() => router.back()}>
                            <i className="bi bi-box-arrow-left"></i>
                        </button>
                        <h5 className="card-title">{worker?.reference}</h5>
                    </div>
                </div>

                <div className="card-body">
                    <h6 className="card-title">
                        Employee Details
                    </h6>
                    <p className="card-text">
                        <strong>Email:</strong> {worker?.email}
                    </p>
                    {worker?.user?.first_name === null ? (
                        <p className="card-text">
                            Employee has not updated their profile.
                        </p>
                    ) : (

                        <>
                            <p className="card-text">
                                <strong>First Name:</strong> {worker?.user?.first_name}
                            </p>
                            <p className="card-text">
                                <strong>Last Name:</strong> {worker?.user?.last_name}
                            </p>
                            <p className="card-text">
                                <strong>Phone:</strong> {worker?.user?.phone}
                            </p>
                            <p className="card-text">
                                <strong>Identification:</strong> {worker?.user?.identification}
                            </p>
                            <p className="card-text">
                                <strong>KRA Pin:</strong> {worker?.user?.kra_pin}
                            </p>
                            <p className="card-text">
                                <strong>Location:</strong> {worker?.user?.phone}
                            </p>
                        </>
                    )}

                    <UpdateWorker worker={worker} refetchWorker={refetchWorker} reference={site?.reference} />
                </div>
            </div>
        </div>
    )
}

export default WorkerDetail