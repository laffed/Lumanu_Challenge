import { octokit, RestEndpointMethodTypes } from 'network/api';


export const getPublicRepoList = (args: RestEndpointMethodTypes['repos']['listPublic']['parameters']) => {
  const since = args.since ?? 1000000;

  return octokit().rest.repos.listPublic({
    ...args,
    since,
  });
};
