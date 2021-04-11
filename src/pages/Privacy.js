import React, {useEffect} from 'react';
import Aux from "../utils/aux";
import CustomHeader from "../components/CustomHeader/CustomHeader";

const Privacy = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <Aux>
            <CustomHeader title={'PRIVACY POLICY'}/>
            <div className='d-flex justify-content-center static-page-bg'>
                <div className='max-width-1000px w-100 font-size-3 py-2'>
                    <div className='font-size-1-4rem font-weight-bold py-2'>PRIVACY POLICY</div>
                    <p className='text-justify'>This privacy policy governs data and information collected by BayFay.
                        It’s a legal binding document between you and BayFay. This term of this privacy policy will be
                        effective upon your acceptance of the same (Directly or indirectly in Electronic form, by
                        clicking on the accept tab or use of this platform or by other means) and will govern the
                        relationship between you and BayFay for your use of the platform.</p>
                    <p className='text-justify'>This Document is published and shall be construed in accordance with the
                        provisions of the information technology (reasonable security practices and procedures and
                        sensitive personal data of information) Rules, 2011 under information technology act, 2000; that
                        require publishing of the privacy policy for collection, use, storage and transfer of sensitive
                        personal data or information.</p>

                    <div className='font-size-1rem font-weight-bold py-2'>Consent</div>
                    <p className='text-justify'>By using the BayFay Platform and the Services, you agree and consent to
                        the collection, transfer, use, storage, disclosure and sharing of your information as described
                        and collected by us in accordance with this Policy. If you do not agree with the Policy, please
                        do not use or access the BayFay Platform.</p>

                    <div className='font-size-1rem font-weight-bold py-2'>Collection of Information</div>
                    <p className='text-justify'>Personal Information is Information collected that can be used to
                        identify or contact You. Personal Information for the purposes of this Privacy Policy shall
                        include, name, address, email address, telephone numbers, date of birth, and other personally
                        identifiable data to manage access to service, administration of orders and invoice, identify
                        prospective users, measure consumer interest in our products and services, inform you about
                        online and offline offers, products, services, and updates; customize your experience.</p>
            
                    <p className='text-justify'>Depending on the Services that you use, and your app settings or device
                        permissions, we may collect your real time information, or approximate location information as
                        determined through data such as GPS, IP address.</p>

                    <p className='text-justify'>We also collect contact information if you choose to upload, sync or import it from a device (such as an address book or call log or SMS log history), which we use for things like to find the invited users by you and the amount which you earned through referral where listed.</p>

                    <p className='text-justify'>At no time will we sell your personal data without your permission
                        unless set forth in this Privacy Policy. The information we receive about you or from you may be
                        used by us or shared by us with our corporate affiliates, dealers, agents, vendors and other
                        third parties, Payment processing companies, delivery partners to help process your request; to
                        comply with any law, regulation, audit or court order; to help improve our website or the
                        products or services we offer; for research; to better understand our customers' needs; to
                        develop new offerings; and to alert you to new products and services (of us or our business
                        associates) in which you may be interested. We may also combine information you provide us with
                        information about you that is available to us internally or from other sources in order to
                        better serve you.</p>
                    <p className='text-justify'>We may disclose personal information if required to do so by law or in
                        the good faith belief that such disclosure is reasonably necessary to respond to subpoenas,
                        court orders, or other legal process. We may disclose personal information to law enforcement
                        offices, third party rights owners, or others in the good faith belief that such disclosure is
                        reasonably necessary to: enforce our Terms or Privacy Policy; respond to claims that an
                        advertisement, posting or other content violates the rights of a third party; or protect the
                        rights, property or personal safety of our users or the general public.</p>
                    <p className='text-justify'>We and our affiliates will share / sell some or all of your personal
                        information with another business entity should we (or our assets) plan to merge with, or be
                        acquired by that business entity, or re-organization, amalgamation, restructuring of business or
                        in the event of bankruptcy. Should such a transaction occur that other business entity (or the
                        new combined entity) will be required to follow this privacy policy with respect to your
                        personal information.</p>

                    <div className='font-size-1rem font-weight-bold py-2'>Device Information</div>
                    <p className='text-justify'>We may collect information about the devices you use to access our
                        Services, including the hardware models, operating systems and versions, software, file names
                        and versions, preferred languages, unique device identifiers, advertising identifiers, serial
                        numbers, device motion information and mobile network information. Analytics companies may use
                        mobile device IDs to track your usage of the BayFay Platform.</p>
                    <p className='text-justify'>BayFay mobile application may also access metadata and other information
                        associated with other files stored on your mobile device. This may include, photographs, audio
                        and video clips, personal contacts and address book information. If you permit the BayFay app to
                        access the address book on your device, we may collect names and contact information from your
                        address book to facilitate social interactions through our services and for other purposes
                        described in this Policy or at the time of consent or collection. If you permit us to access the
                        calendar on your device, we collect calendar information such as event title and description,
                        date and time, location and number of attendees.</p>

                    <div className='font-size-1rem font-weight-bold py-2'>Data storage/Retention</div>
                    <p className='text-justify'>When you communicate with us (via email, phone, through the BayFay
                        Platform or otherwise), we may maintain a record of your communication.</p>
                    <p className='text-justify'>With regard to each of your visits to the BayFay Platform, we will
                        automatically collect and analyze the following demographic and other information.</p>

                    <div className='font-size-1rem font-weight-bold py-2'>Information from other source</div>
                    <p className='text-justify'>We may receive information about you from third parties, such as other
                        users, partners (including ad partners, analytics providers, search information providers), or
                        our affiliated companies or if you use any of the other websites/apps we operate or the other
                        Services we provide. Users of our Ad Services and other third-parties may share information with
                        us such as the cookie ID, device ID, or demographic or interest data, and information about
                        content viewed or actions taken on a third-party website, online services or apps.</p>

                    <div className='font-size-1rem font-weight-bold py-2'>Policy Modification</div>
                    <p className='text-justify'>We reserve the right to modify this privacy policy anytime. It is your
                        responsibility to review periodically for updates/changes. Your continued use of the app
                        following the changes will mean that you accept and agree to the revisions.</p>

                    <div className='font-size-1rem font-weight-bold py-2'>Data Security</div>
                    <p className='text-justify'>We safeguard your privacy using known security standards and procedures
                        and comply with applicable privacy laws. Our app has stringent security measures in place to
                        protect the loss, misuse, and alteration of the information under our control. It combines
                        industry-approved physical, electronic and procedural safeguards to ensure that your information
                        is well protected though it's life cycle in our infrastructure. Sensitive data is decrypted,
                        processed and immediately re-encrypted or discarded when no longer necessary.</p>

                    <div className='font-size-1rem font-weight-bold py-2'>Opt-out</div>
                    <p className='text-justify'>Please email <a
                        href="mailto:support@bayfay.com">support@bayfay.com</a> if you no longer wish to receive any
                        information from us.</p>

                    <div className='font-size-1rem font-weight-bold py-2'>Grievance officer</div>
                    <p className='text-justify'>If you find any discrepancies or grievances in relation to the
                        collection, storage, use, disclosure and transfer of Your Personal Information under this
                        Privacy Policy please contact the following: <a
                            href="mailto:support@bayfay.com">support@bayfay.com</a></p>
                </div>
            </div>
        </Aux>
    );
};

export default Privacy;
