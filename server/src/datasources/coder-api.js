const { RESTDataSource } = require('apollo-datasource-rest');

class CoderAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3001/';
  }

  getAllCoders() {
    return this.get('coders');
  }
  getAllActivities() {
    return this.get('activities');
  }
  getActivity(activityID) {
    return this.get(`activities/${activityID}`);
  }

  getCoder(coderID) {
    return this.post(`coders/${coderID}`);
  }
}
module.exports = CoderAPI;
