
// GENERAL: BODY

document.body.style.margin = '0';
document.body.style.fontFamily = `system-ui, -apple-system, 
BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, 
Open Sans, Helvetica Neue, sans-serif`;
// Note: template literal used above to line break code for easy overview
document.body.style.fontSize = '16px';
document.body.style.color = 'rgb(41,41,41)';
document.body.style.lineHeight = '22px';


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

// const hamburgerMenu = document.createElement('div');
// hamburgerMenu.id = 'hamburger-menu';
// hamburgerMenu.style.width = '22px';
// hamburgerMenu.style.marginLeft = '10px';

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

const foodExpertsMainImage = document.createElement('img');
foodExpertsMainImage.id = 'food-experts-main-image';
foodExpertsMainImage.src = 'images/FoodExperts_Hero_1260x560_Desktop_hero-desktop.jpeg';
foodExpertsMainImage.alt = 'food-experts-main-image';
foodExpertsMainImage.style.width = '100%';
mainPhoto.appendChild(foodExpertsMainImage);

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

// TRIPLE GRID CONTAINER

const tripleGridContainer = document.createElement('section');
tripleGridContainer.id = 'triple-grid-container';
tripleGridContainer.style.display = 'grid';
tripleGridContainer.style.gridTemplateColumns = '1fr 1fr 1fr';
tripleGridContainer.style.columnGap = '23px';
mainContentContainer.appendChild(tripleGridContainer);

const tripleGridSubDiv1 = document.createElement('div');
tripleGridSubDiv1.id = 'triple-grid-sub-div1';
tripleGridContainer.appendChild(tripleGridSubDiv1);

const gridImage1 = document.createElement('img');
gridImage1.id = 'grid-image';
gridImage1.src = 'images/Our_Chefs_3col_760x508_3-column-desktop.jpeg';
gridImage1.alt = 'food-experts-main-image';
gridImage1.style.width = '100%';
tripleGridSubDiv1.appendChild(gridImage1);

const gridTitle1 = document.createElement('div');
gridTitle1.id = 'grid-title';
gridTitle1.textContent = 'Our Chefs';
gridTitle1.style.fontSize = '36px';
gridTitle1.style.fontWeight = '700';
gridTitle1.style.padding = '45px 0 18px 0';
tripleGridSubDiv1.appendChild(gridTitle1);

const gridDescription1 = document.createElement('div');
gridDescription1.id = 'grid-description';
gridDescription1.textContent = `Everyday, culinary masters 
are cooking up new tastes in our kitchens.`;
gridDescription1.style.padding = '18px 0 0 0';
gridDescription1.style.lineHeight = '24px';
tripleGridSubDiv1.appendChild(gridDescription1);

const buttonsTripleGrid = document.createElement('div');
buttonsTripleGrid.id = 'buttons-triple-grid';
buttonsTripleGrid.style.display = 'grid';
buttonsTripleGrid.style.gridTemplateColumns = '1fr 1fr 1fr';
buttonsTripleGrid.style.columnGap = '23px';
buttonsTripleGrid.style.marginBottom = '158px';
mainContentContainer.appendChild(buttonsTripleGrid);

const buttonsTripleGridSubDiv1 = document.createElement('div');
buttonsTripleGridSubDiv1.id = 'buttons-triple-grid-sub-div';
buttonsTripleGrid.appendChild(buttonsTripleGridSubDiv1);

const gridButtons1Link = document.createElement('a');
gridButtons1Link.id = 'grid-buttons1-link';
gridButtons1Link.href = `https://www.mcdonalds.com/us/en-us/about-our-
food/meet-our-food-experts/our-chefs.html`;
buttonsTripleGridSubDiv1.appendChild(gridButtons1Link);

const gridButtons1 = document.createElement('button');
gridButtons1.id = 'grid-buttons1';
gridButtons1.textContent = 'Meet Our Chefs';
gridButtons1.style.backgroundColor = 'rgb(255, 188, 13)';
gridButtons1.style.border = 'none';
gridButtons1.style.borderRadius = '4px';
gridButtons1.style.marginTop = '35px';
gridButtons1.style.padding = '13px 25px';
gridButtons1.style.fontSize = '16px';
gridButtons1.style.lineHeight = '24px';
gridButtons1.style.cursor = 'pointer';
gridButtons1Link.appendChild(gridButtons1);

const tripleGridSubDiv2 = document.createElement('div');
tripleGridSubDiv2.id = 'triple-grid-sub-div2';
tripleGridContainer.appendChild(tripleGridSubDiv2);

const gridImage2 = document.createElement('img');
gridImage2.id = 'grid-image2';
gridImage2.src = 'images/Cynthia_G_3Col_376x252_Desktop_3-column-desktop.jpeg';
// gridImage2.alt = 'food-experts-main-image';
gridImage2.style.width = '100%';
tripleGridSubDiv2.appendChild(gridImage2);

const gridTitle2 = document.createElement('div');
gridTitle2.id = 'grid-title2';
gridTitle2.textContent = 'Our Dietitians';
gridTitle2.style.fontSize = '36px';
gridTitle2.style.fontWeight = '700';
gridTitle2.style.padding = '45px 0 18px 0';
tripleGridSubDiv2.appendChild(gridTitle2);

const gridDescription2 = document.createElement('div');
gridDescription2.id = 'grid-description2';
gridDescription2.textContent = `Get to know our Registered 
Dietitian Nutritionists who add a different type of value 
to your meal.`;
gridDescription2.style.padding = '18px 0 0 0';
gridDescription2.style.lineHeight = '24px';
tripleGridSubDiv2.appendChild(gridDescription2);

const buttonsTripleGridSubDiv2 = document.createElement('div');
buttonsTripleGridSubDiv2.id = 'buttons-triple-grid-sub-div2';
buttonsTripleGrid.appendChild(buttonsTripleGridSubDiv2);

const gridButtons2Link = document.createElement('a');
gridButtons2Link.id = 'grid-buttons2-link';
gridButtons2Link.href = `https://www.mcdonalds.com/us/en-us/about-
our-food/meet-our-food-experts/our-nutritionists.html`;
buttonsTripleGridSubDiv2.appendChild(gridButtons2Link);

const gridButtons2 = document.createElement('button');
gridButtons2.id = 'grid-buttons2';
gridButtons2.textContent = 'Meet Our Dietitians';
gridButtons2.style.backgroundColor = 'rgb(255, 188, 13)';
gridButtons2.style.border = 'none';
gridButtons2.style.borderRadius = '4px';
gridButtons2.style.marginTop = '35px';
gridButtons2.style.padding = '13px 25px';
gridButtons2.style.fontSize = '16px';
gridButtons2.style.lineHeight = '24px';
gridButtons2.style.cursor = 'pointer';
gridButtons2Link.appendChild(gridButtons2);

const tripleGridSubDiv3 = document.createElement('div');
tripleGridSubDiv3.id = 'triple-grid-sub-div3';
tripleGridContainer.appendChild(tripleGridSubDiv3);

const gridImage3 = document.createElement('img');
gridImage3.id = 'grid-image3';
gridImage3.src = 'images/Suppliers_3Col_3-column-desktop.jpeg';
// gridImage3.alt = 'food-experts-main-image';
gridImage3.style.width = '100%';
tripleGridSubDiv3.appendChild(gridImage3);

const gridTitle3 = document.createElement('div');
gridTitle3.id = 'grid-title3';
gridTitle3.textContent = 'Supplier Stories';
gridTitle3.style.fontSize = '36px';
gridTitle3.style.fontWeight = '700';
gridTitle3.style.padding = '45px 0 18px 0';
tripleGridSubDiv3.appendChild(gridTitle3);

const gridDescription3 = document.createElement('div');
gridDescription3.id = 'grid-description3';
gridDescription3.textContent = `Meet some of the people 
who provide the ingredients for your favorite menu items.`;
gridDescription3.style.padding = '18px 0 0 0';
gridDescription3.style.lineHeight = '24px';
tripleGridSubDiv3.appendChild(gridDescription3);

const buttonsTripleGridSubDiv3 = document.createElement('div');
buttonsTripleGridSubDiv3.id = 'buttons-triple-grid-sub-div3';
buttonsTripleGrid.appendChild(buttonsTripleGridSubDiv3);

const gridButtons3Link = document.createElement('a');
gridButtons3Link.id = 'grid-buttons3-link';
gridButtons3Link.href = `https://www.mcdonalds.com/us/en-us/about-
our-food/meet-our-suppliers.html`;
buttonsTripleGridSubDiv3.appendChild(gridButtons3Link);

const gridButtons3 = document.createElement('button');
gridButtons3.id = 'grid-buttons3';
gridButtons3.textContent = 'See Supplier Stories';
gridButtons3.style.backgroundColor = 'rgb(255, 188, 13)';
gridButtons3.style.border = 'none';
gridButtons3.style.borderRadius = '4px';
gridButtons3.style.marginTop = '35px';
gridButtons3.style.padding = '13px 25px';
gridButtons3.style.fontSize = '16px';
gridButtons3.style.lineHeight = '24px';
gridButtons3.style.cursor = 'pointer';
gridButtons3Link.appendChild(gridButtons3);

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
