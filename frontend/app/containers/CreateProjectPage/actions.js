/*
 *
 * CreateProjectPage actions
 *
 */

import {
  CREATE_PROJECT,
  DEFAULT_ACTION, IS_CREATED,
  PROJECT_DETAILS
} from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}

export function create_Project(project) {
  console.log(project);
  return {
    type: CREATE_PROJECT,
    project
  }
}

export function project_Details(project) {
  console.log(project);
  return {
    type: PROJECT_DETAILS,
    project
  }
}

export function is_Created(project) {
  console.log(project);
  return {
    type: IS_CREATED,
    project
  }
}
