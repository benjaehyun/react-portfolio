import React from 'react'

export default function BrewistaProjectPage({isMobileMenuOpen}) {
    const paddingTopClass = isMobileMenuOpen ? 'pt-60' : 'pt-24';
    return (
        <div className={`${isMobileMenuOpen}`}>BrewistaProjectPage</div>
    )
}
