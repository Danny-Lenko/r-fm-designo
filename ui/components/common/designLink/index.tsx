import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IDesignItemFields } from "../../../lib/interfaces/interfaces";
import Image from "next/image";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import { styles } from "./styles";

const DesignLink = ({
  content,
  className,
}: {
  content: IDesignItemFields;
  className?: string;
}) => {
  const router = useRouter();
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.up("xs"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  console.log("content", content);

  const img = md
    ? `https://${content.imageMd?.fields.file.url}`
    : sm
    ? `https://${content.imageSm?.fields.file.url}`
    : xs
    ? `https://${content.imageXs.fields.file.url}`
    : `https://${content.imageMd?.fields.file.url}`;

  return (
    <Box
      sx={styles}
      className={className}
      onClick={() => router.push("/designs/" + content.slug)}
    >
      <Box className="textbox">
        <Typography variant="h2">{content.title}</Typography>
        <Typography>
          View Projects <ChevronRightIcon />
        </Typography>
      </Box>
      <Box className="img">
        <Image src={img} alt={content.title} layout="fill" objectFit="cover" />
      </Box>
    </Box>
  );
};

export default DesignLink;
