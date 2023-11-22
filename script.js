
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
    link.style.color = 'rgb(41,41,41)';
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
header.appendChild(headerContainer);

const headerLogoContainer = document.createElement('div');
headerLogoContainer.id = 'header-logo-container';
headerLogoContainer.style.display = 'flex';
headerLogoContainer.style.alignItems = 'center';
headerContainer.appendChild(headerLogoContainer);

const archesLogoLink = document.createElement('a');
archesLogoLink.id = 'arches-logo-link';
archesLogoLink.href = `https://www.mcdonalds.com/us/en-us.html`;
headerLogoContainer.appendChild(archesLogoLink);

const archesHeaderLogo = document.createElement('img');
archesHeaderLogo.id = 'arches-header-logo';
archesHeaderLogo.src = 'icons/arches-logo_108x108.jpg';
archesLogoLink.appendChild(archesHeaderLogo);

const headerMainLinksContainer = document.createElement('div');
headerMainLinksContainer.id = 'header-main-links-container';
headerMainLinksContainer.style.display = 'flex';
headerMainLinksContainer.style.flexDirection = 'column';
headerMainLinksContainer.style.justifyContent = 'space-between';
headerContainer.appendChild(headerMainLinksContainer);

// HEADER TOP LINKS CONTAINER

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

const headerTopLinksLanguage = document.createElement('a');
headerTopLinksLanguage.id = 'header-top-links-language';
headerTopLinksLanguage.href = '';
headerTopLinksLanguage.textContent = 'Language';
headerTopLinksLanguage.style.color = 'rgb(41,41,41)';
headerTopLinksLanguage.style.textDecoration = 'none';
headerTopLinksLanguage.style.margin = '0 30px 0 0';
topLeftHeaderLinksContainer.appendChild(headerTopLinksLanguage);

const headerTopLinksLanguageDownArrow = document.createElement('img');
headerTopLinksLanguageDownArrow.id = 'header-top-links-language-down-arrow';
headerTopLinksLanguageDownArrow.src = 'icons/downarrow.png';
headerTopLinksLanguageDownArrow.style.marginLeft = '5px';
headerTopLinksLanguageDownArrow.style.width = '9px';
headerTopLinksLanguage.appendChild(headerTopLinksLanguageDownArrow);

const headerTopLinksEmail = document.createElement('a');
headerTopLinksEmail.id = 'header-top-links-email';
headerTopLinksEmail.href = `https://www.mcdonalds.com/us/en-us/mcdonalds-
email-signup.html`;
headerTopLinksEmail.textContent = 'Sign Up for Email';
headerTopLinksEmail.style.color = 'rgb(41,41,41)';
headerTopLinksEmail.style.textDecoration = 'none';
headerTopLinksEmail.style.margin = '0 30px 0 0';
topLeftHeaderLinksContainer.appendChild(headerTopLinksEmail);

const headerTopLinksCareers = document.createElement('a');
headerTopLinksCareers.id = 'header-top-links-careers';
headerTopLinksCareers.href = `https://www.mcdonalds.com/us/en-us/
mcdonalds-careers.html`;
headerTopLinksCareers.textContent = 'Careers';
headerTopLinksCareers.style.color = 'rgb(41,41,41)';
headerTopLinksCareers.style.textDecoration = 'none';
headerTopLinksCareers.style.margin = '0 30px 0 0';
topLeftHeaderLinksContainer.appendChild(headerTopLinksCareers);

const topRightHeaderLinksContainer = document.createElement('div');
topRightHeaderLinksContainer.id = 'top-right-header-links-container';
topRightHeaderLinksContainer.style.display = 'flex';
topRightHeaderLinksContainer.style.alignItems = 'center';
topHeaderLinksContainer.appendChild(topRightHeaderLinksContainer);

const headerTopLinksSearch = document.createElement('a');
headerTopLinksSearch.id = 'header-top-links-search';
headerTopLinksSearch.href = `https://www.mcdonalds.com/us/en-us/
search-results.html`;
headerTopLinksSearch.style.display = 'flex';
headerTopLinksSearch.style.justifyContent = 'center';
headerTopLinksSearch.style.alignItems = 'center';
headerTopLinksSearch.style.textDecoration = 'none';
headerTopLinksSearch.style.color = 'rgb(41,41,41)';
headerTopLinksSearch.style.textDecoration = 'none';
headerTopLinksSearch.style.margin = '0 30px 0 0';
topRightHeaderLinksContainer.appendChild(headerTopLinksSearch);

const searchIcon = document.createElement('img');
searchIcon.id = 'search-icon';
searchIcon.src = 'icons/search-icon.png';
searchIcon.style.width = '16px';
searchIcon.style.height = '15px';
searchIcon.style.marginRight = '5px';
headerTopLinksSearch.appendChild(searchIcon);

const linkText = document.createElement('div');
linkText.id = 'link-text';
linkText.textContent = 'Search';
linkText.style.lineHeight = '0px';
headerTopLinksSearch.appendChild(linkText);

const headerTopLinksLocation = document.createElement('a');
headerTopLinksLocation.id = 'header-top-links-location';
headerTopLinksLocation.href = `https://www.mcdonalds.com/us/
en-us/restaurant-locator.html`;
headerTopLinksLocation.style.display = 'flex';
headerTopLinksLocation.style.justifyContent = 'center';
headerTopLinksLocation.style.alignItems = 'center';
headerTopLinksLocation.style.textDecoration = 'none';
headerTopLinksLocation.style.color = 'rgb(0,107,174)';
// headerTopLinksLocation.style.textDecoration = 'none';
headerTopLinksLocation.style.textDecoration = 'underline';
headerTopLinksLocation.style.margin = '0 30px 0 0';
topRightHeaderLinksContainer.appendChild(headerTopLinksLocation);

const locationPinIcon = document.createElement('img');
locationPinIcon.id = 'location-pin-icon';
locationPinIcon.src = 'icons/location-pin.png';
locationPinIcon.style.width = '17px';
locationPinIcon.style.height = '19px';
locationPinIcon.style.marginRight = '5px';
headerTopLinksLocation.appendChild(locationPinIcon);

const linkTextLocation = document.createElement('div');
linkTextLocation.id = 'link-text-location';
linkTextLocation.textContent = 'Change your Location';
linkTextLocation.style.lineHeight = '0px';
headerTopLinksLocation.appendChild(linkTextLocation);

const orderNowButton = document.createElement('button');
orderNowButton.id = 'order-now-button';
orderNowButton.textContent = 'Order Now';
orderNowButton.style.backgroundColor = 'rgb(255, 188, 13)';
orderNowButton.style.border = 'none';
orderNowButton.style.borderRadius = '4px';
orderNowButton.style.padding = '8px 25px';
orderNowButton.style.fontSize = '16px';
orderNowButton.style.lineHeight = '24px';
orderNowButton.style.cursor = 'pointer';
topRightHeaderLinksContainer.appendChild(orderNowButton);

// MODAL

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

// HEADER BOTTOM LINKS CONTAINER

const bottomHeaderLinksContainer = document.createElement('div');
bottomHeaderLinksContainer.id = 'bottom-header-links-container';
bottomHeaderLinksContainer.style.display = 'flex';
bottomHeaderLinksContainer.style.paddingBottom = '15px';
headerMainLinksContainer.appendChild(bottomHeaderLinksContainer);

const bottomHeaderLinksContainerUl = document.createElement('ul');
bottomHeaderLinksContainerUl.id = 'bottom-header-links-container-ul';
bottomHeaderLinksContainerUl.style.display = 'inline';
bottomHeaderLinksContainerUl.style.padding = '0';
bottomHeaderLinksContainer.appendChild(bottomHeaderLinksContainerUl);

const bottomHeaderLinksContainerLiMenu = document.createElement('li');
bottomHeaderLinksContainerLiMenu.id = 'bottom-header-links-container-li-menu';
bottomHeaderLinksContainerLiMenu.textContent = 'Our Menu';
bottomHeaderLinksContainerLiMenu.style.listStyleType = 'none';
bottomHeaderLinksContainerLiMenu.style.display = 'inline';
bottomHeaderLinksContainerLiMenu.style.margin = '0 25px 0 0';
bottomHeaderLinksContainerUl.appendChild(bottomHeaderLinksContainerLiMenu);

const downArrowLargeIcon = document.createElement('img');
downArrowLargeIcon.id = 'down-arrow-large-icon';
downArrowLargeIcon.src = 'icons/downarrow.png';
downArrowLargeIcon.style.marginLeft = '5px';
downArrowLargeIcon.style.width = '12px';
bottomHeaderLinksContainerLiMenu.appendChild(downArrowLargeIcon);

const bottomHeaderLinksContainerLiApp = document.createElement('li');
bottomHeaderLinksContainerLiApp.id = 'bottom-header-links-container-li-app';
bottomHeaderLinksContainerLiApp.style.display = 'inline';
bottomHeaderLinksContainerLiApp.style.margin = '0 25px 0 0';
bottomHeaderLinksContainerUl.appendChild(bottomHeaderLinksContainerLiApp);

const bottomHeaderLinksContainerLiAppLink = document.createElement('a');
bottomHeaderLinksContainerLiAppLink.id = 'bottom-header-links-container-li-app-link';
bottomHeaderLinksContainerLiAppLink.href = `https://www.mcdonalds.com/us/
en-us/download-app.html`;
bottomHeaderLinksContainerLiAppLink.textContent = 'Download App';
bottomHeaderLinksContainerLiAppLink.style.listStyleType = 'none';
bottomHeaderLinksContainerLiAppLink.style.color = 'rgb(41,41,41)';
bottomHeaderLinksContainerLiAppLink.style.textDecoration = 'none';
bottomHeaderLinksContainerLiApp.appendChild(bottomHeaderLinksContainerLiAppLink);

const bottomHeaderLinksContainerLiRew = document.createElement('li');
bottomHeaderLinksContainerLiRew.id = 'bottom-header-links-container-li-rew';
bottomHeaderLinksContainerLiRew.style.display = 'inline';
bottomHeaderLinksContainerLiRew.style.margin = '0 25px 0 0';
bottomHeaderLinksContainerUl.appendChild(bottomHeaderLinksContainerLiRew);

const bottomHeaderLinksContainerLiRewLink = document.createElement('a');
bottomHeaderLinksContainerLiRewLink.id = 'bottom-header-links-container-li-rew-link';
bottomHeaderLinksContainerLiRewLink.href = `https://www.mcdonalds.com/us/
en-us/mymcdonalds.html`;
bottomHeaderLinksContainerLiRewLink.textContent = 'MyMcDonald\'s rewards';
bottomHeaderLinksContainerLiRewLink.style.listStyleType = 'none';
bottomHeaderLinksContainerLiRewLink.style.color = 'rgb(41,41,41)';
bottomHeaderLinksContainerLiRewLink.style.textDecoration = 'none';
bottomHeaderLinksContainerLiRew.appendChild(bottomHeaderLinksContainerLiRewLink);

const bottomHeaderLinksContainerLiDeal = document.createElement('li');
bottomHeaderLinksContainerLiDeal.id = 'bottom-header-links-container-li-deal';
bottomHeaderLinksContainerLiDeal.style.display = 'inline';
bottomHeaderLinksContainerLiDeal.style.margin = '0 25px 0 0';
bottomHeaderLinksContainerUl.appendChild(bottomHeaderLinksContainerLiDeal);

const bottomHeaderLinksContainerLiDealLink = document.createElement('a');
bottomHeaderLinksContainerLiDealLink.id = 'bottom-header-links-container-li-deal-link';
bottomHeaderLinksContainerLiDealLink.href = `https://www.mcdonalds.com/us/en-us/deals.html`;
bottomHeaderLinksContainerLiDealLink.textContent = 'Excusive Deals';
bottomHeaderLinksContainerLiDealLink.style.listStyleType = 'none';
bottomHeaderLinksContainerLiDealLink.style.color = 'rgb(41,41,41)';
bottomHeaderLinksContainerLiDealLink.style.textDecoration = 'none';
bottomHeaderLinksContainerLiDeal.appendChild(bottomHeaderLinksContainerLiDealLink);

const bottomHeaderLinksContainerLiFood = document.createElement('li');
bottomHeaderLinksContainerLiFood.id = 'bottom-header-links-container-li-food';
bottomHeaderLinksContainerLiFood.style.display = 'inline';
bottomHeaderLinksContainerLiFood.style.margin = '0 25px 0 0';
bottomHeaderLinksContainerUl.appendChild(bottomHeaderLinksContainerLiFood);

const bottomHeaderLinksContainerLiFoodLink = document.createElement('a');
bottomHeaderLinksContainerLiFoodLink.id = 'bottom-header-links-container-li-food-link';
bottomHeaderLinksContainerLiFoodLink.href = `https://www.mcdonalds.com/us/en-us/about-
our-food.html`;
bottomHeaderLinksContainerLiFoodLink.textContent = 'About Our Food';
bottomHeaderLinksContainerLiFoodLink.style.listStyleType = 'none';
bottomHeaderLinksContainerLiFoodLink.style.color = 'rgb(41,41,41)';
bottomHeaderLinksContainerLiFoodLink.style.textDecoration = 'none';
bottomHeaderLinksContainerLiFood.appendChild(bottomHeaderLinksContainerLiFoodLink);

const bottomHeaderLinksContainerLiLocate = document.createElement('li');
bottomHeaderLinksContainerLiLocate.id = 'bottom-header-links-container-li-locate';
bottomHeaderLinksContainerLiLocate.style.display = 'inline';
bottomHeaderLinksContainerLiLocate.style.margin = '0 25px 0 0';
bottomHeaderLinksContainerUl.appendChild(bottomHeaderLinksContainerLiLocate);

const bottomHeaderLinksContainerLiLocateLink = document.createElement('a');
bottomHeaderLinksContainerLiLocateLink.id = 'bottom-header-links-container-li-locate-link';
bottomHeaderLinksContainerLiLocateLink.href = `https://www.mcdonalds.com/us/en-us/restaurant
-locator.html`;
bottomHeaderLinksContainerLiLocateLink.textContent = 'Locate';
bottomHeaderLinksContainerLiLocateLink.style.listStyleType = 'none';
bottomHeaderLinksContainerLiLocateLink.style.color = 'rgb(41,41,41)';
bottomHeaderLinksContainerLiLocateLink.style.textDecoration = 'none';
bottomHeaderLinksContainerLiLocate.appendChild(bottomHeaderLinksContainerLiLocateLink);

const bottomHeaderLinksContainerLiGift = document.createElement('li');
bottomHeaderLinksContainerLiGift.id = 'bottom-header-links-container-li-gift';
bottomHeaderLinksContainerLiGift.style.display = 'inline';
bottomHeaderLinksContainerLiGift.style.margin = '0 25px 0 0';
bottomHeaderLinksContainerUl.appendChild(bottomHeaderLinksContainerLiGift);

const bottomHeaderLinksContainerLiGiftLink = document.createElement('a');
bottomHeaderLinksContainerLiGiftLink.id = 'bottom-header-links-container-li-gift-link';
bottomHeaderLinksContainerLiGiftLink.href = `https://www.mcdonalds.com/us/en-us/
arch-card.html`;
bottomHeaderLinksContainerLiGiftLink.textContent = 'Gift Cards';
bottomHeaderLinksContainerLiGiftLink.style.listStyleType = 'none';
bottomHeaderLinksContainerLiGiftLink.style.color = 'rgb(41,41,41)';
bottomHeaderLinksContainerLiGiftLink.style.textDecoration = 'none';
bottomHeaderLinksContainerLiGift.appendChild(bottomHeaderLinksContainerLiGiftLink);

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

// BOTTOM SECTION: BOTTOM LINKS

const unorderedListFlexbox = document.createElement('section');
unorderedListFlexbox.id = 'unordered-list-flexbox';
unorderedListFlexbox.style.display = 'flex';
unorderedListFlexbox.style.justifyContent = 'space-between';
unorderedListFlexbox.style.padding = '0 20px';
mainContentContainer.appendChild(unorderedListFlexbox);

const unorderedListFlexboxSubDiv1 = document.createElement('div');
unorderedListFlexboxSubDiv1.id = 'unordered-list-flexbox-sub-div1';
unorderedListFlexbox.appendChild(unorderedListFlexboxSubDiv1);

const listHeader1 = document.createElement('div');
listHeader1.id = 'list-header1';
listHeader1.textContent = 'About Us';
listHeader1.style.fontWeight = '700';
listHeader1.style.marginBottom = '18px';
unorderedListFlexboxSubDiv1.appendChild(listHeader1);

const unorderedListFlexboxUl1 = document.createElement('ul');
unorderedListFlexboxUl1.id = 'unordered-list-flexbox-ul1';
unorderedListFlexboxUl1.style.padding = '0';
unorderedListFlexboxSubDiv1.appendChild(unorderedListFlexboxUl1);

const unorderedListFlexboxLi1AboutLink = document.createElement('a');
unorderedListFlexboxLi1AboutLink.id = 'unordered-list-flexbox-li1-about-link';
unorderedListFlexboxLi1AboutLink.href = `https://www.mcdonalds.com/us/en-us/
about-us.html`;
unorderedListFlexboxLi1AboutLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi1AboutLink.style.textDecoration = 'none';
unorderedListFlexboxLi1AboutLink.style.listStyleType = 'none';
unorderedListFlexboxLi1AboutLink.style.width = '180px';
unorderedListFlexboxLi1AboutLink.style.marginBottom = '6px';
unorderedListFlexboxUl1.appendChild(unorderedListFlexboxLi1AboutLink);

const unorderedListFlexboxLi1About = document.createElement('li');
unorderedListFlexboxLi1About.id = 'unordered-list-flexbox-li1-about';
unorderedListFlexboxLi1About.textContent = 'About Us Overview';
unorderedListFlexboxLi1About.style.listStyleType = 'none';
unorderedListFlexboxLi1About.style.width = '180px';
unorderedListFlexboxLi1About.style.marginBottom = '6px';
unorderedListFlexboxLi1AboutLink.appendChild(unorderedListFlexboxLi1About);

const unorderedListFlexboxLi2TeamLink = document.createElement('a');
unorderedListFlexboxLi2TeamLink.id = 'unordered-list-flexbox-li2-team-link';
unorderedListFlexboxLi2TeamLink.href = `https://www.mcdonalds.com/us/en-us/
about-us/leadership-team.html`;
unorderedListFlexboxLi2TeamLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi2TeamLink.style.textDecoration = 'none';
unorderedListFlexboxLi2TeamLink.style.listStyleType = 'none';
unorderedListFlexboxLi2TeamLink.style.width = '180px';
unorderedListFlexboxLi2TeamLink.style.marginBottom = '6px';
unorderedListFlexboxUl1.appendChild(unorderedListFlexboxLi2TeamLink);

const unorderedListFlexboxLi2Team = document.createElement('li');
unorderedListFlexboxLi2Team.id = 'unordered-list-flexbox-li2-team';
unorderedListFlexboxLi2Team.textContent = 'Leadership Team';
unorderedListFlexboxLi2Team.style.listStyleType = 'none';
unorderedListFlexboxLi2Team.style.width = '180px';
unorderedListFlexboxLi2Team.style.marginBottom = '6px';
unorderedListFlexboxLi2TeamLink.appendChild(unorderedListFlexboxLi2Team);

const unorderedListFlexboxLi3ValuesLink = document.createElement('a');
unorderedListFlexboxLi3ValuesLink.id = 'unordered-list-flexbox-li3-values-link';
unorderedListFlexboxLi3ValuesLink.href = `https://www.mcdonalds.com/us/en-us/
about-us/values-in-action.html`;
unorderedListFlexboxLi3ValuesLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi3ValuesLink.style.textDecoration = 'none';
unorderedListFlexboxLi3ValuesLink.style.listStyleType = 'none';
unorderedListFlexboxLi3ValuesLink.style.width = '180px';
unorderedListFlexboxLi3ValuesLink.style.marginBottom = '6px';
unorderedListFlexboxUl1.appendChild(unorderedListFlexboxLi3ValuesLink);

const unorderedListFlexboxLi3Values = document.createElement('li');
unorderedListFlexboxLi3Values.id = 'unordered-list-flexbox-li3-values';
unorderedListFlexboxLi3Values.textContent = 'Values In Action';
unorderedListFlexboxLi3Values.style.listStyleType = 'none';
unorderedListFlexboxLi3Values.style.width = '180px';
unorderedListFlexboxLi3Values.style.marginBottom = '6px';
unorderedListFlexboxLi3ValuesLink.appendChild(unorderedListFlexboxLi3Values);

const unorderedListFlexboxLi4FranchiseLink = document.createElement('a');
unorderedListFlexboxLi4FranchiseLink.id = 'unordered-list-flexbox-li4-franchise-link';
unorderedListFlexboxLi4FranchiseLink.href = `https://www.mcdonalds.com/us/en-us/
us-franchising.html`;
unorderedListFlexboxLi4FranchiseLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi4FranchiseLink.style.textDecoration = 'none';
unorderedListFlexboxLi4FranchiseLink.style.listStyleType = 'none';
unorderedListFlexboxLi4FranchiseLink.style.width = '180px';
unorderedListFlexboxLi4FranchiseLink.style.marginBottom = '6px';
unorderedListFlexboxUl1.appendChild(unorderedListFlexboxLi4FranchiseLink);

const unorderedListFlexboxLi4Franchise = document.createElement('li');
unorderedListFlexboxLi4Franchise.id = 'unordered-list-flexbox-li4-franchise';
unorderedListFlexboxLi4Franchise.textContent = 'Franchise Info';
unorderedListFlexboxLi4Franchise.style.listStyleType = 'none';
unorderedListFlexboxLi4Franchise.style.width = '180px';
unorderedListFlexboxLi4Franchise.style.marginBottom = '6px';
unorderedListFlexboxLi4FranchiseLink.appendChild(unorderedListFlexboxLi4Franchise);

const unorderedListFlexboxLi5RecallsLink = document.createElement('a');
unorderedListFlexboxLi5RecallsLink.id = 'unordered-list-flexbox-li5-recalls-link';
unorderedListFlexboxLi5RecallsLink.href = `https://www.mcdonalds.com/us/en-us/
about-us/recalls.html`;
unorderedListFlexboxLi5RecallsLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi5RecallsLink.style.textDecoration = 'none';
unorderedListFlexboxLi5RecallsLink.style.listStyleType = 'none';
unorderedListFlexboxLi5RecallsLink.style.width = '180px';
unorderedListFlexboxLi5RecallsLink.style.marginBottom = '6px';
unorderedListFlexboxUl1.appendChild(unorderedListFlexboxLi5RecallsLink);

const unorderedListFlexboxLi5Recalls = document.createElement('li');
unorderedListFlexboxLi5Recalls.id = 'unordered-list-flexbox-li5-recalls';
unorderedListFlexboxLi5Recalls.textContent = 'Recalls & Alerts';
unorderedListFlexboxLi5Recalls.style.listStyleType = 'none';
unorderedListFlexboxLi5Recalls.style.width = '180px';
unorderedListFlexboxLi5Recalls.style.marginBottom = '6px';
unorderedListFlexboxLi5RecallsLink.appendChild(unorderedListFlexboxLi5Recalls);

const unorderedListFlexboxLi6RealLink = document.createElement('a');
unorderedListFlexboxLi6RealLink.id = 'unordered-list-flexbox-li6-real-link';
unorderedListFlexboxLi6RealLink.href = `https://www.mcdonalds.com/us/en-us/
about-us/franchising/real-estate.html`;
unorderedListFlexboxLi6RealLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi6RealLink.style.textDecoration = 'none';
unorderedListFlexboxLi6RealLink.style.listStyleType = 'none';
unorderedListFlexboxLi6RealLink.style.width = '180px';
unorderedListFlexboxLi6RealLink.style.marginBottom = '6px';
unorderedListFlexboxUl1.appendChild(unorderedListFlexboxLi6RealLink);

const unorderedListFlexboxLi6Real = document.createElement('li');
unorderedListFlexboxLi6Real.id = 'unordered-list-flexbox-li6-real';
unorderedListFlexboxLi6Real.textContent = 'Real Estate';
unorderedListFlexboxLi6Real.style.listStyleType = 'none';
unorderedListFlexboxLi6Real.style.width = '180px';
unorderedListFlexboxLi6Real.style.marginBottom = '6px';
unorderedListFlexboxLi6RealLink.appendChild(unorderedListFlexboxLi6Real);

const unorderedListFlexboxLi7AccessLink = document.createElement('a');
unorderedListFlexboxLi7AccessLink.id = 'unordered-list-flexbox-li7-access-link';
unorderedListFlexboxLi7AccessLink.href = `https://www.mcdonalds.com/us/en-us/
accessibility.html`;
unorderedListFlexboxLi7AccessLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi7AccessLink.style.textDecoration = 'none';
unorderedListFlexboxLi7AccessLink.style.listStyleType = 'none';
unorderedListFlexboxLi7AccessLink.style.width = '180px';
unorderedListFlexboxLi7AccessLink.style.marginBottom = '6px';
unorderedListFlexboxUl1.appendChild(unorderedListFlexboxLi7AccessLink);

const unorderedListFlexboxLi7Access = document.createElement('li');
unorderedListFlexboxLi7Access.id = 'unordered-list-flexbox-li7-access';
unorderedListFlexboxLi7Access.textContent = 'Accessibility';
unorderedListFlexboxLi7Access.style.listStyleType = 'none';
unorderedListFlexboxLi7Access.style.width = '180px';
unorderedListFlexboxLi7Access.style.marginBottom = '6px';
unorderedListFlexboxLi7AccessLink.appendChild(unorderedListFlexboxLi7Access);

const unorderedListFlexboxLi8investLink = document.createElement('a');
unorderedListFlexboxLi8investLink.id = 'unordered-list-flexbox-li8-invest-link';
unorderedListFlexboxLi8investLink.href = `https://corporate.mcdonalds.com/
corpmcd/investors.html`;
unorderedListFlexboxLi8investLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi8investLink.style.textDecoration = 'none';
unorderedListFlexboxLi8investLink.style.listStyleType = 'none';
unorderedListFlexboxLi8investLink.style.width = '180px';
unorderedListFlexboxLi8investLink.style.marginBottom = '6px';
unorderedListFlexboxUl1.appendChild(unorderedListFlexboxLi8investLink);

const unorderedListFlexboxLi8invest = document.createElement('li');
unorderedListFlexboxLi8invest.id = 'unordered-list-flexbox-li8-invest';
unorderedListFlexboxLi8invest.textContent = 'Investor Relations';
unorderedListFlexboxLi8invest.style.listStyleType = 'none';
unorderedListFlexboxLi8invest.style.width = '180px';
unorderedListFlexboxLi8invest.style.marginBottom = '6px';
unorderedListFlexboxLi8investLink.appendChild(unorderedListFlexboxLi8invest);

const unorderedListFlexboxLi9NewsLink = document.createElement('a');
unorderedListFlexboxLi9NewsLink.id = 'unordered-list-flexbox-li9-news-link';
unorderedListFlexboxLi9NewsLink.href = `https://corporate.mcdonalds.com/
corpmcd/our-stories.html`;
unorderedListFlexboxLi9NewsLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi9NewsLink.style.textDecoration = 'none';
unorderedListFlexboxLi9NewsLink.style.listStyleType = 'none';
unorderedListFlexboxLi9NewsLink.style.width = '180px';
unorderedListFlexboxLi9NewsLink.style.marginBottom = '6px';
unorderedListFlexboxUl1.appendChild(unorderedListFlexboxLi9NewsLink);

const unorderedListFlexboxLi9News = document.createElement('li');
unorderedListFlexboxLi9News.id = 'unordered-list-flexbox-li9-news';
unorderedListFlexboxLi9News.textContent = 'News & Notifications';
unorderedListFlexboxLi9News.style.listStyleType = 'none';
unorderedListFlexboxLi9News.style.width = '180px';
unorderedListFlexboxLi9News.style.marginBottom = '6px';
unorderedListFlexboxLi9NewsLink.appendChild(unorderedListFlexboxLi9News);

const unorderedListFlexboxSubDiv2 = document.createElement('div');
unorderedListFlexboxSubDiv2.id = 'unordered-list-flexbox-sub-div2';
unorderedListFlexbox.appendChild(unorderedListFlexboxSubDiv2);

const listHeader2 = document.createElement('div');
listHeader2.id = 'list-header2';
listHeader2.textContent = 'Services';
listHeader2.style.fontWeight = '700';
listHeader2.style.marginBottom = '18px';
unorderedListFlexboxSubDiv2.appendChild(listHeader2);

const unorderedListFlexboxUl2 = document.createElement('ul');
unorderedListFlexboxUl2.id = 'unordered-list-flexbox-ul2';
unorderedListFlexboxUl2.style.padding = '0';
unorderedListFlexboxSubDiv2.appendChild(unorderedListFlexboxUl2);

const unorderedListFlexboxLi21ServicesLink = document.createElement('a');
unorderedListFlexboxLi21ServicesLink.id = 'unordered-list-flexbox-li21-services-link';
unorderedListFlexboxLi21ServicesLink.href = `https://www.mcdonalds.com/us/en-us/
services.html`;
unorderedListFlexboxLi21ServicesLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi21ServicesLink.style.textDecoration = 'none';
unorderedListFlexboxLi21ServicesLink.style.listStyleType = 'none';
unorderedListFlexboxLi21ServicesLink.style.width = '180px';
unorderedListFlexboxLi21ServicesLink.style.marginBottom = '6px';
unorderedListFlexboxUl2.appendChild(unorderedListFlexboxLi21ServicesLink);

const unorderedListFlexboxLi21Services = document.createElement('li');
unorderedListFlexboxLi21Services.id = 'unordered-list-flexbox-li21-services';
unorderedListFlexboxLi21Services.textContent = 'Services Overview';
unorderedListFlexboxLi21Services.style.listStyleType = 'none';
unorderedListFlexboxLi21Services.style.width = '180px';
unorderedListFlexboxLi21Services.style.marginBottom = '6px';
unorderedListFlexboxLi21ServicesLink.appendChild(unorderedListFlexboxLi21Services);

const unorderedListFlexboxLi22WifiLink = document.createElement('a');
unorderedListFlexboxLi22WifiLink.id = 'unordered-list-flexbox-li22-wifi-link';
unorderedListFlexboxLi22WifiLink.href = `https://www.mcdonalds.com/us/en-us/
services/free-wi-fi.html`;
unorderedListFlexboxLi22WifiLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi22WifiLink.style.textDecoration = 'none';
unorderedListFlexboxLi22WifiLink.style.listStyleType = 'none';
unorderedListFlexboxLi22WifiLink.style.width = '180px';
unorderedListFlexboxLi22WifiLink.style.marginBottom = '6px';
unorderedListFlexboxUl2.appendChild(unorderedListFlexboxLi22WifiLink);

const unorderedListFlexboxLi22Wifi = document.createElement('li');
unorderedListFlexboxLi22Wifi.id = 'unordered-list-flexbox-li22-wifi';
unorderedListFlexboxLi22Wifi.textContent = 'Wi-Fi';
unorderedListFlexboxLi22Wifi.style.listStyleType = 'none';
unorderedListFlexboxLi22Wifi.style.width = '180px';
unorderedListFlexboxLi22Wifi.style.marginBottom = '6px';
unorderedListFlexboxLi22WifiLink.appendChild(unorderedListFlexboxLi22Wifi);

const unorderedListFlexboxLi23PlayLink = document.createElement('a');
unorderedListFlexboxLi23PlayLink.id = 'unordered-list-flexbox-li23-play-link';
unorderedListFlexboxLi23PlayLink.href = `https://www.mcdonalds.com/us/en-us/
services/playplaces-and-parties.html`;
unorderedListFlexboxLi23PlayLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi23PlayLink.style.textDecoration = 'none';
unorderedListFlexboxLi23PlayLink.style.listStyleType = 'none';
unorderedListFlexboxLi23PlayLink.style.width = '180px';
unorderedListFlexboxLi23PlayLink.style.marginBottom = '6px';
unorderedListFlexboxUl2.appendChild(unorderedListFlexboxLi23PlayLink);

const unorderedListFlexboxLi23Play = document.createElement('li');
unorderedListFlexboxLi23Play.id = 'unordered-list-flexbox-li23-play';
unorderedListFlexboxLi23Play.textContent = 'Playplaces & Parties';
unorderedListFlexboxLi23Play.style.listStyleType = 'none';
unorderedListFlexboxLi23Play.style.width = '180px';
unorderedListFlexboxLi23Play.style.marginBottom = '6px';
unorderedListFlexboxLi23PlayLink.appendChild(unorderedListFlexboxLi23Play);

const unorderedListFlexboxLi24DeliveryLink = document.createElement('a');
unorderedListFlexboxLi24DeliveryLink.id = 'unordered-list-flexbox-li24-delivery-link';
unorderedListFlexboxLi24DeliveryLink.href = `https://www.mcdonalds.com/us/en-us/
mcdelivery.html`;
unorderedListFlexboxLi24DeliveryLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi24DeliveryLink.style.textDecoration = 'none';
unorderedListFlexboxLi24DeliveryLink.style.listStyleType = 'none';
unorderedListFlexboxLi24DeliveryLink.style.width = '180px';
unorderedListFlexboxLi24DeliveryLink.style.marginBottom = '6px';
unorderedListFlexboxUl2.appendChild(unorderedListFlexboxLi24DeliveryLink);

const unorderedListFlexboxLi24Delivery = document.createElement('li');
unorderedListFlexboxLi24Delivery.id = 'unordered-list-flexbox-li24-delivery';
unorderedListFlexboxLi24Delivery.textContent = 'McDelivery®';
unorderedListFlexboxLi24Delivery.style.listStyleType = 'none';
unorderedListFlexboxLi24Delivery.style.width = '180px';
unorderedListFlexboxLi24Delivery.style.marginBottom = '6px';
unorderedListFlexboxLi24DeliveryLink.appendChild(unorderedListFlexboxLi24Delivery);

const unorderedListFlexboxLi25MobileLink = document.createElement('a');
unorderedListFlexboxLi25MobileLink.id = 'unordered-list-flexbox-li25-mobile-link';
unorderedListFlexboxLi25MobileLink.href = `https://www.mcdonalds.com/us/en-us/
mobile-order-and-pay.html`;
unorderedListFlexboxLi25MobileLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi25MobileLink.style.textDecoration = 'none';
unorderedListFlexboxLi25MobileLink.style.listStyleType = 'none';
unorderedListFlexboxLi25MobileLink.style.width = '180px';
unorderedListFlexboxLi25MobileLink.style.marginBottom = '6px';
unorderedListFlexboxUl2.appendChild(unorderedListFlexboxLi25MobileLink);

const unorderedListFlexboxLi25Mobile = document.createElement('li');
unorderedListFlexboxLi25Mobile.id = 'unordered-list-flexbox-li25-mobile';
unorderedListFlexboxLi25Mobile.textContent = 'Mobile Order & Pay';
unorderedListFlexboxLi25Mobile.style.listStyleType = 'none';
unorderedListFlexboxLi25Mobile.style.width = '180px';
unorderedListFlexboxLi25Mobile.style.marginBottom = '6px';
unorderedListFlexboxLi25MobileLink.appendChild(unorderedListFlexboxLi25Mobile);

const unorderedListFlexboxLi26TrendLink = document.createElement('a');
unorderedListFlexboxLi26TrendLink.id = 'unordered-list-flexbox-li26-trend-link';
unorderedListFlexboxLi26TrendLink.href = `https://www.mcdonalds.com/us/
en-us/whats-hot.html`;
unorderedListFlexboxLi26TrendLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi26TrendLink.style.textDecoration = 'none';
unorderedListFlexboxLi26TrendLink.style.listStyleType = 'none';
unorderedListFlexboxLi26TrendLink.style.width = '180px';
unorderedListFlexboxLi26TrendLink.style.marginBottom = '6px';
unorderedListFlexboxUl2.appendChild(unorderedListFlexboxLi26TrendLink);

const unorderedListFlexboxLi26Trend = document.createElement('li');
unorderedListFlexboxLi26Trend.id = 'unordered-list-flexbox-li26-trend';
unorderedListFlexboxLi26Trend.textContent = 'Trending Now';
unorderedListFlexboxLi26Trend.style.listStyleType = 'none';
unorderedListFlexboxLi26Trend.style.width = '180px';
unorderedListFlexboxLi26Trend.style.marginBottom = '6px';
unorderedListFlexboxLi26TrendLink.appendChild(unorderedListFlexboxLi26Trend);

const unorderedListFlexboxLi27MerchLink = document.createElement('a');
unorderedListFlexboxLi27MerchLink.id = 'unordered-list-flexbox-li27-merch-link';
unorderedListFlexboxLi27MerchLink.href = `https://goldenarchesunlimited.com/`;
unorderedListFlexboxLi27MerchLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi27MerchLink.style.textDecoration = 'none';
unorderedListFlexboxLi27MerchLink.style.listStyleType = 'none';
unorderedListFlexboxLi27MerchLink.style.width = '180px';
unorderedListFlexboxLi27MerchLink.style.marginBottom = '6px';
unorderedListFlexboxUl2.appendChild(unorderedListFlexboxLi27MerchLink);

const unorderedListFlexboxLi27Merch = document.createElement('li');
unorderedListFlexboxLi27Merch.id = 'unordered-list-flexbox-li27-merch';
unorderedListFlexboxLi27Merch.textContent = 'McDonald\'s Merchandise';
unorderedListFlexboxLi27Merch.style.listStyleType = 'none';
unorderedListFlexboxLi27Merch.style.width = '180px';
unorderedListFlexboxLi27Merch.style.marginBottom = '6px';
unorderedListFlexboxLi27MerchLink.appendChild(unorderedListFlexboxLi27Merch);

const unorderedListFlexboxLi28FunLink = document.createElement('a');
unorderedListFlexboxLi28FunLink.id = 'unordered-list-flexbox-li28-fun-link';
unorderedListFlexboxLi28FunLink.href = `https://www.mcdonalds.com/us/en-us/
family-fun-hub.html`;
unorderedListFlexboxLi28FunLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi28FunLink.style.textDecoration = 'none';
unorderedListFlexboxLi28FunLink.style.listStyleType = 'none';
unorderedListFlexboxLi28FunLink.style.width = '180px';
unorderedListFlexboxLi28FunLink.style.marginBottom = '6px';
unorderedListFlexboxUl2.appendChild(unorderedListFlexboxLi28FunLink);

const unorderedListFlexboxLi28Fun = document.createElement('li');
unorderedListFlexboxLi28Fun.id = 'unordered-list-flexbox-li28-fun';
unorderedListFlexboxLi28Fun.textContent = 'Family Fun Hub';
unorderedListFlexboxLi28Fun.style.listStyleType = 'none';
unorderedListFlexboxLi28Fun.style.width = '180px';
unorderedListFlexboxLi28Fun.style.marginBottom = '6px';
unorderedListFlexboxLi28FunLink.appendChild(unorderedListFlexboxLi28Fun);

const unorderedListFlexboxLi29RewLink = document.createElement('a');
unorderedListFlexboxLi29RewLink.id = 'unordered-list-flexbox-li29-rew-link';
unorderedListFlexboxLi29RewLink.href = `https://www.mcdonalds.com/us/en-us/
mymcdonalds.html`;
unorderedListFlexboxLi29RewLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi29RewLink.style.textDecoration = 'none';
unorderedListFlexboxLi29RewLink.style.listStyleType = 'none';
unorderedListFlexboxLi29RewLink.style.width = '180px';
unorderedListFlexboxLi29RewLink.style.marginBottom = '6px';
unorderedListFlexboxUl2.appendChild(unorderedListFlexboxLi29RewLink);

const unorderedListFlexboxLi29Rew = document.createElement('li');
unorderedListFlexboxLi29Rew.id = 'unordered-list-flexbox-li29-rew';
unorderedListFlexboxLi29Rew.textContent = 'McDonald\'s Rewards';
unorderedListFlexboxLi29Rew.style.listStyleType = 'none';
unorderedListFlexboxLi29Rew.style.width = '180px';
unorderedListFlexboxLi29Rew.style.marginBottom = '6px';
unorderedListFlexboxLi29RewLink.appendChild(unorderedListFlexboxLi29Rew);

const unorderedListFlexboxLi210cafeLink = document.createElement('a');
unorderedListFlexboxLi210cafeLink.id = 'unordered-list-flexbox-li210-cafe-link';
unorderedListFlexboxLi210cafeLink.href = `https://www.mcdonalds.com/us/en-us/
mccafe.html`;
unorderedListFlexboxLi210cafeLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi210cafeLink.style.textDecoration = 'none';
unorderedListFlexboxLi210cafeLink.style.listStyleType = 'none';
unorderedListFlexboxLi210cafeLink.style.width = '180px';
unorderedListFlexboxLi210cafeLink.style.marginBottom = '6px';
unorderedListFlexboxUl2.appendChild(unorderedListFlexboxLi210cafeLink);

const unorderedListFlexboxLi210cafe = document.createElement('li');
unorderedListFlexboxLi210cafe.id = 'unordered-list-flexbox-li210-cafe';
unorderedListFlexboxLi210cafe.textContent = 'McCafé®';
unorderedListFlexboxLi210cafe.style.listStyleType = 'none';
unorderedListFlexboxLi210cafe.style.width = '180px';
unorderedListFlexboxLi210cafe.style.marginBottom = '6px';
unorderedListFlexboxLi210cafeLink.appendChild(unorderedListFlexboxLi210cafe);

const unorderedListFlexboxSubDiv3 = document.createElement('div');
unorderedListFlexboxSubDiv3.id = 'unordered-list-flexbox-sub-div3';
unorderedListFlexbox.appendChild(unorderedListFlexboxSubDiv3);

const listHeader3 = document.createElement('div');
listHeader3.id = 'list-header3';
listHeader3.textContent = 'Community';
listHeader3.style.fontWeight = '700';
listHeader3.style.marginBottom = '18px';
unorderedListFlexboxSubDiv3.appendChild(listHeader3);

const unorderedListFlexboxUl3 = document.createElement('ul');
unorderedListFlexboxUl3.id = 'unordered-list-flexbox-ul3';
unorderedListFlexboxUl3.style.padding = '0';
unorderedListFlexboxSubDiv3.appendChild(unorderedListFlexboxUl3);

const unorderedListFlexboxLi31ComLink = document.createElement('a');
unorderedListFlexboxLi31ComLink.id = 'unordered-list-flexbox-li31-com-link';
unorderedListFlexboxLi31ComLink.href = `https://www.mcdonalds.com/us/en-us/
community.html`;
unorderedListFlexboxLi31ComLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi31ComLink.style.textDecoration = 'none';
unorderedListFlexboxLi31ComLink.style.listStyleType = 'none';
unorderedListFlexboxLi31ComLink.style.width = '180px';
unorderedListFlexboxLi31ComLink.style.marginBottom = '6px';
unorderedListFlexboxUl3.appendChild(unorderedListFlexboxLi31ComLink);

const unorderedListFlexboxLi31Com = document.createElement('li');
unorderedListFlexboxLi31Com.id = 'unordered-list-flexbox-li31-com';
unorderedListFlexboxLi31Com.textContent = 'Community Overview';
unorderedListFlexboxLi31Com.style.listStyleType = 'none';
unorderedListFlexboxLi31Com.style.width = '180px';
unorderedListFlexboxLi31Com.style.marginBottom = '6px';
unorderedListFlexboxLi31ComLink.appendChild(unorderedListFlexboxLi31Com);

const unorderedListFlexboxLi32ServLink = document.createElement('a');
unorderedListFlexboxLi32ServLink.id = 'unordered-list-flexbox-li32-serv-link';
unorderedListFlexboxLi32ServLink.href = `https://www.mcdonalds.com/us/en-us/
community.html`;
unorderedListFlexboxLi32ServLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi32ServLink.style.textDecoration = 'none';
unorderedListFlexboxLi32ServLink.style.listStyleType = 'none';
unorderedListFlexboxLi32ServLink.style.width = '180px';
unorderedListFlexboxLi32ServLink.style.marginBottom = '6px';
unorderedListFlexboxUl3.appendChild(unorderedListFlexboxLi32ServLink);

const unorderedListFlexboxLi32Serv = document.createElement('li');
unorderedListFlexboxLi32Serv.id = 'unordered-list-flexbox-li32-serv';
unorderedListFlexboxLi32Serv.textContent = 'Now Serving';
unorderedListFlexboxLi32Serv.style.listStyleType = 'none';
unorderedListFlexboxLi32Serv.style.width = '180px';
unorderedListFlexboxLi32Serv.style.marginBottom = '6px';
unorderedListFlexboxLi32ServLink.appendChild(unorderedListFlexboxLi32Serv);

const unorderedListFlexboxLi33HacerLink = document.createElement('a');
unorderedListFlexboxLi33HacerLink.id = 'unordered-list-flexbox-li33-hacer-link';
unorderedListFlexboxLi33HacerLink.href = `https://www.mcdonalds.com/us/en-us/
community.html`;
unorderedListFlexboxLi33HacerLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi33HacerLink.style.textDecoration = 'none';
unorderedListFlexboxLi33HacerLink.style.listStyleType = 'none';
unorderedListFlexboxLi33HacerLink.style.width = '180px';
unorderedListFlexboxLi33HacerLink.style.marginBottom = '6px';
unorderedListFlexboxUl3.appendChild(unorderedListFlexboxLi33HacerLink);

const unorderedListFlexboxLi33Hacer = document.createElement('li');
unorderedListFlexboxLi33Hacer.id = 'unordered-list-flexbox-li33-hacer';
unorderedListFlexboxLi33Hacer.textContent = 'HACER® Scholarships for Hispanic Students';
unorderedListFlexboxLi33Hacer.style.listStyleType = 'none';
unorderedListFlexboxLi33Hacer.style.width = '180px';
unorderedListFlexboxLi33Hacer.style.marginBottom = '6px';
unorderedListFlexboxLi33HacerLink.appendChild(unorderedListFlexboxLi33Hacer);

const unorderedListFlexboxLi34CharLink = document.createElement('a');
unorderedListFlexboxLi34CharLink.id = 'unordered-list-flexbox-li34-char-link';
unorderedListFlexboxLi34CharLink.href = `https://www.mcdonalds.com/us/en-us/
community/giving-back-with-ronald-mcdonald-house.html`;
unorderedListFlexboxLi34CharLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi34CharLink.style.textDecoration = 'none';
unorderedListFlexboxLi34CharLink.style.listStyleType = 'none';
unorderedListFlexboxLi34CharLink.style.width = '180px';
unorderedListFlexboxLi34CharLink.style.marginBottom = '6px';
unorderedListFlexboxUl3.appendChild(unorderedListFlexboxLi34CharLink);

const unorderedListFlexboxLi34Char = document.createElement('li');
unorderedListFlexboxLi34Char.id = 'unordered-list-flexbox-li34-char';
unorderedListFlexboxLi34Char.textContent = 'Ronald McDonald House Charities';
unorderedListFlexboxLi34Char.style.listStyleType = 'none';
unorderedListFlexboxLi34Char.style.width = '180px';
unorderedListFlexboxLi34Char.style.marginBottom = '6px';
unorderedListFlexboxLi34CharLink.appendChild(unorderedListFlexboxLi34Char);

const unorderedListFlexboxLi35ApaLink = document.createElement('a');
unorderedListFlexboxLi35ApaLink.id = 'unordered-list-flexbox-li35-apa-link';
unorderedListFlexboxLi35ApaLink.href = `https://www.mcdonalds.com/us/en-us/
asian-pacific-americans.html`;
unorderedListFlexboxLi35ApaLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi35ApaLink.style.textDecoration = 'none';
unorderedListFlexboxLi35ApaLink.style.listStyleType = 'none';
unorderedListFlexboxLi35ApaLink.style.width = '180px';
unorderedListFlexboxLi35ApaLink.style.marginBottom = '6px';
unorderedListFlexboxUl3.appendChild(unorderedListFlexboxLi35ApaLink);

const unorderedListFlexboxLi35Apa = document.createElement('li');
unorderedListFlexboxLi35Apa.id = 'unordered-list-flexbox-li35-apa';
unorderedListFlexboxLi35Apa.textContent = 'McDonald’s Asian Pacific American';
unorderedListFlexboxLi35Apa.style.listStyleType = 'none';
unorderedListFlexboxLi35Apa.style.width = '180px';
unorderedListFlexboxLi35Apa.style.marginBottom = '6px';
unorderedListFlexboxLi35ApaLink.appendChild(unorderedListFlexboxLi35Apa);

const unorderedListFlexboxLi36IntLink = document.createElement('a');
unorderedListFlexboxLi36IntLink.id = 'unordered-list-flexbox-li36-int-link';
unorderedListFlexboxLi36IntLink.href = `https://corporate.mcdonalds.com/
corpmcd.html`;
unorderedListFlexboxLi36IntLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi36IntLink.style.textDecoration = 'none';
unorderedListFlexboxLi36IntLink.style.listStyleType = 'none';
unorderedListFlexboxLi36IntLink.style.width = '180px';
unorderedListFlexboxLi36IntLink.style.marginBottom = '6px';
unorderedListFlexboxUl3.appendChild(unorderedListFlexboxLi36IntLink);

const unorderedListFlexboxLi36Int = document.createElement('li');
unorderedListFlexboxLi36Int.id = 'unordered-list-flexbox-li36-int';
unorderedListFlexboxLi36Int.textContent = 'American McDonald\’s International';
unorderedListFlexboxLi36Int.style.listStyleType = 'none';
unorderedListFlexboxLi36Int.style.width = '180px';
unorderedListFlexboxLi36Int.style.marginBottom = '6px';
unorderedListFlexboxLi36IntLink.appendChild(unorderedListFlexboxLi36Int);

const unorderedListFlexboxLi37BlackLink = document.createElement('a');
unorderedListFlexboxLi37BlackLink.id = 'unordered-list-flexbox-li37-black-link';
unorderedListFlexboxLi37BlackLink.href = `https://www.mcdonalds.com/us/en-us/
black-and-positively-golden.html`;
unorderedListFlexboxLi37BlackLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi37BlackLink.style.textDecoration = 'none';
unorderedListFlexboxLi37BlackLink.style.listStyleType = 'none';
unorderedListFlexboxLi37BlackLink.style.width = '180px';
unorderedListFlexboxLi37BlackLink.style.marginBottom = '6px';
unorderedListFlexboxUl3.appendChild(unorderedListFlexboxLi37BlackLink);

const unorderedListFlexboxLi37Black = document.createElement('li');
unorderedListFlexboxLi37Black.id = 'unordered-list-flexbox-li37-black';
unorderedListFlexboxLi37Black.textContent = 'Black and Positively Golden';
unorderedListFlexboxLi37Black.style.listStyleType = 'none';
unorderedListFlexboxLi37Black.style.width = '180px';
unorderedListFlexboxLi37Black.style.marginBottom = '6px';
unorderedListFlexboxLi37BlackLink.appendChild(unorderedListFlexboxLi37Black);

const unorderedListFlexboxLi38LgLink = document.createElement('a');
unorderedListFlexboxLi38LgLink.id = 'unordered-list-flexbox-li38-lg-link';
unorderedListFlexboxLi38LgLink.href = `https://www.mcdonalds.com/us/en-us/
community/lgbtq-plus.html`;
unorderedListFlexboxLi38LgLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi38LgLink.style.textDecoration = 'none';
unorderedListFlexboxLi38LgLink.style.listStyleType = 'none';
unorderedListFlexboxLi38LgLink.style.width = '180px';
unorderedListFlexboxLi38LgLink.style.marginBottom = '6px';
unorderedListFlexboxUl3.appendChild(unorderedListFlexboxLi38LgLink);

const unorderedListFlexboxLi38Lg = document.createElement('li');
unorderedListFlexboxLi38Lg.id = 'unordered-list-flexbox-li38-lg';
unorderedListFlexboxLi38Lg.textContent = 'McDonald’s LGBTQ+';
unorderedListFlexboxLi38Lg.style.listStyleType = 'none';
unorderedListFlexboxLi38Lg.style.width = '180px';
unorderedListFlexboxLi38Lg.style.marginBottom = '6px';
unorderedListFlexboxLi38LgLink.appendChild(unorderedListFlexboxLi38Lg);

const unorderedListFlexboxSubDiv4 = document.createElement('div');
unorderedListFlexboxSubDiv4.id = 'unordered-list-flexbox-sub-div4';
unorderedListFlexbox.appendChild(unorderedListFlexboxSubDiv4);

const listHeader4 = document.createElement('div');
listHeader4.id = 'list-header4';
listHeader4.textContent = 'Contact Us';
listHeader4.style.fontWeight = '700';
listHeader4.style.marginBottom = '18px';
unorderedListFlexboxSubDiv4.appendChild(listHeader4);

const unorderedListFlexboxUl4 = document.createElement('ul');
unorderedListFlexboxUl4.id = 'unordered-list-flexbox-ul4';
unorderedListFlexboxUl4.style.padding = '0';
unorderedListFlexboxSubDiv4.appendChild(unorderedListFlexboxUl4);

const unorderedListFlexboxLi41ContactLink = document.createElement('a');
unorderedListFlexboxLi41ContactLink.id = 'unordered-list-flexbox-li41-contact-link';
unorderedListFlexboxLi41ContactLink.href = `https://www.mcdonalds.com/us/
en-us/contact-us.html`;
unorderedListFlexboxLi41ContactLink.style.color = 'rgb(41,41,41)';
unorderedListFlexboxLi41ContactLink.style.textDecoration = 'none';
unorderedListFlexboxLi41ContactLink.style.listStyleType = 'none';
unorderedListFlexboxLi41ContactLink.style.width = '180px';
unorderedListFlexboxLi41ContactLink.style.marginBottom = '6px';
unorderedListFlexboxUl4.appendChild(unorderedListFlexboxLi41ContactLink);

const unorderedListFlexboxLi41Contact = document.createElement('li');
unorderedListFlexboxLi41Contact.id = 'unordered-list-flexbox-li41-contact';
unorderedListFlexboxLi41Contact.textContent = 'Contact Us Overview';
unorderedListFlexboxLi41Contact.style.listStyleType = 'none';
unorderedListFlexboxLi41Contact.style.width = '180px';
unorderedListFlexboxLi41Contact.style.marginBottom = '6px';
unorderedListFlexboxLi41ContactLink.appendChild(unorderedListFlexboxLi41Contact);

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
