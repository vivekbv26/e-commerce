import { FETCH_USER } from "../constants/api";

const getUser = async () => {
  const data = await fetch(FETCH_USER)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err));
  return data;
};

export { getUser };
