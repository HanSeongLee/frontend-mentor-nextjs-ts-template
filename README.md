# Frontend Mentor NextJS TS Template
![Next.JS:^13.5.6](https://img.shields.io/badge/^13.5.6-575757?logo=next.js&label=Next.js&labelColor=000000)
![React:^18.2.0](https://img.shields.io/badge/^18.2.0-575757?logo=react&logoColor=000000&label=React&labelColor=61DAFB)
![TypeScript:^5.2.2](https://img.shields.io/badge/^5.2.2-575757?logo=typescript&logoColor=FFFFFF&label=TypeScript&labelColor=3178C6)
![Sass:^1.49.8](https://img.shields.io/badge/%5E1.49.8-575757?logo=sass&logoColor=FFFFFF&label=Sass&labelColor=CC6699)
![Storybook:^7.0.9](https://img.shields.io/badge/%5E7.0.9-575757?logo=sass&logoColor=FFFFFF&label=Storybook&labelColor=FF4785)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Commit Message Convention

Commit messages in this project should follow the following format to ensure consistency and clarity:

```
<type>(<scope>): <message>
```
- `<type>`: The type of the commit, which must be one of the following:

| Type       | Description                                       |
|------------|---------------------------------------------------|
| `feat`     | Add a new feature, enhancement, or functionality. |
| `fix`      | Fix a bug or resolve an issue.                    |
| `perf`     | Optimize code for improved performance.            |
| `refactor` | Restructure code without altering its behavior.    |
| `style`    | Address code formatting and style conventions.     |
| `docs`     | Make modifications to documentation.               |
| `test`     | Add, modify, or refactor test cases.              |
| `chore`    | Handle routine tasks, maintenance, or dependency management. |
| `revert`   | Revert previous code changes.                      |
| `move`     | Relocate files, directories, or code to a new location. |
| `remove`   | Delete redundant or unnecessary code, files, or directories. |
| `ci`       | Update Continuous Integration/Continuous Deployment (CI/CD) configurations. |

- `<scope>` (optional): The scope or context of the commit, indicating the affected module, file, or feature.
- `<message>`: A concise and clear description of the commit.

### Example Commit Messages

Here are some example commit messages that adhere to the convention:

- `feat(auth): add user login functionality`
- `fix(api): resolve data processing error`
- `style(css): update styling for the login page`
- `docs(readme): update project description`
- `test(unit): add tests for user management module`
- `chore(deps): update package dependencies`
- `revert: revert previous commit`
- `move(src): move model classes to a new directory`
- `remove(deprecated): remove unused functions`
- `ci(travis): update test environment configuration`
