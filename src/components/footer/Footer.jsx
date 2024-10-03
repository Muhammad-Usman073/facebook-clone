import React from "react";

const Footer = () => {
    const otherLanguages = [
        ' English (UK)',
        ' اردو',
        'پښتو',
        'العربية',
        'हिन्दी',
        'বাংলা',
        'ਪੰਜਾਬੀ',
        'فارسی',
        'ગુજરાતી',
        'Deutsch',
        'Español',
    ]
    const additionlMenus = ['Sign', 'UpLog', 'inMessengerFacebook', 'LiteWatchPlacesGamesMarketplaceMeta', 'PayOculusPortalInstagramBulletinLocalFundraisersServicesVoting', 'Information', 'CentreGroupsAboutCreate', 'adCreate', 'PageDevelopersCareersPrivacyCookiesAdChoicesTermsHelpContact', 'uploading', 'and', 'non-usersSettings']
    return (
        <div className='di' >
            <div className="py-6 border-2 flex flex-row border-black text-sm pl-8 gap-[8px] text-gray-400">
                <div>{otherLanguages?.map((e) => {
                    return <div className='text-xs text-gray-700 '>{e}</div>;
                })}</div>
                <div
                    className="flex justify-between  px-[7rem] pt-6 text-sm text-gray-400 gap-2 leading-5 ">{additionlMenus.map(e =>
                    <div>{e}</div>)}
                </div>
            </div>
            <span className="ml-[7rem] text-sm text-gray-400 "> Meta © 2022</span>
        </div>
    );
};

export default Footer;
