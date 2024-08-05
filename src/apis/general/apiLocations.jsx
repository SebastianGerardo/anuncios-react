import { apiBodyLocations } from "../config/apiBodyLocations";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1NywidHlwZSI6ImFkbWluIn0sImlhdCI6MTcyMTM1NjI3OH0.Dd78uUlcGmrRlrebb5F0QVmTjHRRFSqDpzmjsygDyKE"

export const getDepartments = async () => {
  const { data } = await apiBodyLocations.get(`/locations`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const getProvinces = async (department) => {
  const { data } = await apiBodyLocations.get(`/locations/${department}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const getDistricts = async (department, province) => {
  const { data } = await apiBodyLocations.get(`/locations/${department}/${province}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
