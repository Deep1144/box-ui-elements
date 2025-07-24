/**
 * @file Example usage of ContentPicker with select all functionality
 * @author Box
 *
 * Note: The selectAllEnabled feature automatically handles folders with more than 1000 items
 * by fetching all items recursively until all items are loaded.
 */

import React from 'react';
import { IntlProvider } from 'react-intl';
import ContentPicker from './ContentPicker';

// Example: Basic ContentPicker with select all enabled
export const ContentPickerWithSelectAll = () => (
    <IntlProvider locale="en">
        <ContentPicker
            rootFolderId="0"
            token="YOUR_TOKEN_HERE"
            selectAllEnabled={true}
            isPaginationVisible={false}
            onChoose={items => console.log('Selected items:', items)}
            onCancel={() => console.log('Cancelled')}
        />
    </IntlProvider>
);

// Example: ContentPicker with select all and custom max selectable
export const ContentPickerWithSelectAllAndLimit = () => (
    <IntlProvider locale="en">
        <ContentPicker
            rootFolderId="0"
            token="YOUR_TOKEN_HERE"
            selectAllEnabled={true}
            isPaginationVisible={false}
            maxSelectable={10}
            onChoose={items => console.log('Selected items:', items)}
            onCancel={() => console.log('Cancelled')}
        />
    </IntlProvider>
);

// Example: ContentPicker with select all for specific file types only
export const ContentPickerWithSelectAllForFilesOnly = () => (
    <IntlProvider locale="en">
        <ContentPicker
            rootFolderId="0"
            token="YOUR_TOKEN_HERE"
            selectAllEnabled={true}
            isPaginationVisible={false}
            type="file"
            onChoose={items => console.log('Selected files:', items)}
            onCancel={() => console.log('Cancelled')}
        />
    </IntlProvider>
);
