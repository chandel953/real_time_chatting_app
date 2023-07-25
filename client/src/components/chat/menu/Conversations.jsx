import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../Service/api";
import { Box, styled, Divider } from "@mui/material";

import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
  overflow: overlay;
  height: 81vh;
`;

const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background-color: #e9edef;
  opacity: 0.6;
`;

const Conversations = ({ text }) => {
  const [users, setUsers] = useState([]);

  const { account } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
     const fiteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
      setUsers(fiteredData);
    };
    fetchData();
  }, [text]);

  return (
    <Component>
      {users.map(
        (user) =>
          user.sub !== account.sub && (
            <>
              <Conversation user={user} />
              <StyledDivider />
            </>
          )
      )}
    </Component>
  );
};

export default Conversations;
