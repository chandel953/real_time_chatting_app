
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import LoginDialog from "./account/LoginDialog" ;
import ChatDialog from "./chat/chatDialog";

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;
const Header = styled(AppBar)`
    height : 210px ;
    Box-shadow: none ;
`;
const LoginHeader = styled(AppBar)`
    height : 210px ;
    Box-shadow: none ;
`;

const Messenger = () => {

const { account } = useContext(AccountContext);

    return (
                <Component>
            {
                account?
                    <>
                    <LoginHeader>
                            <Toolbar>

                            </Toolbar>
                    </LoginHeader>
                    <ChatDialog/>
                    </>
                :
                <>  
                    <LoginHeader>
                            <Toolbar>

                            </Toolbar>
                    </LoginHeader>
                    <LoginDialog/>
                </>
            }    
        </Component>

    )
}

export default Messenger;