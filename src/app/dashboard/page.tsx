import React, { useState } from 'react'
import SidebarWithHeader from '@/components/DashbSidebar'
import BasicStatistics from '@/components/Chart'


export default function page() {
  return (
    <>
      <SidebarWithHeader />
      <BasicStatistics/>

    </>
  )
}
