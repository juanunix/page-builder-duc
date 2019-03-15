import * as React from 'react'
import { StyledOutlineButton } from '../../styled/button';
import enhanceElement from '../../../Core/enhanceElement';
// import { Button } from 'react-native';
class Button extends React.Component {
    render() {
        return <StyledOutlineButton>Button </StyledOutlineButton>
    }
}

export default enhanceElement(Button)