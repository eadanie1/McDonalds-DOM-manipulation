
// GENERAL

document.body.style.margin = '0';
document.body.style.fontFamily = `system-ui, -apple-system, 
BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, 
Open Sans, Helvetica Neue, sans-serif`;
document.body.style.fontSize = '16px';
document.body.style.color = 'rgb(41,41,41)';
document.body.style.lineHeight = '22px';

// // HEADER  AND HEADER CONTAINER

const headerContainer = document.createElement('div');
headerContainer.id = 'header-container';
headerContainer.style.display = 'flex';
headerContainer.style.alignItems = 'center';
headerContainer.style.justifyContent = 'center';
// headerContainer.style.backgroundColor = 'rgb(255,255,255)';
headerContainer.style.boxShadow = '0 2px 5px rgba(0,0,0,0.06)';
document.body.appendChild(headerContainer);

const header = document.createElement('div');
header.id = 'header';
header.style.height = '118px';
header.style.padding = '12px 0 0 0';
header.textContent = 'yowza';
headerContainer.appendChild(header);

// // MAIN CONTAINER AND MAIN CONTENT CONTAINER

const mainContainer = document.createElement('div');
mainContainer.id = 'main-container';
mainContainer.style.display = 'flex';
mainContainer.style.alignItems = 'center';
mainContainer.style.justifyContent = 'center';
document.body.appendChild(mainContainer);

const mainContentContainer = document.createElement('div');
mainContentContainer.id = 'main-content-container';
mainContentContainer.style.maxWidth = '1200px';
mainContentContainer.style.backgroundColor = 'red';
mainContentContainer.textContent = 'red';
mainContainer.appendChild(mainContentContainer);


// HEADING

// mainContainer.appendChild(headingContainer);
const headingContainer = document.createElement('div');
headingContainer.id = 'container';
headingContainer.style.height = '200px';

const heading = document.createElement('h1');
heading.textContent = 'Meet Our Food Experts';

