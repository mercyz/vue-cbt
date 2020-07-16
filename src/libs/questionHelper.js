import { db } from "../firebaseConfig";

export const getQuestionsBySubjectId = async (subject_id) => {
  const snapshot = await db
    .collection("tests")
    .where("subject_id", "==", subject_id)
    .get();
  return mapSnapshot((e) => e.data(), snapshot);
};

const mapSnapshot = (cb, snapshot) => {
  const array = [];
  snapshot.forEach((val) => array.push(cb(val)));
  return array;
};

export const saveScoresForStudent = (data) => {
  return db
    .collection("userTests")
    .add(data)
    .then((item) => {
      console.log("Document Uploaded:", item.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
};
