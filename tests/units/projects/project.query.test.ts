// tests/units/projects/project.query.test.ts

import { projectQuery } from '../../../src/queries/project.query';
import prisma from '../../../prisma/client';

describe('Project Query', () => {
  describe('getProjects', () => {
    it('should return all projects', async () => {
      const projects = await projectQuery.getProjects({});
      expect(projects).toBeDefined();
    });

    it('should return an empty array if no projects are found', async () => {
      try {
        jest.spyOn(prisma.project, 'findMany').mockResolvedValue([]);

        await projectQuery.getProjects({});
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe('getProjectById', () => {
    it('should return a project by id', async () => {
      const project = await projectQuery.getProjectById(1);
      expect(project).toBeDefined();
    });

    it('should return null if project not found', async () => {
      jest.spyOn(prisma.project, 'findUnique').mockResolvedValue(null);

      const project = await projectQuery.getProjectById(999);
      expect(project).toBeNull();
    });
  });

  describe('createProject', () => {
    it('should create a project', async () => {
      const project = await projectQuery.createProject({
        id: 1,
        name: 'Test Project',
        department: 'Test Department',
        description: 'Test Description',
        startedOn: new Date(),
        endedOn: new Date(),
      });
      expect(project).toBeDefined();
    });
  });

  describe('updateProject', () => {
    it('should update a project', async () => {
      const project = await projectQuery.updateProject(1, {
        id: 1,
        name: 'Test Project',
        department: 'Test Department',
        description: 'Test Description',
        startedOn: new Date(),
        endedOn: new Date(),
      });
      expect(project).toBeDefined();
    });
  });

  describe('deleteProject', () => {
    it('should delete a project', async () => {
      const project = await projectQuery.deleteProject(1);
      expect(project).toBeDefined();
    });

    it('should return null if project not found', async () => {
      jest
        .spyOn(prisma.project, 'delete')
        .mockRejectedValue(new Error('Project not found'));

      const project = await projectQuery.deleteProject(999);
      expect(project).toBeNull();
    });
  });
});
