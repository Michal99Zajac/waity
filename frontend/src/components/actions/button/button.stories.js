import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color } from '@storybook/addon-knobs'
import { Button } from './button'

export const stories = storiesOf("actions", module)
stories.addDecorator(withKnobs)
stories.add('button', () => {    
    return <Button onClick={action('button-click')} color={color("color", 'green')} msg={text("msg", "click me!")}></Button>
})