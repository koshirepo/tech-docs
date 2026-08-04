import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Variables and Data Types',
      items: [
        'variableAndDataTypes/variables',
        'variableAndDataTypes/dataTypes',
        'variableAndDataTypes/builtInConstants'
      ],
    },
  ],
};

export default sidebars;