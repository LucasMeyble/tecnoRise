import axios from "./config";

export const useApi = () => {

  async function handleSearch(nameRepository) {
    
    const response = await axios.post(
      '',
      {
        query: `
        {
          search(query: "${nameRepository} in:name", type: REPOSITORY, first: 30) {
            repositoryCount
            edges {
              node {
                ... on Repository {
                  name
                  owner {
                    login
                  }
                  description
                  stargazerCount
                  url
                  defaultBranchRef {
                    target {
                      ... on Commit {
                        history {
                          totalCount
                        }
                      }
                    }
                  }
                  issues(states: OPEN) {
                    totalCount
                  }
                  pullRequests(states: OPEN) {
                    totalCount
                  }
                }
              }
            }
          }
        }
        `,
      }
    );

    return response
  }

  return { handleSearch }

}