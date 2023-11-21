
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

// HEADER CONTAINER AND HEADER

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
headerBottomLinks.style.margin = '0 25px 0 0';

const linkText = document.createElement('div');
linkText.id = 'link-text';
linkText.style.lineHeight = '0px';

const downArrowSmallIcon = document.createElement('div');
downArrowSmallIcon.id = 'down-arrow-small-icon';
downArrowSmallIcon.style.marginLeft = '5px';
downArrowSmallIcon.style.width = '9px';

const downArrowLargeIcon = document.createElement('div');
downArrowLargeIcon.id = 'down-arrow-large-icon';
downArrowLargeIcon.style.marginLeft = '5px';
downArrowLargeIcon.style.width = '12px';

const searchIcon = document.createElement('div');
searchIcon.id = 'search-icon';
searchIcon.style.width = '16px';
searchIcon.style.height = '15px';
searchIcon.style.marginRight = '5px';

const searchLink = document.createElement('div');
searchLink.id = 'search-link';
searchLink.style.display = 'flex';
searchLink.style.justifyContent = 'center';
searchLink.style.alignItems = 'center';
searchLink.style.textDecoration = 'none';

const locationPinIcon = document.createElement('div');
locationPinIcon.id = 'location-pin-icon';
locationPinIcon.style.width = '17px';
locationPinIcon.style.marginRight = '5px';

const locationLink = document.createElement('a');
locationLink.id = 'location-link';
locationLink.href = 'https://www.mcdonalds.com/us/en-us/restaurant-locator.html';
locationLink.style.color = 'rgb(0,107,174)';
locationLink.style.display = 'flex';
locationLink.style.justifyContent = 'center';
locationLink.style.alignItems = 'center';
locationLink.style.textDecoration = 'underline';

const orderNowButton = document.createElement('button');
orderNowButton.id = 'order-now-button';
orderNowButton.style.backgroundColor = 'rgb(255, 188, 13)';
orderNowButton.style.border = 'none';
orderNowButton.style.borderRadius = '4px';
orderNowButton.style.padding = '8px 25px';
orderNowButton.style.fontSize = '16px';
orderNowButton.style.lineHeight = '24px';

const overlay = document.createElement('div');
overlay.id = 'overlay';
overlay.style.position = 'fixed';
overlay.style.backgroundColor = 'rgba(0,0,0,0)';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.right = '0';
overlay.style.bottom = '0';
overlay.style.display = 'flex';
overlay.style.alignItems = 'center';
overlay.style.justifyContent = 'center';
overlay.style.zIndex = '-1';

// probably change below to onclick JS function
const orderNowButtonActiveOverlay = document.createElement('div');
orderNowButtonActiveOverlay.id = 'order-now-button-active-overlay';
orderNowButtonActiveOverlay.style.backgroundColor = 'rgba(0,0,0,0.4)';
orderNowButtonActiveOverlay.style.zIndex = '50';

// probably change below to onclick JS function
const orderNowButtonActiveModal = document.createElement('div');
orderNowButtonActiveModal.id = 'order-now-button-active-modal';
orderNowButtonActiveModal.style.opacity = '1';
orderNowButtonActiveModal.style.zIndex = '50';

const modal = document.createElement('div');
modal.id = 'modal';
modal.style.backgroundColor = 'white';
modal.style.width = '780px';
modal.style.height = '820px';
modal.style.borderRadius = '4px';
modal.style.boxShadow = '-15px 15px 30px rgba(0,0,0,0.25), 15px 15px 30px rgba(0,0,0,0.25)';
modal.style.display = 'flex';
modal.style.flexDirection = 'column';
modal.style.alignItems = 'center';
modal.style.opacity = '0';
modal.style.zIndex = '-1';

const modalTitle = document.createElement('div');
modalTitle.id = 'modal-title';
modalTitle.style.fontSize = '24px';
modalTitle.style.fontWeight = '700';
modalTitle.style.margin = '48px 0 40px 0';

const modalRadioGrid = document.createElement('div');
modalRadioGrid.id = 'modal-radio-grid';
modalRadioGrid.style.display = 'flex';
modalRadioGrid.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
modalRadioGrid.style.columnGap = '50px';
modalRadioGrid.style.alignItems = 'center';

const modalIcons = document.createElement('div');
modalIcons.id = 'modal-icons';
modalIcons.style.width = '120px';
modalIcons.style.margin = '66px 0 36px 0';

const radioTitle = document.createElement('div');
radioTitle.id = 'radio-title';
radioTitle.style.fontSize = '12px';
radioTitle.style.marginBottom = '8px';

const radioButton = document.createElement('div');
radioTitle.id = 'radio-title';
radioTitle.style.width = '24px';
radioTitle.style.height = '24px';

const modalDisclaimer = document.createElement('div');
modalDisclaimer.id = 'modal-disclaimer';
modalDisclaimer.style.fontSize = '11px';
modalDisclaimer.style.width = '400px';
modalDisclaimer.style.marginTop = '32px';
modalDisclaimer.style.textAlign = 'left';
modalDisclaimer.style.lineHeight = '16px';

const modalFaded = document.createElement('div');
modalFaded.id = 'modal-faded';
modalFaded.style.color = 'rgba(0,0,0,0.3)';

const modalReadMore = document.createElement('div');
modalReadMore.id = 'modal-read-more';
modalReadMore.style.marginTop = '8px';
modalReadMore.style.display = 'flex';
modalReadMore.style.flexDirection = 'column';
modalReadMore.style.alignItems = 'center';

const modalDownArrow = document.createElement('div');
modalDownArrow.id = 'modal-down-arrow';
modalDownArrow.style.width = '16px';
modalDownArrow.style.marginTop = '8px';

const flexboxModalFakeButtons = document.createElement('div');
flexboxModalFakeButtons.id = 'flexbox-modal-fake-buttons';
flexboxModalFakeButtons.style.display = 'flex';
flexboxModalFakeButtons.style.alignItems = 'center';
flexboxModalFakeButtons.style.justifyContent = 'space-between';
flexboxModalFakeButtons.style.padding = '0 15px';
flexboxModalFakeButtons.style.marginTop = '48px';

const modalButton1 = document.createElement('button');
modalButton1.id = 'modal-button1';
modalButton1.style.backgroundColor = 'rgb(255, 255,255)';
modalButton1.style.border = '1px solid rgb(200,200,200)';
modalButton1.style.borderRadius = '4px';
modalButton1.style.padding = '13px 57px';
modalButton1.style.fontSize = '16px';
modalButton1.style.lineHeight = '24px';

const modalButton2 = document.createElement('button');
modalButton2.id = 'modal-button2';
modalButton2.style.backgroundColor = 'rgb(255, 188, 13)';
modalButton2.style.border = 'none';
modalButton2.style.borderRadius = '4px';
modalButton2.style.padding = '13px 57px';
modalButton2.style.fontSize = '16px';
modalButton2.style.lineHeight = '24px';

const bottomHeaderLinksContainer = document.createElement('div');
bottomHeaderLinksContainer.id = 'bottom-header-links-container';
bottomHeaderLinksContainer.style.display = 'flex';
bottomHeaderLinksContainer.style.paddingBottom = '15px';

const bottomHeaderLinksContainerUl = document.createElement('ul');
bottomHeaderLinksContainerUl.id = 'bottom-header-links-container-ul';
bottomHeaderLinksContainerUl.style.display = 'inline';
bottomHeaderLinksContainerUl.style.padding = '0';

const bottomHeaderLinksContainerLi = document.createElement('li');
bottomHeaderLinksContainerUl.id = 'bottom-header-links-container-li';
bottomHeaderLinksContainerUl.style.listStyleType = 'none';
bottomHeaderLinksContainerUl.style.display = 'inline';

const headerLogoContainer = document.createElement('div');
headerLogoContainer.id = 'header-logo-container';
headerLogoContainer.style.display = 'flex';
headerLogoContainer.style.alignItems = 'center';

// MAIN CONTAINER AND MAIN CONTENT CONTAINER

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