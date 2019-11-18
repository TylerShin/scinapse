import { useEffect } from 'react';

// const useSafeFetch = (params) => {
//   useEffect(() => {
//     let canceled: boolean = false;
//     Promise.resolve().then(() => {
//       console.log("resolved value := " + value);
//       console.log(canceled, " === canceled");
//       if (!canceled) {
//         setGenuineValue(value);
//       }
//     });
//     return () => (canceled = true);
//   }, [value]);
// }
