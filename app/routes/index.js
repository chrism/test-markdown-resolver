import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  markdownResolver: inject(),

  async model({ path }) {
    // const project = this.store.createRecord('project', {
    //   title: 'Rails is Omakase',
    //   createdAt: (new Date()).toString()
    // });
    // let projects = [];

    let projectsJson = await this.get('markdownResolver').tree('projects');
    //
    // projectsJson.files.forEach(file => {
    //   console.log({file});
    //   const project = this.store.createRecord('project', {
    //     id: file.attributes.id,
    //     title: file.attributes.title,
    //     createdAt: file.attributes.createdAt,
    //     content: file.content
    //   });
    //
    //   projects.push(project);
    // });

    return projectsJson;
  }
});
