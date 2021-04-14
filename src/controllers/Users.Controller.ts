import { Request, Response } from 'express';

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    return res.status(200).json({
    });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

export const postUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    return res.status(200).json({
    });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};
export const getOneUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    return res.status(200).json({
    });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};
export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    return res.status(200).json({
    });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    return res.status(200).json({
    });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};