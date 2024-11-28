import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home1 from './pages/homePages/Home1';
import Home2 from './pages/homePages/Home2';
import MarketingAgency from './pages/homePages/MarketingAgency';
import Insurance from './pages/homePages/Insurance';
import SoftwareLanding from './pages/homePages/SoftwareLanding';
import SolarEnergy from './pages/homePages/SolarEnergy';
import ProjectPage from './pages/project/ProjectPage';
import ProjectDetailsPage from './pages/project/ProjectDetailsPage';
import AboutUsPage from './pages/innerPages/AboutUsPage';
import TeamPage from './pages/innerPages/TeamPage';
import TeamDetailsPage from './pages/innerPages/TeamDetailsPage';
import PricingPage from './pages/innerPages/PricingPage';
import FaqPage from './pages/innerPages/FaqPage';
import ContactUsPage from './pages/innerPages/ContactUsPage';
import TermsPage from './pages/innerPages/TermsPage';
import CancellationRefundPolicyPage from './pages/innerPages/CancellationRefundPolicyPage';
import EULAPage from './pages/innerPages/EULAPage';
import PrivacyPolicyPage from './pages/innerPages/PrivacyPolicyPage';
import ServicesPage from './pages/servicePages/ServicesPage';
import Service2Page from './pages/servicePages/Service2Page';
import ServiceDetailsPage from './pages/servicePages/ServiceDetailsPage';
import BlogStandardPage from './pages/blogPages/BlogStandardPage';
import BlogWithSidebarPage from './pages/blogPages/BlogWithSidebarPage';
import Blog2ColumnPage from './pages/blogPages/Blog2ColumnPage';
import Blog3ColumnPage from './pages/blogPages/Blog3ColumnPage';
import BlogSinglePage from './pages/blogPages/BlogSinglePage';
import BlogSingleWithSidebarPage from './pages/blogPages/BlogSingleWithSidebarPage';
import NotFoundPage from './pages/innerPages/NotFoundPage';

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home1 />}></Route>
                <Route path='/home2' element={<Home2 />}></Route>
                <Route path='/marketing-agency' element={<MarketingAgency />}></Route>
                <Route path='/insurance' element={<Insurance />}></Route>
                <Route path='/software-landing' element={<SoftwareLanding />}></Route>
                <Route path='/solar-energy' element={<SolarEnergy />}></Route>
                <Route path='/about-us' element={<AboutUsPage />}></Route>
                <Route path='/team' element={<TeamPage />}></Route>
                <Route path='/team-details/:id' element={<TeamDetailsPage />}></Route>
                <Route path='/pricing' element={<PricingPage />}></Route>
                <Route path='/faq' element={<FaqPage />}></Route>
                <Route path='/contact-us' element={<ContactUsPage />}></Route>
                <Route path='/project' element={<ProjectPage />}></Route>
                <Route path="/terms-page" element={<TermsPage />}></Route>
                <Route path="/cancellation-refund-policy" element={<CancellationRefundPolicyPage />}></Route>
                <Route path="/eula" element={<EULAPage />}></Route>
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />}></Route>
                {/* <Route path='/project-details/:id' element={<ProjectDetailsPage />}></Route> */}
                <Route path='/services' element={<ServicesPage />}></Route>
                <Route path='/services-2' element={<Service2Page />}></Route>
                <Route path='/services-details/:id' element={<ServiceDetailsPage />}></Route>
                <Route path='/blog-standard' element={<BlogStandardPage />}></Route>
                <Route path='/blog-with-sidebar' element={<BlogWithSidebarPage />}></Route>
                <Route path='/blog-2-column' element={<Blog2ColumnPage />}></Route>
                <Route path='/blog-3-column' element={<Blog3ColumnPage />}></Route>
                <Route path='/blog-single/:id' element={<BlogSinglePage />}></Route>
                <Route path='/blog-single-with-sidebar/:id' element={<BlogSingleWithSidebarPage />}></Route>
                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
        </>
    );
};

export default Routers;