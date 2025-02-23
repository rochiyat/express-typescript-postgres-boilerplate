import { Request, Response } from 'express';
import { userQuery } from '../queries/user.query';
import { returnSuccess, returnNonSuccess } from '../utils/helper.util';

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await userQuery.getUsers();
    returnSuccess(req, res, 200, 'Success', users);
  } catch (error) {
    returnNonSuccess(req, res, 500, 'Internal Server Error');
  }
}

export async function getUser(req: Request, res: Response) {
  try {
    const user = await userQuery.getUserById(Number(req.params.id));
    if (!user) {
      returnNonSuccess(req, res, 404, 'User not found');
    } else {
      returnSuccess(req, res, 200, 'Success', user);
    }
  } catch (error) {
    returnNonSuccess(req, res, 500, 'Internal Server Error');
  }
}

export async function createUser(req: Request, res: Response) {
  try {
    const user = await userQuery.createUser(req.body);
    returnSuccess(req, res, 200, 'Success', user);
  } catch (error) {
    returnNonSuccess(req, res, 500, 'Internal Server Error');
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const user = await userQuery.updateUser(Number(req.params.id), req.body);
    if (!user) {
      returnNonSuccess(req, res, 404, 'User not found');
    } else {
      returnSuccess(req, res, 200, 'Success', user);
    }
  } catch (error) {
    returnNonSuccess(req, res, 500, 'Internal Server Error');
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const user = await userQuery.deleteUser(Number(req.params.id));
    if (!user) {
      returnNonSuccess(req, res, 404, 'User not found');
    } else {
      returnSuccess(req, res, 200, 'Success', user);
    }
  } catch (error) {
    returnNonSuccess(req, res, 500, 'Internal Server Error');
  }
}

export async function getUserProjects(req: Request, res: Response) {
  try {
    const projects = await userQuery.getUserProjects(Number(req.params.id));
    returnSuccess(req, res, 200, 'Success', projects);
  } catch (error) {
    returnNonSuccess(req, res, 500, 'Internal Server Error');
  }
}

export async function getUserRoles(req: Request, res: Response) {
  try {
    const roles = await userQuery.getUserRoles(Number(req.params.id));
    returnSuccess(req, res, 200, 'Success', roles);
  } catch (error) {
    returnNonSuccess(req, res, 500, 'Internal Server Error');
  }
}

export async function getUserPhones(req: Request, res: Response) {
  try {
    const phones = await userQuery.getUserPhones(Number(req.params.id));
    returnSuccess(req, res, 200, 'Success', phones);
  } catch (error) {
    returnNonSuccess(req, res, 500, 'Internal Server Error');
  }
}

export async function getUserAddresses(req: Request, res: Response) {
  try {
    const addresses = await userQuery.getUserAddresses(Number(req.params.id));
    returnSuccess(req, res, 200, 'Success', addresses);
  } catch (error) {
    returnNonSuccess(req, res, 500, 'Internal Server Error');
  }
}
