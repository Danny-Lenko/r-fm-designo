import { Theme } from "@mui/system"

export function calcSpacing(theme:Theme, pixels:number) {
   const themeSpacing = +theme.spacing(1).replace(/px/, '')
   return pixels / themeSpacing
}