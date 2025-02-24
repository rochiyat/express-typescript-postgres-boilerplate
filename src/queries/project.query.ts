import prisma from '../../prisma/client';
import { Project } from '../models/project.model';

export class ProjectQuery {
  async getProjects(params: any) {
    return prisma.project.findMany(params);
  }

  async getProjectById(id: number) {
    return prisma.project.findUnique({ where: { id } });
  }

  async createProject(project: Project) {
    return prisma.project.create({ data: project });
  }

  async updateProject(id: number, project: Project) {
    return prisma.project.update({ where: { id }, data: project });
  }

  async deleteProject(id: number) {
    return prisma.project.delete({ where: { id } });
  }

  async getProjectAssignments(id: number) {
    return prisma.projectAssignment.findMany({ where: { projectId: id } });
  }

  async getProjectUsers(id: number) {
    return prisma.projectAssignment.findMany({ where: { projectId: id } });
  }
}

export const projectQuery = new ProjectQuery();
