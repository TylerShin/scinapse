declare module 'next-apollo' {
  export const withData: (apolloConfig: any) => (PageComponent, { ssr = true } = {}) => any;
  export default withData;
}
