import { Theme } from "@mui/system"

export function calcSpacing(theme:Theme, pixels:number) {
   const themeSpacing = +theme.spacing(1).replace(/px/, '')
   return pixels / themeSpacing
}

export function convertToCamelcase(str:string) {
   return str.replace(/-([a-z])/g, function (g:string) { return g[1].toUpperCase(); });
}