import { Dialog, Typography, List, ListItem, Box, styled } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { qrCodeImage } from "../../constants/data";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import jwt_decode from "jwt-decode";
import { addUser } from "../../Service/api";

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const QRCOde = styled("img")({
  margin: "50px 0 0 50px",
  height: 264,
  width: 264,
});

const Title = styled(Typography)`
  font-size: 26px;
  margin-bottom: 25px;
  color: #525252;
  font-family: Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu,
    Cantarell, Fira Sans, sans-serif;
  font-weight: 300;
`;

const dialogStyle = {
  marginTop: "12%",
  height: "96%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: 0,
  boxShadow: "none",
  overflow: "hidden",
};

const LoginDialog = () => {
  const {
    setAccount,
    showloginButton,
    setShowloginButton,
    setShowlogoutButton,
  } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    const decoded = jwt_decode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Component>
        <Container>
          <Title> to use whatsapp on you computer:</Title>
          <ListItem>1. Open WhatsApp on your phone</ListItem>
          <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
          <ListItem>
            3. Point your phone to this screen to capture the code
          </ListItem>
        </Container>
        <Box style={{ position: "relative" }}>
          <QRCOde src={qrCodeImage} alt="qr code" />
          <Box
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateX(25%) translateY(-25%)",
            }}>
            <GoogleLogin
              buttonText=""
              onSuccess={onLoginSuccess}
              onError={onLoginFailure}
            />{" "}
            : null}
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
