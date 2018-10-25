import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  markdownResolver: inject(),

  async model({ projectId }) {
    // let projectPath = `projects/${projectId}`;

    // console.log({ projectPath });
    let project = await this.get('markdownResolver').file('projects', projectId);

    console.log({ project });

    return project;
  }
});
