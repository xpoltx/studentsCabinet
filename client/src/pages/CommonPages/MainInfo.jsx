import React, { useEffect } from 'react'
import AccountInfoTable from '../../components/Common/AccountInfoTable'
import useFetch from '../../hooks/useFetch'
import { fetchAccountData } from '../../services/userDataService'
import DataLoader from '../../components/Common/DataLoader'
import UserHeader from '../../components/Common/UserHeader'
import ReturnButton from '../../components/Common/ReturnButton'


const MainInfo = () => {
    const user = JSON.parse(localStorage.getItem('User'));
    const userRole = user?.role;
    const userId = user?._id;

    const { data, loading, error } = useFetch(() => fetchAccountData({ role: userRole, id: userId }));

    return (

        <DataLoader loading={loading} error={error} data={data}>
            <div>
                <UserHeader />
                <ReturnButton />
                <AccountInfoTable role={userRole} accountData={data} />
            </div>
        </DataLoader>
    )
}

export default MainInfo