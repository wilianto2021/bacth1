import {
  createBatch1,
  deleteBatch1,
  selectBatch1,
  updateBatch1,
} from "../repositories/batch1.js";
import { responseTemplate } from "../utils/response.js";

export async function controlCreateBatch1(req, res, next) {
  let message;
  let data;
  let response_code;
  try {
    data = await createBatch1(req.body.name, req.body.jenis_kelamin);
    console.log(data);
    response_code = 200;
    message = "success";
  } catch (error) {
    response_code = 500;
    message = "error";
  }
  responseTemplate(res, data, message, response_code);
}

export async function controlSelectBatch1(req, res, next) {
  let message;
  let data;
  let response_code;
  try {
    data = await selectBatch1(req.body.name, req.body.jenis_kelamin);
    console.log(data);
    response_code = 200;
    message = "success";
  } catch (error) {
    response_code = 500;
    message = "error";
  }
  responseTemplate(res, data, message, response_code);
}

export async function controlUpdateBatch1(req, res, next) {
  let message;
  let data;
  let response_code;
  try {
    data = await updateBatch1(
      req.body.name,
      req.body.jenis_kelamin,
      req.body.id
    );
    console.log(data);
    response_code = 200;
    message = "success";
  } catch (error) {
    response_code = 500;
    message = "error";
  }
  responseTemplate(res, data, message, response_code);
}

export async function controlDeleteBatch1(req, res, next) {
  let message;
  let data;
  let response_code;
  try {
    data = await deleteBatch1(req.body.name, req.body.id);
    console.log(data);
    response_code = 200;
    message = "success";
  } catch (error) {
    console.error(error);
    response_code = 500;
    message = "error";
  }
  responseTemplate(res, data, message, response_code);
}
