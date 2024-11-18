"use client";
import Link from 'next/link';
import React from 'react'

function ProfileWarning({ profile }) {
    return (
        <>
            {profile?.first_name === null ? (
                <>
                    <section className="mt-3 card shadow text-bg-warning">
                        <div className="card-body">
                            <h5 className="card-title">Welcome</h5>
                            <p className="card-text">
                                Please complete your profile to continue
                            </p>
                            <Link href="/supplier/settings" className="btn supplier-btn">
                                Complete Profile
                            </Link>
                        </div>
                    </section>
                </>
            ) : null}
        </>
    )
}

export default ProfileWarning