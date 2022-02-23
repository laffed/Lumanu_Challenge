import { octokit, RestEndpointMethodTypes } from 'network/api';


export const getOwnerRepo = (arg: RestEndpointMethodTypes['repos']['get']['parameters']) => {
  return octokit().rest.repos.get({
    ...arg,
  });
};
