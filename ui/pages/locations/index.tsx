import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import LocationArticle from "../../components/pageComponents/locations/locationArticle";
import BottomRectangle from "../../components/common/bottomRectangle";
import { locationsAtom } from "../../lib/context/locationsAtom";
import { ILocation } from "../../lib/interfaces/interfaces";

const Locations = () => {
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    if (typeof id === "string") {
      const el = document.getElementById(id);
      const yCoordinate = el!.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -10;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
    }
  }, []);

  const [loadableAtom] = useAtom(locationsAtom);
  if (loadableAtom.state === "loading") return <p>Loading...</p>;
  if (loadableAtom.state === "hasError") return <p>Error</p>;
  const locations: ILocation[] = loadableAtom.data;

  return (
    <Box component="main" sx={{ position: "relative" }}>
      {locations &&
        locations.map((location) => (
          <Box key={location.sys.id} id={location.fields.name}>
            <LocationArticle
              content={location.fields}
              length={locations.length}
            />
          </Box>
        ))}
      <Container maxWidth="lg">
        <BottomRectangle />
      </Container>
    </Box>
  );
};

export default Locations;
