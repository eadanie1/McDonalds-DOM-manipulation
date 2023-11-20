
// GENERAL: BODY

document.body.style.margin = '0';
document.body.style.fontFamily = `system-ui, -apple-system, 
BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, 
Open Sans, Helvetica Neue, sans-serif`;
// Note: template literal used above to line break code for easy overview
document.body.style.fontSize = '16px';
document.body.style.color = 'rgb(41,41,41)';
document.body.style.lineHeight = '22px';

// GENERAL: ANCHOR ELEMENTS

const allLinks = document.querySelectorAll('a');
allLinks.forEach(link => {
    link.style.color = 'rgb(41,41,41)',
    link.style.textDecoration = 'none';
});

// GENERAL: BUTTONS

const allButtons = document.querySelectorAll('button');
allButtons.forEach(button => {
    button.style.cursor = 'pointer';
});

// // HEADER CONTAINER AND HEADER

const headerContainer = document.createElement('header');
headerContainer.id = 'header-container';
headerContainer.style.height = '118px';
headerContainer.style.boxShadow = '0 2px 5px rgba(0,0,0,0.06)';
headerContainer.style.display = 'flex';
headerContainer.style.justifyContent = 'center';
headerContainer.style.padding = '15px 0 0 0';
document.body.appendChild(headerContainer);

const header = document.createElement('div');
header.id = 'header';
header.style.width = '1170px';
header.style.display = 'grid';
header.style.gridTemplateColumns = '108px 1fr';
header.style.columnGap = '62px';
header.style.justifyContent = 'space-between';
header.style.padding = '0 0 0 0';
header.textContent = 'yowza';
// remove above text later
headerContainer.appendChild(header);
// come back and check per HTML how to add 
// appendChild properties per each CSS section

const headerMainLinksContainer = document.createElement('div');
headerMainLinksContainer.id = 'header-main-links-container';
headerMainLinksContainer.style.display = 'flex';
headerMainLinksContainer.style.flexDirection = 'column';
headerMainLinksContainer.style.justifyContent = 'space-between';

const topHeaderLinksContainer = document.createElement('div');
topHeaderLinksContainer.id = 'top-header-links-container';
topHeaderLinksContainer.style.display = 'flex';
topHeaderLinksContainer.style.justifyContent = 'space-between';
topHeaderLinksContainer.style.fontSize = '14px';
topHeaderLinksContainer.style.padding = '0 40px 0 0';

const topLeftHeaderLinksContainer = document.createElement('div');
topLeftHeaderLinksContainer.id = 'top-left-header-links-container';
topLeftHeaderLinksContainer.style.display = 'flex';
topLeftHeaderLinksContainer.style.alignItems = 'center';

const topRightHeaderLinksContainer = document.createElement('div');
topRightHeaderLinksContainer.id = 'top-right-header-links-container';
topRightHeaderLinksContainer.style.display = 'flex';
topRightHeaderLinksContainer.style.alignItems = 'center';

const hamburgerMenu = document.createElement('div');
hamburgerMenu.id = 'hamburger-menu';
hamburgerMenu.style.width = '22px';
hamburgerMenu.style.marginLeft = '10px';

const headerTopLinks = document.createElement('div');
headerTopLinks.id = 'header-top-links';
headerTopLinks.style.margin = '0 30px 0 0';

const headerBottomLinks = document.createElement('div');
headerBottomLinks.id = 'header-bottom-links';
headerBottomLinks.style.margin = '0 30px 0 0';

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

