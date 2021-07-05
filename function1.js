const populateBatchOptions = async () => {
  const { data } = await getBatches();
  const batchDropdown = document.querySelector("#batch-dropdown");

  for (let batch of data) {
    const option = document.createElement("option");
    option.innerText = batch.batchName;
    option.value = batch._id;

    batchDropdown.appendChild(option);
  }
};

const populateTrackOptions = async () => {
  const { data } = await getTracks();
  const trackDropdown = document.querySelector("#track-dropdown");

  for (let track of data) {
    const option = document.createElement("option");
    option.innerText = track.trackName;
    option.value = track._id;

    trackDropdown.appendChild(option);
  }
};

const populateStudentOptions = async () => {
  let tab = ` <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Rating</th>
        <th>Action</th>
    </tr>`;
  const { data } = await getStudents();
  const StudentTable = document.querySelector("#student-table");
  const rating = 4.5;
  for (let student of data) {
    tab += `<tr> 
        <td>${student.firstName} </td>
        <td>${student.lastName}</td>
        <td>${4.5}</td>        
    </tr>`;
  }
  document.getElementById("btn").addEventListener("click", displayTable);

  function displayTable() {
    document.getElementById("student-table").innerHTML = tab;
  }
};
