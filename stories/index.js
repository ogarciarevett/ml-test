import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';

storiesOf('Button', module)
    .add('With text', () => <Button>Hello Button</Button>)
    .add('With some emoji', () => (
        <Button>
            <span role="img" aria-label="so cool"> 😀 😎 👍 💯 </span>
        </Button>
    ));