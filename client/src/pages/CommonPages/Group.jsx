import React from 'react'
import { useParams } from 'react-router-dom';
import UserHeader from '../../components/Common/UserHeader'
import GroupTable from '../../components/Common/GroupTable'

const Group = () => {

  const { groupName } = useParams();

  return (
    <div>
      <UserHeader />
      <GroupTable groupName={groupName} />
    </div>
  )
}

export default Group