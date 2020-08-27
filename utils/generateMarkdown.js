// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  # Installation
  ${data.installation}
  `;
}

module.exports = {
  generate: generateMarkdown,
};
