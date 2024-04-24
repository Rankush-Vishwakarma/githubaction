import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from '../common/login'
import Registration from '../common/Registration'
import Message from '../common/message'
import Filesub from '../student/Filesub'

//IT20256814 - P.M.Kekulandara
test('check component rendering', () => {
    render(<Login />)
    const loginElement = screen.getByTestId('login-1')
    expect(loginElement).toBeInTheDocument();
});

//IT20226282 - Anudi divarathna
test('check component rendering', () => {
 
    render(<Registration />)
    const regElement = screen.getByTestId('reg-1');
    expect(regElement).toBeInTheDocument();
});

// IT20255824 - S.M.D.N.S.Senarath
test('Should render the message component', () => {
    render(<Message />)
    const msgElement = screen.getByTestId('msg-1')
    expect(msgElement).toBeInTheDocument();
})

//IT20279370 - Hirosha Samarasekara
test('Should Render File sub', () => {
    render(<Filesub />)
    const topicElement = screen.getByTestId('top-1')
    expect(topicElement).toBeInTheDocument();
})