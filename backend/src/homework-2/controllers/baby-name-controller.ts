import 'dotenv/config';
import { Request, Response } from 'express';
import axios from 'axios';
import { HTTP_STATUS_CODES, MESSAGE } from '../../utils/server-constants';

let babyNames: string[] = [];

const deleteBabyName = async (req: Request, res: Response): Promise<any> => {
  const name = req.params.babyNameId;

  console.log(typeof name);

  if (typeof name !== 'string') {
    return res.status(HTTP_STATUS_CODES.NOT_FOUND).send({
      messages: 'Invalid baby name ID',
    });
  }

  if (!babyNames.includes(name)) {
    return res.status(HTTP_STATUS_CODES.NOT_FOUND).send({
      messages: "No baby name matched nothing deleted.",
    });
  }

  babyNames = babyNames.filter((babyName) => babyName !== name);

  res.status(HTTP_STATUS_CODES.OK).send({
    messages: MESSAGE.BABY_NAME_DELETED_SUCCESSFULLY,
  });
};

const fetchNewBabyNames = async (_req: Request, res: Response): Promise<void> => {
  try {
    const response = await axios.get('https://api.api-ninjas.com/v1/babynames/', {
      headers: {
        'X-Api-Key': process.env.BABY_NAME_API_KEY ?? '<YOUR_API_KEY>',
      },
    });

    res.send({
      message: response.data,
    });
  } catch (error) {
    res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send({
      message: MESSAGE.INTERNAL_SERVER_ERROR,
    });
  }
};

//async if there ever a plan to add to a database
const saveBabyName = async (req: Request, res: Response): Promise<any> => {
  const { name } = req.body;

  if (!name) {
    return res.status(HTTP_STATUS_CODES.BAD_REQEST_RESPONSE).send({
      error: MESSAGE.BABY_NAME_BAD_REQUEST,
    });
  } else if (babyNames.includes(name)) {
    return res.status(HTTP_STATUS_CODES.BAD_REQEST_RESPONSE).send({
      error: MESSAGE.BABY_NAME_SAVE_ERROR,
    });
  } else {
    babyNames.push(name);

    return res.status(HTTP_STATUS_CODES.OK).send({
      message: MESSAGE.BABY_NAME_SAVED,
    });
  }
};

const getSavedCollectionOfBabyNames = async (_req: Request, res: Response): Promise<any> => {
  if (babyNames.length === 0) {
    return res.status(HTTP_STATUS_CODES.NOT_FOUND).send({
      message: MESSAGE.BABY_NAMES_NOT_FOUND_NONE_SAVED,
    });
  }

  res.send({
    message: babyNames,
  });
};

export { deleteBabyName, fetchNewBabyNames as discoverNewBabyNames, getSavedCollectionOfBabyNames, saveBabyName };
