// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license ==='None'){
    return ""
  }else{
return ` ![GitHub license](https://img.shields.io/badge/license-${license}-green.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None'){
return ""
  }else{
    return `This project is license under ${license} ${renderLicenseBadge(license)}`
  }
}

// TODO: Create a function to generate markdown for README 
// my note // add her new qs after 26 will be show  insaide read file 
function generateMarkdown(data) {
  return `# ${data.title}

  # Description 
  ${data.Description}
  
  ${renderLicenseSection(data.license)}

  # GitHub 
  ${data.GitHub}
  
  # Email
  ${data.Email}

  # Command to install
  To install run this code :
  ${data.commandToInstall}

  # Command to run a test
  To run a Test Use this code :
  ${data.commandToRunTest}

`;

}

module.exports = generateMarkdown;
