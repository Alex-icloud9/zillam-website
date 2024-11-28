import React from 'react';
import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import CancellationRefundPolicy from '@/components/cancellation/CancellationRefundPolicy'; // Adjust path as needed

const CancellationRefundPolicyPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="Cancellation & Refund Policy" title="Cancellation & Refund Policy">
                <CancellationRefundPolicy fullContent={true} />
            </LayoutStyle7>
        </>
    );
};

export default CancellationRefundPolicyPage;
