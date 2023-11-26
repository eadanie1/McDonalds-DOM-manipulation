
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
headerTopLinksLanguageDownArrow.style.transition = 'transform 0.3s ease';
// headerTopLinksLanguageDownArrow.classList.add('arrow-rotate');
headerTopLinksLanguageDownArrow.addEventListener('click', function() {
    event.preventDefault();
    headerTopLinksLanguageDownArrow.classList.toggle('arrow-rotate');
});
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

// const orderNowButtonActiveOverlay = document.createElement('div');
// orderNowButtonActiveOverlay.id = 'order-now-button-active-overlay';
// orderNowButtonActiveOverlay.style.backgroundColor = 'rgba(0,0,0,0.4)';
// orderNowButtonActiveOverlay.style.zIndex = '50';

// const orderNowButtonActiveModal = document.createElement('div');
// orderNowButtonActiveModal.id = 'order-now-button-active-modal';
// orderNowButtonActiveModal.style.opacity = '1';
// orderNowButtonActiveModal.style.zIndex = '50';

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
orderNowButton.appendChild(overlay);

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
overlay.appendChild(modal);

const modalTitle = document.createElement('div');
modalTitle.id = 'modal-title';
modalTitle.textContent = 'Earn points on delivery or pickup via the app';
modalTitle.style.fontSize = '24px';
modalTitle.style.fontWeight = '700';
modalTitle.style.margin = '48px 0 40px 0';
modal.appendChild(modalTitle);

const modalSubTitle = document.createElement('div');
modalSubTitle.id = 'modal-sub-title';
modalSubTitle.textContent = 'Or, please select your McDelivery option';
modalSubTitle.style.fontSize = '24px';
modalSubTitle.style.fontWeight = '700';
modalSubTitle.style.margin = '48px 0 40px 0';
modal.appendChild(modalSubTitle);

const modalRadioGrid = document.createElement('div');
modalRadioGrid.id = 'modal-radio-grid';
modalRadioGrid.style.display = 'flex';
modalRadioGrid.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
modalRadioGrid.style.columnGap = '50px';
modalRadioGrid.style.alignItems = 'center';
modal.appendChild(modalRadioGrid);

const modalIcons1 = document.createElement('div');
modalIcons1.id = 'modal-icons1';
modalIcons1.style.width = '120px';
modalIcons1.style.margin = '66px 0 36px 0';
modal.appendChild(modalIcons1);

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

// FUNCTION TO DUPLICATE LIST ITEMS/ANCHOR ELEMENTS

function createLinkListItem(id, href, textContent, parent) {
    const listItem = document.createElement('li');
    listItem.id = id;
    listItem.style.display = 'inline';
    listItem.style.margin = '0 25px 0 0';

    const link = document.createElement('a');
    link.id = `${id}-link`;
    link.href = href;
    link.textContent = textContent;
    link.style.listStyleType = 'none';
    link.style.color = 'rgb(41,41,41)';
    link.style.textDecoration = 'none';

    listItem.appendChild(link);
    parent.appendChild(listItem);
}

createLinkListItem('bottom-header-links-container-li-app', `https://www.mcdonalds.com/us/
// en-us/download-app.html`, 'Download App', bottomHeaderLinksContainerUl);

createLinkListItem('bottom-header-links-container-li-rew', `https://www.mcdonalds.com/us/
// en-us/mymcdonalds.html`, 'MyMcDonald\'s rewards', bottomHeaderLinksContainerUl);

createLinkListItem('bottom-header-links-container-li-deal', `https://www.mcdonalds.com/us/
en-us/deals.html`, 'Excusive Deals', bottomHeaderLinksContainerUl);

createLinkListItem('bottom-header-links-container-li-food', `https://www.mcdonalds.com/us/
en-us/about-our-food.html`, 'About Our Food', bottomHeaderLinksContainerUl);

createLinkListItem('bottom-header-links-container-li-locate', `https://www.mcdonalds.com/us/
en-us/restaurant-locator.html`, 'Locate', bottomHeaderLinksContainerUl);

createLinkListItem('bottom-header-links-container-li-gift', `https://www.mcdonalds.com/us/
en-us/arch-card.html`, 'Gift Cards', bottomHeaderLinksContainerUl);

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
h1.style.marginTop = '44px';
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

// FUNCTION TO PRODUCE ANCHOR/NESTED LIST ISTEM ELEMENTS

function createListItemLink(id, href, textContent, parent) {
    const link = document.createElement('a');

    link.id = `${id}`-link;
    link.href = href;
    link.style.color = 'rgb(41,41,41)';
    link.style.textDecoration = 'none';
    link.style.listStyleType = 'none';
    link.style.width = '180px';
    link.style.marginBottom = '6px';

    const listItem = document.createElement('li');

    listItem.id = id;
    listItem.textContent = textContent;
    listItem.style.listStyleType = 'none';
    listItem.style.width = '180px';
    listItem.style.marginBottom = '6px';

    link.appendChild(listItem);
    parent.appendChild(link);
}

// UNORDERED LIST NO 1: ABOUT US

createListItemLink('unordered-list-flexbox-li11-about', `https://www.mcdonalds.com/us/
en-us/about-us.html`, 'About Us Overview', unorderedListFlexboxUl1);

createListItemLink('unordered-list-flexbox-li12-team', `https://www.mcdonalds.com/us/
en-us/about-us/leadership-team.html`, 'Leadership Team', unorderedListFlexboxUl1);

createListItemLink('unordered-list-flexbox-li13-values', `https://www.mcdonalds.com/us/
en-us/about-us/values-in-action.html`, 'Values In Action', unorderedListFlexboxUl1);

createListItemLink('unordered-list-flexbox-li14-franchise', `https://www.mcdonalds.com/us/
en-us/us-franchising.html`, 'Franchise Info', unorderedListFlexboxUl1);

createListItemLink('unordered-list-flexbox-li15-recalls', `https://www.mcdonalds.com/us/
en-us/about-us/recalls.html`, 'Recalls & Alerts', unorderedListFlexboxUl1);

createListItemLink('unordered-list-flexbox-li16-real', `https://www.mcdonalds.com/us/
en-us/about-us/franchising/real-estate.html`, 'Real Estate', unorderedListFlexboxUl1);

createListItemLink('unordered-list-flexbox-li17-access', `https://www.mcdonalds.com/us/
en-us/accessibility.html`, 'Accessibility', unorderedListFlexboxUl1);

createListItemLink('unordered-list-flexbox-li18-invest', `https://corporate.mcdonalds.com/
corpmcd/investors.html`, 'Investor Relations', unorderedListFlexboxUl1);

createListItemLink('unordered-list-flexbox-li19-news', `https://corporate.mcdonalds.com/
corpmcd/our-stories.html`, 'News & Notifications', unorderedListFlexboxUl1);

// UNORDERED LIST NO 2: SERVICES

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

createListItemLink('unordered-list-flexbox-li21-services', `https://www.mcdonalds.com/us/
en-us/services.html`, 'Services Overview', unorderedListFlexboxUl2);

createListItemLink('unordered-list-flexbox-li22-wifi', `https://www.mcdonalds.com/us/
en-us/services/free-wi-fi.html`, 'Wi-Fi', unorderedListFlexboxUl2);

createListItemLink('unordered-list-flexbox-li23-play', `https://www.mcdonalds.com/us/
en-us/services/playplaces-and-parties.html`, 'PlayPlaces & Parties', unorderedListFlexboxUl2);

createListItemLink('unordered-list-flexbox-li24-delivery', `https://www.mcdonalds.com/us/
en-us/mcdelivery.html`, 'McDelivery®', unorderedListFlexboxUl2);

createListItemLink('unordered-list-flexbox-li25-mobile', `https://www.mcdonalds.com/us/
en-us/mobile-order-and-pay.html`, 'Mobile Order & Pay', unorderedListFlexboxUl2);

createListItemLink('unordered-list-flexbox-li26-trend', `https://www.mcdonalds.com/us/
en-us/whats-hot.html`, 'Trending Now', unorderedListFlexboxUl2);

createListItemLink('unordered-list-flexbox-li27-merch', `https://goldenarchesunlimited.com/`, 'McDonald\'s Merchandise', unorderedListFlexboxUl2);

createListItemLink('unordered-list-flexbox-li28-fun', `https://www.mcdonalds.com/us/
en-us/family-fun-hub.html`, 'Family Fun Hub', unorderedListFlexboxUl2);

createListItemLink('unordered-list-flexbox-li29-rew', `https://www.mcdonalds.com/us/
en-us/mymcdonalds.html`, 'McDonald\'s Rewards', unorderedListFlexboxUl2);

createListItemLink('unordered-list-flexbox-li210-cafe', `https://www.mcdonalds.com/us/
en-us/mccafe.html`, 'McCafé®', unorderedListFlexboxUl2);

// UNORDERED LIST NO 3: COMMUNITY

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

createListItemLink('unordered-list-flexbox-li31-com', `https://www.mcdonalds.com/us/
en-us/community.html`, 'Community Overview', unorderedListFlexboxUl3);

createListItemLink('unordered-list-flexbox-li32-serv', `https://www.mcdonalds.com/us/
en-us/community.html`, 'Now Serving', unorderedListFlexboxUl3);

createListItemLink('unordered-list-flexbox-li33-hacer', `https://www.mcdonalds.com/us/
en-us/community/hacer.html`, 'HACER® Scholarships for Hispanic Students', unorderedListFlexboxUl3);

createListItemLink('unordered-list-flexbox-li34-char', `https://www.mcdonalds.com/us/
en-us/community/giving-back-with-ronald-mcdonald-house.html`, 'Ronald McDonald House Charities', 
unorderedListFlexboxUl3);

createListItemLink('unordered-list-flexbox-li35-apa', `https://www.mcdonalds.com/us/
en-us/asian-pacific-americans.html`, 'McDonald’s Asian Pacific American', 
unorderedListFlexboxUl3);

createListItemLink('unordered-list-flexbox-li36-int', `https://corporate.mcdonalds.com/
corpmcd.html`, 'McDonald\’s International', 
unorderedListFlexboxUl3);

createListItemLink('unordered-list-flexbox-li37-black', `https://www.mcdonalds.com/us/
en-us/black-and-positively-golden.html`, 'Black and Positively Golden', 
unorderedListFlexboxUl3);

createListItemLink('unordered-list-flexbox-li38-lg', `https://www.mcdonalds.com/us/
en-us/community/lgbtq-plus.html`, 'McDonald’s LGBTQ+', 
unorderedListFlexboxUl3);

// UNORDERED LIST NO 4: CONTACT US

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

createListItemLink('unordered-list-flexbox-li41-contact', `https://www.mcdonalds.com/us/
en-us/contact-us.html`, 'Contact Us Overview', 
unorderedListFlexboxUl4);

createListItemLink('unordered-list-flexbox-li42-gift', `https://www.mcdonalds.com/us/
en-us/faq/arch-card.html`, 'Gift Card FAQs', 
unorderedListFlexboxUl4);

createListItemLink('unordered-list-flexbox-li43-donations', `https://www.mcdonalds.com/us/
en-us/faq/business.html#donation`, 'Donations', 
unorderedListFlexboxUl4);

createListItemLink('unordered-list-flexbox-li44-employ', `https://www.mcdonalds.com/us/en-us/
faq/employment.html`, 'Employment', 
unorderedListFlexboxUl4);

createListItemLink('unordered-list-flexbox-li45-feedback', `https://www.mcdonalds.com/us/
en-us/feedback.html`, 'Customer Feedback', 
unorderedListFlexboxUl4);

createListItemLink('unordered-list-flexbox-li46-faq', `https://www.mcdonalds.com/us/
en-us/faq.html`, 'Frequently Asked Questions', 
unorderedListFlexboxUl4);

// SOCIAL MEDIA ICONS AND APP ICONS

const iconsFlexbox = document.createElement('section');
iconsFlexbox.id = 'icons-flexbox';
iconsFlexbox.style.display = 'flex';
iconsFlexbox.style.justifyContent = 'space-between';
iconsFlexbox.style.margin = '32px 0 42px 0';
iconsFlexbox.style.padding = '0 20px';
mainContentContainer.appendChild(iconsFlexbox);

const iconsFlexboxSubDiv1 = document.createElement('div');
iconsFlexboxSubDiv1.id = 'icons-flexbox-sub-div1';
iconsFlexbox.appendChild(iconsFlexboxSubDiv1);

const socialMediaIcons1Link = document.createElement('a');
socialMediaIcons1Link.id = 'social-media-icons1-link';
socialMediaIcons1Link.href = 'https://www.facebook.com/McDonalds/';
socialMediaIcons1Link.style.marginRight = '17px';
iconsFlexboxSubDiv1.appendChild(socialMediaIcons1Link);

const socialMediaIcons1 = document.createElement('img');
socialMediaIcons1.id = 'social-media-icons1';
socialMediaIcons1.src = 'icons/facebook.png';
socialMediaIcons1.style.marginRight = '17px';
socialMediaIcons1Link.appendChild(socialMediaIcons1);

const socialMediaIcons2Link = document.createElement('a');
socialMediaIcons2Link.id = 'social-media-icons2-link';
socialMediaIcons2Link.href = 'https://www.x.com/McDonalds';
socialMediaIcons2Link.style.marginRight = '17px';
iconsFlexboxSubDiv1.appendChild(socialMediaIcons2Link);

const socialMediaIcons2 = document.createElement('img');
socialMediaIcons2.id = 'social-media-icons2';
socialMediaIcons2.src = 'icons/x.png';
socialMediaIcons2.style.marginRight = '17px';
socialMediaIcons2.style.marginLeft = '-17px';
socialMediaIcons2Link.appendChild(socialMediaIcons2);

const socialMediaIcons3Link = document.createElement('a');
socialMediaIcons3Link.id = 'social-media-icons3-link';
socialMediaIcons3Link.href = `https://www.youtube.com/channel/
UCRI5ZedBs0_BYY4PlxD6m7w`;
socialMediaIcons3Link.style.marginRight = '17px';
iconsFlexboxSubDiv1.appendChild(socialMediaIcons3Link);

const socialMediaIcons3 = document.createElement('img');
socialMediaIcons3.id = 'social-media-icons3';
socialMediaIcons3.src = 'icons/youtube.png';
socialMediaIcons3.style.marginRight = '17px';
socialMediaIcons3.style.marginLeft = '-17px';
socialMediaIcons3Link.appendChild(socialMediaIcons3);

const socialMediaIcons4Link = document.createElement('a');
socialMediaIcons4Link.id = 'social-media-icons4-link';
socialMediaIcons4Link.href = `https://www.instagram.com/mcdonalds/`;
socialMediaIcons4Link.style.marginRight = '17px';
iconsFlexboxSubDiv1.appendChild(socialMediaIcons4Link);

const socialMediaIcons4 = document.createElement('img');
socialMediaIcons4.id = 'social-media-icons4';
socialMediaIcons4.src = 'icons/instagram.png';
socialMediaIcons4.style.marginRight = '17px';
socialMediaIcons4.style.marginLeft = '-17px';
socialMediaIcons4Link.appendChild(socialMediaIcons4);

const socialMediaIcons5Link = document.createElement('a');
socialMediaIcons5Link.id = 'social-media-icons5-link';
socialMediaIcons5Link.href = `https://mcdonalds.tumblr.com/`;
socialMediaIcons5Link.style.marginRight = '17px';
iconsFlexboxSubDiv1.appendChild(socialMediaIcons5Link);

const socialMediaIcons5 = document.createElement('img');
socialMediaIcons5.id = 'social-media-icons5';
socialMediaIcons5.src = 'icons/tumblr.png';
socialMediaIcons5.style.marginRight = '17px';
socialMediaIcons5.style.marginLeft = '-17px';
socialMediaIcons5Link.appendChild(socialMediaIcons5);

const socialMediaIcons6Link = document.createElement('a');
socialMediaIcons6Link.id = 'social-media-icons6-link';
socialMediaIcons6Link.href = `https://open.spotify.com/user/mcdonalds`;
socialMediaIcons6Link.style.marginLeft = '-17px';
iconsFlexboxSubDiv1.appendChild(socialMediaIcons6Link);

const socialMediaIcons6 = document.createElement('img');
socialMediaIcons6.id = 'social-media-icons6';
socialMediaIcons6.src = 'icons/spotify.png';
socialMediaIcons6Link.appendChild(socialMediaIcons6);

const iconsFlexboxSubDiv2 = document.createElement('div');
iconsFlexboxSubDiv2.id = 'icons-flexbox-sub-div2';
iconsFlexbox.appendChild(iconsFlexboxSubDiv2);

const socialMediaIcons21Link = document.createElement('a');
socialMediaIcons21Link.id = 'social-media-icons21-link';
socialMediaIcons21Link.href = `https://itunes.apple.com/us/
app/mcdonalds-mobile/id922103212?mt=8`;
socialMediaIcons21Link.style.marginRight = '13px';
iconsFlexboxSubDiv2.appendChild(socialMediaIcons21Link);

const socialMediaIcons21 = document.createElement('img');
socialMediaIcons21.id = 'social-media-icons21';
socialMediaIcons21.src = 'icons/app_store_badge (1).png';
socialMediaIcons21Link.appendChild(socialMediaIcons21);

const socialMediaIcons22Link = document.createElement('a');
socialMediaIcons22Link.id = 'social-media-icons22-link';
socialMediaIcons22Link.href = `https://play.google.com/store/
apps/details?id=com.mcdonalds.app&hl=en`;
socialMediaIcons22Link.style.marginRight = '17px';
iconsFlexboxSubDiv2.appendChild(socialMediaIcons22Link);

const socialMediaIcons22 = document.createElement('img');
socialMediaIcons22.id = 'social-media-icons22';
socialMediaIcons22.src = 'icons/google_play_badge.png';
socialMediaIcons22Link.appendChild(socialMediaIcons22);

const footer = document.createElement('footer');
footer.id = 'footer';
footer.style.borderTop = '1px solid rgb(206,206,206)';
footer.style.display = 'flex';
footer.style.justifyContent = 'space-between';
footer.style.alignItems = 'start';
footer.style.padding = '48px 20px 104px 20px';
mainContentContainer.appendChild(footer);

const footerSubDiv = document.createElement('div');
footer.id = 'footer-sub-div';
footer.appendChild(footerSubDiv);

const footerUl = document.createElement('ul');
footerUl.id = 'footer-ul';
footerUl.style.padding = '0';
footerUl.style.display = 'inline';
footerSubDiv.appendChild(footerUl);

// FUNCTION FOR LIST ITEM/ANCHORS IN FOOTER

// function createListItemLink2() {

// }

const footerLi1Link = document.createElement('a');
footerLi1Link.id = 'footer-li1-link';
footerLi1Link.href = `https://www.mcdonalds.com/us/
en-us/privacy-overview.html`;
footerUl.appendChild(footerLi1Link);

const footerLi1 = document.createElement('li');
footerLi1.id = 'footer-li1';
footerLi1.textContent = 'Privacy (Updated)';
footerLi1.style.color = 'rgb(41,41,41)';
footerLi1.style.display = 'inline-block';
footerLi1.style.listStyleType = 'none';
footerLi1.style.padding = '0 40px 0 0';
footerLi1.style.height = '44px';
footerLi1Link.appendChild(footerLi1);

const footerLi2Link = document.createElement('a');
footerLi2Link.id = 'footer-li2-link';
footerLi2Link.href = `https://www.mcdonalds.com/
us/en-us/california-privacy-notice.html`;
footerUl.appendChild(footerLi2Link);

const footerLi2 = document.createElement('li');
footerLi2.id = 'footer-li2';
footerLi2.textContent = 'California Privacy Notice';
footerLi2.style.color = 'rgb(41,41,41)';
footerLi2.style.display = 'inline-block';
footerLi2.style.listStyleType = 'none';
footerLi2.style.padding = '0 40px 0 0';
footerLi2.style.height = '44px';
footerLi2Link.appendChild(footerLi2);

const footerLi3Link = document.createElement('a');
footerLi3Link.id = 'footer-li3-link';
footerLi3Link.href = `https://www.mcdonalds.com/
us/en-us/terms-and-conditions.html`;
footerUl.appendChild(footerLi3Link);

const footerLi3 = document.createElement('li');
footerLi3.id = 'footer-li3';
footerLi3.textContent = 'Terms & Conditions';
footerLi3.style.color = 'rgb(41,41,41)';
footerLi3.style.display = 'inline-block';
footerLi3.style.listStyleType = 'none';
footerLi3.style.padding = '0 40px 0 0';
footerLi3.style.height = '44px';
footerLi3Link.appendChild(footerLi3);

const footerLi4Link = document.createElement('a');
footerLi4Link.id = 'footer-li4-link';
footerLi4Link.href = `https://www.mcdonalds.com/
us/en-us/accessibility.html`;
footerUl.appendChild(footerLi4Link);

const footerLi4 = document.createElement('li');
footerLi4.id = 'footer-li4';
footerLi4.textContent = 'Accessibility';
footerLi4.style.color = 'rgb(41,41,41)';
footerLi4.style.display = 'inline-block';
footerLi4.style.listStyleType = 'none';
footerLi4.style.padding = '0 40px 0 0';
footerLi4.style.height = '44px';
footerLi4Link.appendChild(footerLi4);

const footerLi5Link = document.createElement('a');
footerLi5Link.id = 'footer-li5-link';
footerLi5Link.href = `https://www.mcdonalds.com/us/
en-us/privacy/do-not-sell-my-personal-information.html`;
footerUl.appendChild(footerLi5Link);

const footerLi5 = document.createElement('li');
footerLi5.id = 'footer-li5';
footerLi5.textContent = `Do Not Sell or Share My 
Personal Information`;
footerLi5.style.color = 'rgb(41,41,41)';
footerLi5.style.display = 'inline-block';
footerLi5.style.listStyleType = 'none';
footerLi5.style.padding = '0 40px 0 0';
footerLi5.style.height = '44px';
footerLi5Link.appendChild(footerLi5);

const footerLi6Link = document.createElement('a');
footerLi6Link.id = 'footer-li6-link';
footerLi6Link.href = `https://www.mcdonalds.com/us/
en-us/about-our-food/meet-our-food-experts.html#`;
footerUl.appendChild(footerLi6Link);

const footerLi6 = document.createElement('li');
footerLi6.id = 'footer-li6';
footerLi6.textContent = `Cookies Settings`;
footerLi6.style.color = 'rgb(41,41,41)';
footerLi6.style.display = 'inline-block';
footerLi6.style.listStyleType = 'none';
footerLi6.style.padding = '0 40px 0 0';
footerLi6.style.height = '44px';
footerLi6Link.appendChild(footerLi6);

const nestedFlexbox = document.createElement('div');
nestedFlexbox.id = 'nested-flexbox';
nestedFlexbox.style.display = 'flex';
nestedFlexbox.style.justifyContent = 'space-between';
nestedFlexbox.style.alignItems = 'center';
footer.appendChild(nestedFlexbox);

const nestedFlexboxSubDiv1 = document.createElement('div');
nestedFlexboxSubDiv1.id = 'nested-flexbox-sub-div';
nestedFlexbox.appendChild(nestedFlexboxSubDiv1);

const archesLogo = document.createElement('img');
archesLogo.id = 'arches-logo';
archesLogo.src = 'icons/arches-logo_108x108.jpg';
archesLogo.style.width = '28px';
archesLogo.style.verticalAlign = 'bottom';
nestedFlexboxSubDiv1.appendChild(archesLogo);

const nestedFlexboxSubDiv2 = document.createElement('div');
nestedFlexboxSubDiv2.id = 'nested-flexbox-sub-div';
nestedFlexbox.appendChild(nestedFlexboxSubDiv2);

const copyrightText = document.createElement('div');
copyrightText.id = 'copyright-text';
copyrightText.textContent = '© 2017 - 2023 McDonald\'s. All Rights Reserved';
copyrightText.style.lineHeight = '16px';
copyrightText.style.textAlign = 'right';
copyrightText.style.padding = '12px 0 0 44px';
copyrightText.style.width = '280px';
nestedFlexboxSubDiv2.appendChild(copyrightText);

// NO MEDIA QUERIES DONE AS THESE ARE DONE ENTIRELY IN
// CSS AS PER CHAT GPT