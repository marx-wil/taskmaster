import {
  Box,
  Center,
  Flex,
  Stack,
} from '@chakra-ui/react';

const defProps = {
  username: "Zhack Dtech",
  email: "zhack.dtech@gmail.com",
  image: "https://avatars.githubusercontent.com/u/50767502?v=4",
};
const style = {
  ProfileCard: {
    width: "260px",
    boxSizing: "border-box",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.16)",
    cursor: "pointer",
  },
  UserText: {
    fontSize: "14px",
    fontFamily: "Manrope",
    fontWeight: 700,
    padding: "3px 0 0 0",
  },
  EmailText: {
    fontSize: "12px",
    fontFamily: "Manrope",
    fontWeight: "500",
    lineHeight: "10px",
    padding: "3px 0 0 0",
  },
  ImageContainer: {
    top: "32px",
    left: "24px",
    width: "45px",
    height: "45px",
    borderRadius: "100000px",
    boxSizing: "border-box",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${defProps.image})`,
    cursor: "pointer",
  },
};
function UserDetails({ title, desc, ...rest }) {
  return (
    <Box p={5} {...rest}>
      <Username />
      <Email />
    </Box>
  );
}
function UserImage() {
  return (
    <Center pl="4">
      <Box style={style.ImageContainer} />
    </Center>
  );
}
function Username() {
  return <div style={style.UserText}>{defProps.username}</div>;
}
function Email() {
  return <div style={style.EmailText}>{defProps.email}</div>;
}
const ProfileCard = (props) => {
  return (
    <>
      <Flex flexDirection="row" style={style.ProfileCard} borderRadius="xl">
        <Stack direction="row" spacing="0px">
          <UserImage boxShadow="lg"/>
          <UserDetails />
        </Stack>
      </Flex>
    </>
  );
};
export default ProfileCard;
