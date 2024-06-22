export const styles = (location: { pathname: string } | string) => {
  const pathname = typeof location === "string" ? location : location.pathname;

  return {
    pt: {
      xs: pathname === "/contact" ? 88 / 8 : 253 / 8,
      sm: 166 / 8,
      md: 144 / 8,
    },
    pb: 72 / 8,
    zIndex: -100,
    backgroundColor: "common.black",
    mt: pathname === "/contact" ? 163 / 8 : { xs: (64 - 253) / 8, sm: -9 },
  };
};
