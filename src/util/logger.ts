export const debug = (s: string | Record<string, any>) => {
  if (process.env.DEBUG) {
    console.debug(s);
  }
}

export const info = (s: string | Record<string, any>) => {
  if (process.env.DEBUG || process.env.INFO) {
    console.info(s);
  }
}

export const error = (s: string | Record<string, any>) => {
  if (process.env.DEBUG || process.env.INFO || process.env.ERROR) {
    console.error(s);
  }
}