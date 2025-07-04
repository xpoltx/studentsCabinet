import React from 'react'
import UserHeader from '../../components/Common/UserHeader';
import ProfDiscipTable from '../../components/ProfComp/ProfDiscipTable';
import ReturnButton from '../../components/Common/ReturnButton';

function GetRecordsPage() {
    const user = JSON.parse(localStorage.getItem('User'));
    const userId = user?._id;


    return (
        <div>
            <UserHeader />
            <ReturnButton />
            <div className='flex justify-center items-center'>
                <ProfDiscipTable id={userId} act={"rec"} />
            </div>
        </div>
    );
}

export default GetRecordsPage