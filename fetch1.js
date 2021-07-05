const BASE_URL = "http://eltp-coditas.cloudjiffy.net";

const get = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  const data = await response.json();

  return data;
};

const getBatches = async () => get("/batch");
const getTracks = async () => get("/track");
const getStudents = async () => get("/student");
