import { octokit, RestEndpointMethodTypes } from 'network/api';


export const getUserRepoList = (arg: RestEndpointMethodTypes['repos']['listForUser']['parameters']) => {
  return octokit().rest.repos.listForUser({
    ...arg,
  });
};
