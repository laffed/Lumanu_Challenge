import { Octokit } from 'octokit';


export type { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods';


export const octokit = (auth?: string): Octokit => {
  return new Octokit({ auth });
};
