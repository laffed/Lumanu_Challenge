import { octokit, RestEndpointMethodTypes } from 'network/api';


type Arg = RestEndpointMethodTypes['repos']['listForOrg']['parameters'] &
Required<Pick<RestEndpointMethodTypes['repos']['listForOrg']['parameters'], 'page' | 'per_page'>>
export const getOrgRepoList = (arg: Arg) => {
  return octokit().rest.repos.listForOrg({
    ...arg,
  });
};
