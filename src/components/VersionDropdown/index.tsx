import React from 'react';
import { useLocation } from '@docusaurus/router';
import DocsVersionDropdownNavbarItem from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';

export default function VersionDropdown() {
    const location = useLocation();

    if (location.pathname.startsWith('/java')) {
        return (
            <DocsVersionDropdownNavbarItem
                docsPluginId="java"
                dropdownActiveClassDisabled={true}
                dropdownItemsBefore={[]}
                dropdownItemsAfter={[]}
                items={[]}
            />
        );
    }

    if (location.pathname.startsWith('/javascript')) {
        return (
            <DocsVersionDropdownNavbarItem
                docsPluginId="javascript"
                dropdownActiveClassDisabled={true}
                dropdownItemsBefore={[]}
                dropdownItemsAfter={[]}
                items={[]}
            />
        );
    }

    return null;
}