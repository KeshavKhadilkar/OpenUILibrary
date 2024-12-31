import React from 'react';
import Link from '../../Components/Link';

export const LinkUsage: React.FC = () => {
    return (
        <div className="link-page">
            <h1>Link Component Variations</h1>
            <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
                External Link
            </Link>
            <Link href="/internal-page" className="internal-link">
                Internal Link
            </Link>
            <Link href="https://example.com" style={{ color: 'red' }}>
                Custom Styled Link
            </Link>
            <Link href="https://example.com" onClick={() => alert('Link clicked!')}>
                Link with Click Handler
            </Link>
        </div>
    );
};
