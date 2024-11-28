import React from 'react';
import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import EULATermsStyle from '@/components/EULAStyle/EULAStyle'; // Assuming you will create this component to render EULA content

const EULAPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="End User License Agreement" title="End User License Agreement">
                <EULATermsStyle fullContent={true} />
            </LayoutStyle7>
        </>
    );
};

export default EULAPage;