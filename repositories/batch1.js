import { dbPool } from "../utils/dbcon.js";

async function createBatch1(nama, jenisKel) {
  try {
    let query =
      "INSERT INTO batch1 (nama, jenis_kelamin) values ('" +
      nama +
      "','" +
      jenisKel +
      "')";
    console.log(query);
    const [result] = await dbPool.query(query);
    // let query = "INSERT INTO batch1 (nama, jenis_kelamin) values (?,?)";
    // const [result] = await dbPool.query(query,[nama,jenisKel])
    // console.log(result);
    if (result.affectedRows > 0) {
      return result;
    }
  } catch (error) {
    throw error;
  }
}
async function selectBatch1() {
  try {
    let query = "SELECT * FROM batch1";
    console.log(query);
    const [result] = await dbPool.query(query);
    if (result.length > 0) {
      return result;
    }
  } catch (error) {
    throw error;
  }
}
async function deleteBatch1(name, id) {
  try {
    const query = "DELETE FROM batch1 WHERE nama = ? AND id = ?";
    console.log(query);
    const [result] = await dbPool.query(query, [name, id]);
    console.log(result);
    if (result.affectedRows > 0) {
      return result;
    }
  } catch (error) {
    throw error;
  }
}

async function updateBatch1(nama, jenisKel, id) {
  try {
    let query =
      "UPDATE batch1 SET nama = '" +
      nama +
      "', jenis_kelamin = '" +
      jenisKel +
      "' where id ='" +
      id +
      "'";
    console.log(query);
    const [result] = await dbPool.query(query);
    if (result.affectedRows > 0) {
      return result;
    }
  } catch (error) {
    throw error;
  }
}

export { createBatch1, deleteBatch1, selectBatch1, updateBatch1 };
