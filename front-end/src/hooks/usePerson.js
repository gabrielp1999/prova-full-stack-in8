import axios from "axios";
const apiBase = "http://localhost:3001";

const usePerson = () => {
  const getPerson = async () => {
    const response = await axios.get(`${apiBase}/pessoa`);
    if (response.data) {
      return response.data;
    }
    return [];
  };

  const postPerson = async (personData) => {
    const response = await axios.post(`${apiBase}/pessoa`, personData);

    if (response.data) {
      return response.data;
    }
    return null;
  };

  return { getPerson, postPerson };
};

export default usePerson;
