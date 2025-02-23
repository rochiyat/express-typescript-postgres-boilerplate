import { Request, Response } from 'express';
import { userQuery } from '../queries/user.query';

export function getUsers(req: Request, res: Response) {
  const users = userQuery.getUsers();
  res.json(users);
}

export function getUser(req: Request, res: Response) {
  const user = userQuery.getUserById(Number(req.params.id));
  res.json(user);
}

export function createUser(req: Request, res: Response) {
  const user = userQuery.createUser(req.body);
  res.json(user);
}

export function updateUser(req: Request, res: Response) {
  const user = userQuery.updateUser(Number(req.params.id), req.body);
  res.json(user);
}

export function deleteUser(req: Request, res: Response) {
  const user = userQuery.deleteUser(Number(req.params.id));
  res.json(user);
}

export function getUserProjects(req: Request, res: Response) {
  const projects = userQuery.getUserProjects(Number(req.params.id));
  res.json(projects);
}

export function getUserRoles(req: Request, res: Response) {
  const roles = userQuery.getUserRoles(Number(req.params.id));
  res.json(roles);
}

export function getUserPhones(req: Request, res: Response) {
  const phones = userQuery.getUserPhones(Number(req.params.id));
  res.json(phones);
}

export function getUserAddresses(req: Request, res: Response) {
  const addresses = userQuery.getUserAddresses(Number(req.params.id));
  res.json(addresses);
}
