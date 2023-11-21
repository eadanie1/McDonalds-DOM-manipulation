
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

const header = document.createElement('header');
header.id = 'header-container';
header.style.height = '118px';
header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.06)';
header.style.display = 'flex';
header.style.justifyContent = 'center';
header.style.padding = '15px 0 0 0';
document.body.appendChild(header);

const headerContainer = document.createElement('div');
headerContainer.id = 'header-container';
headerContainer.style.width = '1170px';
headerContainer.style.display = 'grid';
headerContainer.style.gridTemplateColumns = '108px 1fr';
headerContainer.style.columnGap = '62px';
headerContainer.style.justifyContent = 'space-between';
headerContainer.style.padding = '0 0 0 0';
headerContainer.textContent = 'yowza';
// remove above text later
header.appendChild(headerContainer);
// come back and check per HTML how to add 
// appendChild properties per each CSS section

const headerMainLinksContainer = document.createElement('div');
headerMainLinksContainer.id = 'header-main-links-container';
headerMainLinksContainer.style.display = 'flex';
headerMainLinksContainer.style.flexDirection = 'column';
headerMainLinksContainer.style.justifyContent = 'space-between';
headerContainer.appendChild(headerMainLinksContainer);

const topHeaderLinksContainer = document.createElement('div');
topHeaderLinksContainer.id = 'top-header-links-container';
topHeaderLinksContainer.style.display = 'flex';
topHeaderLinksContainer.style.justifyContent = 'space-between';
topHeaderLinksContainer.style.fontSize = '14px';
topHeaderLinksContainer.style.padding = '0 40px 0 0';
headerMainLinksContainer.appendChild(topHeaderLinksContainer);

const topLeftHeaderLinksContainer = document.createElement('div');
topLeftHeaderLinksContainer.id = 'top-left-header-links-container';
topLeftHeaderLinksContainer.style.display = 'flex';
topLeftHeaderLinksContainer.style.alignItems = 'center';
topHeaderLinksContainer.appendChild(topLeftHeaderLinksContainer);

const topRightHeaderLinksContainer = document.createElement('div');
topRightHeaderLinksContainer.id = 'top-right-header-links-container';
topRightHeaderLinksContainer.style.display = 'flex';
topRightHeaderLinksContainer.style.alignItems = 'center';
topHeaderLinksContainer.appendChild(topRightHeaderLinksContainer);

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
headerMainLinksContainer.appendChild(bottomHeaderLinksContainer);

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
headerContainer.appendChild(headerLogoContainer);

// MAIN CONTAINER AND MAIN CONTENT CONTAINER

const mainFlexboxContainer = document.createElement('div');
mainFlexboxContainer.id = 'main-flexbox-container';
mainFlexboxContainer.style.display = 'flex';
mainFlexboxContainer.style.justifyContent = 'center';
document.body.appendChild(mainFlexboxContainer);

const mainContentContainer = document.createElement('main');
mainContentContainer.id = 'main-content-container';
mainContentContainer.style.padding = '63px 12px 0 12px';
mainContentContainer.style.maxWidth = '1170px';
mainFlexboxContainer.appendChild(mainContentContainer);

const h1 = document.createElement('div');
h1.id = 'h1';
h1.style.fontSize = '54px';
h1.textContent = 'Meet Our Food Experts';
h1.style.fontWeight = '700';
h1.style.marginBottom = '44px';
h1.textAlign = 'center';
mainContentContainer.appendChild(h1);

const mainPhoto = document.createElement('div');
h1.id = 'main-photo';
h1.style.display = 'flex';
h1.style.alignItems = 'center';
h1.style.justifyContent = 'center';
mainContentContainer.appendChild(mainPhoto);
// check above, it's the div containing the image right?
// then make a new element to add the image, or inside div..

const foodExpertsMainImage = document.createElement('div');
foodExpertsMainImage.id = 'food-experts-main-image';
foodExpertsMainImage.style.width = '100%';

const expertsInfoText = document.createElement('div');
expertsInfoText.id = 'experts-info-text';
expertsInfoText.style.fontSize = '20px';
expertsInfoText.style.lineHeight = '22px';
expertsInfoText.style.marginTop = '116px';
expertsInfoText.style.marginBottom = '135px';
expertsInfoText.textContent = `Our food experts are more than 
just pros at their craft. They are people who care about 
the food you eat and bring innovation into our kitchens.`;
mainContentContainer.appendChild(expertsInfoText);

const tripleGridContainer = document.createElement('section');
tripleGridContainer.id = 'triple-grid-container';
tripleGridContainer.style.display = 'grid';
tripleGridContainer.style.gridTemplateColumns = '1fr 1fr 1fr';
tripleGridContainer.style.columnGap = '23px';
mainContentContainer.appendChild(tripleGridContainer);

const gridImage = document.createElement('div');
gridImage.id = 'grid-image';
gridImage.style.width = '100%';

const gridTitle = document.createElement('div');
gridTitle.id = 'grid-title';
gridTitle.style.fontSize = '36px';
gridTitle.style.fontWeight = '700';
gridTitle.style.padding = '45px 0 18px 0';
// add id to and add div inside of triple grid container for each

const gridDescription = document.createElement('div');
gridDescription.id = 'grid-description';
gridDescription.style.padding = '18px 0 0 0';
gridDescription.style.lineHeight = '24px';

const gridButtons = document.createElement('button');
gridButtons.id = 'grid-buttons';
gridButtons.style.backgroundColor = 'rgb(255, 188, 13)';
gridButtons.style.border = 'none';
gridButtons.style.borderRadius = '4px';
gridButtons.style.marginTop = '35px';
gridButtons.style.padding = '13px 25px';
gridButtons.style.fontSize = '16px';
gridButtons.style.lineHeight = '24px';
// id is attributed to a single element
// here have to split each button

const gridButtonsMedia = document.createElement('div');
gridButtonsMedia.id = 'grid-buttons-media';
gridButtonsMedia.style.backgroundColor = 'rgb(255, 188, 13)';
gridButtonsMedia.style.border = 'none';
gridButtonsMedia.style.borderRadius = '4px';
gridButtonsMedia.style.margin = '24px 14px 86px 14px';
gridButtonsMedia.style.padding = '13px 25px';
// gridButtonsMedia.style.fontSize = '16px';
gridButtonsMedia.style.lineHeight = '24px';
gridButtonsMedia.style.fontSize = '14px';

const buttonsTripleGrid = document.createElement('div');
buttonsTripleGrid.id = 'buttons-triple-grid';
buttonsTripleGrid.style.display = 'grid';
buttonsTripleGrid.style.gridTemplateColumns = '1fr 1fr 1fr';
buttonsTripleGrid.style.columnGap = '23px';
buttonsTripleGrid.style.marginBottom = '158px';
mainContentContainer.appendChild(buttonsTripleGrid);

const unorderedListFlexbox = document.createElement('section');
unorderedListFlexbox.id = 'unordered-list-flexbox';
unorderedListFlexbox.style.display = 'flex';
unorderedListFlexbox.style.justifyContent = 'space-between';
unorderedListFlexbox.style.padding = '0 20px';
mainContentContainer.appendChild(unorderedListFlexbox);
// add id to and add div inside of triple grid container for each

const listHeader = document.createElement('div');
listHeader.id = 'list-header';
listHeader.style.fontWeight = '700';
listHeader.style.marginBottom = '18px';

const plusSign = document.createElement('div');
plusSign.id = 'plus-sign';
plusSign.style.width = '16px';
plusSign.style.height = '16px';

const unorderedListFlexboxUl = document.createElement('div');
unorderedListFlexboxUl.id = 'unordered-list-flexbox-ul';
unorderedListFlexboxUl.style.padding = '0';

const unorderedListFlexboxLi = document.createElement('div');
unorderedListFlexboxLi.id = 'unordered-list-flexbox-li';
unorderedListFlexboxLi.style.listStyleType = 'none';
unorderedListFlexboxLi.style.width = '180px';
unorderedListFlexboxLi.style.marginBottom = '6px';

const iconsFlexbox = document.createElement('section');
iconsFlexbox.id = 'icons-flexbox';
iconsFlexbox.style.display = 'flex';
iconsFlexbox.style.justifyContent = 'space-between';
iconsFlexbox.style.margin = '32px 0 42px 0';
iconsFlexbox.style.padding = '0 20px';
mainContentContainer.appendChild(iconsFlexbox);

const socialMediaIcons = document.createElement('div');
socialMediaIcons.id = 'social-media-icons';
socialMediaIcons.style.marginRight = '17px';

const footer = document.createElement('footer');
footer.id = 'footer';
footer.style.borderTop = '1px solid rgb(206,206,206)';
footer.style.display = 'flex';
footer.style.justifyContent = 'space-between';
footer.style.alignItems = 'start';
footer.style.padding = '48px 20px 104px 20px';
mainContentContainer.appendChild(footer);

const footerUl = document.createElement('ul');
footerUl.id = 'footer-ul';
footerUl.style.padding = '0';
footerUl.style.display = 'inline';

const footerLi = document.createElement('li');
footerUl.id = 'footer-li';
footerUl.style.display = 'inline-block';
footerUl.style.listStyleType = 'none';
footerUl.style.padding = '0 40px 0 0';
footerUl.style.height = '44px';

const nestedFlexbox = document.createElement('div');
nestedFlexbox.id = 'nested-flexbox';
nestedFlexbox.style.display = 'flex';
nestedFlexbox.style.justifyContent = 'space-between';
nestedFlexbox.style.alignItems = 'center';

const archesLogo = document.createElement('div');
archesLogo.id = 'arches-logo';
archesLogo.style.width = '28px';
archesLogo.style.verticalAlign = 'bottom';

const copyrightText = document.createElement('div');
copyrightText.id = 'copyright-text';
copyrightText.style.lineHeight = '16px';
copyrightText.style.textAlign = 'right';
copyrightText.style.padding = '12px 0 0 44px';
copyrightText.style.width = '280px';

// NO MEDIA QUERIES DONE AS THESE ARE DONE ENTIRELY IN
// CSS AS PER CHAT GPT