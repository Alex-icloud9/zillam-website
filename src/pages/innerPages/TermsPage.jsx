import React from 'react';
import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import TermsStyle from '@/components/terms/TermsStyle';

const TermsPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="Terms of Use" title="Terms of Use">
                <TermsStyle fullContent={true} />
            </LayoutStyle7>
        </>
    );
};

export default TermsPage;
