import prisma from '../../prisma/client';
import { User } from '../models/user.model';

export class UserService {
  async getUsers() {
    return prisma.user.findMany();
  }

  async getUserById(id: string) {
    return prisma.user.findUnique({ where: { id } });
  }

  async createUser(user: User) {
    return prisma.user.create({ data: user });
  }

  async updateUser(id: string, user: User) {
    return prisma.user.update({ where: { id }, data: user });
  }

  async deleteUser(id: string) {
    return prisma.user.delete({ where: { id } });
  }

  async getUserProjects(id: string) {
    return prisma.project.findMany({ where: { userId: id } });
  }

  async getUserRoles(id: string) {
    return prisma.role.findMany({ where: { userId: id } });
  }

  async getUserPhones(id: string) {
    return prisma.phone.findMany({ where: { userId: id } });
  }

  async getUserAddresses(id: string) {
    return prisma.address.findMany({ where: { userId: id } });
  }
}

export const userService = new UserService();
