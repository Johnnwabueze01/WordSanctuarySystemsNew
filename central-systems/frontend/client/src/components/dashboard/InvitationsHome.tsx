import React from 'react'
import { IoAdd } from "react-icons/io5";
import DashboardNavbar from './DashboardNavbar';
import DashboardWelcomeComponent from './DashboardWelcomeComponent';
import { FaArrowLeft } from "react-icons/fa6";
import InvitationsTable from './InvitationsTable';
import { invitations } from './mock-data/invitations';
import { IoArrowBack } from "react-icons/io5";




const InvitationsHome = () => {
  return (
    <div>
        <DashboardNavbar />
        <DashboardWelcomeComponent username={''} title={''} />
        <div className='mt-10'>
        <IoArrowBack className='h-10 w-20' />

            <h1 className='text-5xl text-center font-bold text-[#3A2D4A]'>Invitations</h1>
            <h2 className='text-2xl text-[#3A2D4A] ml-5 mt-5 font-bold'>New Invite</h2>
            <div className="flex items-center justify-center py-10">
  <div className="flex items-center justify-center h-18 w-24 rounded-3xl border-4 border-[#3A2D4A] ">
    <IoAdd className="h-14 w-14 text-[#3A2D4A] font-bold" />
  </div>
</div>
        </div>
        <div>
            <h1 className='text-2xl text-[#3A2D4A] ml-5 mt-5 font-bold mb-5'>Sent Invites</h1>
            <InvitationsTable invitations={invitations} />
        </div>
    </div>
  )
}

export default InvitationsHome
