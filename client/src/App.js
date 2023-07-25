
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from "./components/messenger" ;

import AccountProvider from "./context/AccountProvider" ;

function App() {

  const clientId = '853540265166-334rm0f3le469bt3r6uvepmbci1itdgs.apps.googleusercontent.com' ; 
  return (
    <GoogleOAuthProvider clientId={clientId}>
    <AccountProvider>
     <Messenger/>
     </AccountProvider>
     </GoogleOAuthProvider>
  );
}

export default App;
