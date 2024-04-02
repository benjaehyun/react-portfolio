import React from 'react'
import TextSectionComponent from '../../components/LunchbreakComponents/TextSectionComponent'
import TableofContents from '../../components/LunchbreakComponents/TableofContents';
import BackgroundComponent from '../../components/LunchbreakComponents/BackgroundComponent';
import OverviewAndGoalsComponent from '../../components/LunchbreakComponents/OverviewAndGoalsComponent';
import TechnologiesComponent from '../../components/LunchbreakComponents/TechnologiesComponent';

export default function LunchbreakProjectPage({isMobileMenuOpen}) {
    const paddingTopClass = isMobileMenuOpen ? 'pt-60' : 'pt-4';    
    return (
        <>
            <div className={`${paddingTopClass} text-white text-3xl pb-12`}>Lunchbreak</div>
            <TableofContents /> 
            <div id="overview">
                <OverviewAndGoalsComponent />
            </div>
            <div id="technologies">
                <TechnologiesComponent />
            </div>
            <div id="background">
                <BackgroundComponent />
            </div>

        </>
        
    )
}
