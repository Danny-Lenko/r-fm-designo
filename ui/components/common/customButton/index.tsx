import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import useTheme from "@mui/material/styles/useTheme";
import { Theme } from "@mui/system";

const CustomButton = ({
  light,
  title,
  type,
  onClick,
}: {
  light: boolean;
  title: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const theme: Theme = useTheme();

  const MyButton = styled(Button)(() => ({
    backgroundColor: light
      ? theme.palette.common.white
      : theme.palette.peachCustom.main,
    color: light ? theme.palette.common.black : theme.palette.common.white,
    boxShadow: "none",
    width: "152px",
    height: "56px",
    borderRadius: 10,
    "&:hover": {
      backgroundColor: theme.palette.peachCustom.light,
      color: theme.palette.common.white,
      boxShadow: "none",
    },
  }));

  return (
    <MyButton type={type ? type : "button"} onClick={onClick || (() => {})}>
      {title}
    </MyButton>
  );
};

export default CustomButton;
