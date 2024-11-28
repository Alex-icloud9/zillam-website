import React from 'react';
import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import PrivacyPolicyStyle from '@/components/privacy/PrivacyPolicyStyle';

const PrivacyPolicyPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="Data Privacy Policy" title="Data Privacy Policy">
                <PrivacyPolicyStyle fullContent={true} />
            </LayoutStyle7>
        </>
    );
};

export default PrivacyPolicyPage;
