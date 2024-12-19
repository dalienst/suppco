"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import ContractorLoadingSpinner from '@/components/contractor/LoadingSpinner';
import useFetchSiteDetail from '@/dataActions/site-equipment/FetchSiteDetail';
import FormModals from '@/components/forms/FormModals';
import SendInvite from '@/actionForms/invites/SendInvite';
import WorkersTable from '@/components/workers/WorkersTable';
import SupplierLoadingSpinner from '@/components/supplier/LoadingSpinner';
import UserTable from '@/components/tables/InfoTable';
import { employeeColumn } from '@/data/columns';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';

function SiteEmployees({ params: { slug } }) {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
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
        <div className="p-3">
             <div>
             <div className="flex justify-between my-3">
          <h2 className="text-xl font-semibold">Your Employees</h2>
          <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className='text-blue900 bg-blue-50 border-blue-200'>+ Invite Employee</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Invite employee</DialogTitle>
                      <DialogDescription>Inviting an employee will add them to your dashboard</DialogDescription>
                    </DialogHeader>
                        <SendInvite company={site} handleCloseModal={setOpen} />
                  </DialogContent>
                </Dialog>
        </div>
          {siteLoading ? (
            <SupplierLoadingSpinner />
          ) : site?.site_workers && site?.site_workers?.length > 0 ?  (
            <UserTable rows={site?.site_workers} columns={employeeColumn} redirectLink={`/sites/${slug}/employees/`}/>
          ) : (
            <div className="place-content-center text-center">
              <h6>You have no Employees</h6>
            </div>
          )}
        </div>
        </div>
    )
}

export default SiteEmployees