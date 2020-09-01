// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.badge}

  ${data.description}
  ## Table of Contents

   - [Installation](#Installation)
   - [Usage](#Usage)
   - [License](#License)
   - [Contributing](#Contributing)
   - [Tests](#Testing)
   - [Questions](#Questions)
  ## Installation

  ${data.installation}
  ## Usage

  ${data.usage}
  ## License

  This project is covered under the **${data.license}** license -- see more info [here](${data.badgeUrl}).
  ## Contributing

  ${data.contributions}
  ## Tests

  ${data.testing}
  ## Questions

  - GitHub: [${data.githubUser}](https://github.com/${data.githubUser})
  - If you have any further questions, you can reach me at _${data.email}_
  `;
}

module.exports = {
  generate: generateMarkdown,
};
