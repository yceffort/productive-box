export const userInfoQuery = `
  query {
    viewer {
      login
      id
    }
  }
`

export const createContributedRepoQuery = (username: string) => `
  query {
    user(login: "${username}") {
      repositoriesContributedTo(last: 500) {
        nodes {
          name
          owner {
            login
          }
        }
      }
    }
  }
`

export const createCommittedDateQuery = (
  id: string,
  name: string,
  owner: string,
) => `
  query {
    repository(owner: "${owner}", name: "${name}") {
      ref(qualifiedName: "master") {
        target {
          ... on Commit {
            history(first: 500, author: { id: "${id}" }) {
              edges {
                node {
                  committedDate
                }
              }
            }
          }
        }
      }
    }
  }
`
