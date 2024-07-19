import { getTokenUser } from "@/utils/getTokenUser";
import { apiBody } from "../config/apiBody";

export const signInAccount = async (body) => {
  const { data } = await apiBody.post(`/auth/sign-in`, body);

  return data;
};

export const verifyAccount = async () => {
  const { data } = await apiBody.get(`/auth/verify`, {
    headers: {
      Authorization: `Bearer ${getTokenUser()}`,
    },
  });

  return data;
};


// export const verifyAccount = async(bearer) => {
//   try {
//       const fetchResponse = await fetch(`${URL}/auth/verify`,
//       {
//           method: 'GET',
//           headers: {
//               'Content-Type': 'application/json',
//               'Authorization': `Bearer ${bearer}`
//           },
//       })
//       const data = await fetchResponse.json();
//       return data;
//   }
//   catch (error) {
//       return error;
//   }
// }