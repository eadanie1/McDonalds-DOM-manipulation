
// GENERAL: BODY
const primaryFontProperties = `16px/22px system-ui, -apple-system, 
BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, 
Open Sans, Helvetica Neue, sans-serif`;
const primaryColor = 'rgb(41,41,41)';
const customLinkColor = 'rgb(0,107,174)';
const customBorderColor = 'rgb(206,206,206)';

document.body.style.margin = '0';
document.body.style.font = primaryFontProperties;
document.body.style.color = primaryColor;

// GENERAL: BUTTONS
const primaryButtonColor = 'rgb(255, 188, 13)';

const allButtons = document.querySelectorAll('button');
allButtons.forEach(button => {
    button.style.cursor = 'pointer';
});

// HEADER CONTAINER AND HEADER
const shadowBaseProperties = '0,0,0';

const header = document.createElement('header');
header.id = 'header';
header.style.height = '118px';
header.style.boxShadow = `0 2px 5px rgba(${shadowBaseProperties},0.06)`;
header.style.display = 'flex';
header.style.justifyContent = 'center';
header.style.padding = '15px 0 0 0';
document.body.appendChild(header);

const headerContainer = document.createElement('div');
headerContainer.id = 'header__container';
headerContainer.style.width = '1170px';
headerContainer.style.display = 'grid';
headerContainer.style.gridTemplateColumns = '108px 1fr';
headerContainer.style.columnGap = '62px';
headerContainer.style.justifyContent = 'space-between';
headerContainer.style.padding = '0 0 0 0';
header.appendChild(headerContainer);

const headerLogoContainer = document.createElement('div');
headerLogoContainer.id = 'header__logo-container';
headerLogoContainer.style.display = 'flex';
headerLogoContainer.style.alignItems = 'center';
headerContainer.appendChild(headerLogoContainer);

const archesLogoLink = document.createElement('a');
archesLogoLink.id = 'header__arches-logo-link';
archesLogoLink.href = `https://www.mcdonalds.com/us/en-us.html`;
headerLogoContainer.appendChild(archesLogoLink);

const archesHeaderLogo = document.createElement('img');
archesHeaderLogo.id = 'header__arches-header-logo';
archesHeaderLogo.src = 'icons/arches-logo_108x108.jpg';
archesLogoLink.appendChild(archesHeaderLogo);

const headerMainLinksContainer = document.createElement('div');
headerMainLinksContainer.id = 'header__main-links-container';
headerMainLinksContainer.style.display = 'flex';
headerMainLinksContainer.style.flexDirection = 'column';
headerMainLinksContainer.style.justifyContent = 'space-between';
headerContainer.appendChild(headerMainLinksContainer);

// HEADER TOP LINKS CONTAINER
const topHeaderLinksContainer = document.createElement('div');
topHeaderLinksContainer.id = 'header__top-links-container';
topHeaderLinksContainer.style.display = 'flex';
topHeaderLinksContainer.style.justifyContent = 'space-between';
topHeaderLinksContainer.style.fontSize = '14px';
topHeaderLinksContainer.style.padding = '0 40px 0 0';
headerMainLinksContainer.appendChild(topHeaderLinksContainer);

const topLeftHeaderLinksContainer = document.createElement('div');
topLeftHeaderLinksContainer.id = 'header__top-left-links-container';
topLeftHeaderLinksContainer.style.display = 'flex';
topLeftHeaderLinksContainer.style.alignItems = 'center';
topHeaderLinksContainer.appendChild(topLeftHeaderLinksContainer);

const headerTopLinksLanguage = document.createElement('a');
headerTopLinksLanguage.id = 'header__top-links-language';
headerTopLinksLanguage.href = '';
headerTopLinksLanguage.textContent = 'Language';
headerTopLinksLanguage.style.color = primaryColor;
headerTopLinksLanguage.style.textDecoration = 'none';
headerTopLinksLanguage.style.margin = '0 30px 0 0';
topLeftHeaderLinksContainer.appendChild(headerTopLinksLanguage);

const headerTopLinksLanguageDownArrow = document.createElement('img');
headerTopLinksLanguageDownArrow.id = 'header__top-links-language-down-arrow';
headerTopLinksLanguageDownArrow.src = 'icons/downarrow.png';
headerTopLinksLanguageDownArrow.style.marginLeft = '5px';
headerTopLinksLanguageDownArrow.style.width = '9px';
headerTopLinksLanguageDownArrow.style.transition = 'transform 0.3s ease';
headerTopLinksLanguageDownArrow.addEventListener('click', function() {
    event.preventDefault();
    headerTopLinksLanguageDownArrow.classList.toggle('arrow-rotate');
});
headerTopLinksLanguage.appendChild(headerTopLinksLanguageDownArrow);

function createTopLeftHeaderLinkElement(id, href, textContent, parent) {
    const linkElement = document.createElement('a');

    linkElement.id = id;
    linkElement.href = href;
    linkElement.textContent = textContent;
    linkElement.style.color = primaryColor;
    linkElement.style.textDecoration = 'none';
    linkElement.style.margin = '0 30px 0 0';
    parent.appendChild(linkElement);
}

createTopLeftHeaderLinkElement('header__top-links-email', `https://www.mcdonalds.com/us/en-us/mcdonalds-
email-signup.html`, 'Sign Up for Email', topLeftHeaderLinksContainer);

createTopLeftHeaderLinkElement('header__top-links-careers', `https://www.mcdonalds.com/us/en-us/
mcdonalds-careers.html`, 'Careers', topLeftHeaderLinksContainer);

const topRightHeaderLinksContainer = document.createElement('div');
topRightHeaderLinksContainer.id = 'header__top-right-links-container';
topRightHeaderLinksContainer.style.display = 'flex';
topRightHeaderLinksContainer.style.alignItems = 'center';
topHeaderLinksContainer.appendChild(topRightHeaderLinksContainer);

function createTopRightHeaderLinkElement(options) {
    const {id, href, parent, id2, id2Src, id3, id3TextContent} = options;
    
    const linkElement = document.createElement('a');
    linkElement.id = id;
    linkElement.href = href;
    linkElement.style.display = 'flex';
    linkElement.style.justifyContent = 'center';
    linkElement.style.alignItems = 'center';
    linkElement.style.textDecoration = 'none';
    linkElement.style.color = primaryColor;
    linkElement.style.textDecoration = 'none';
    linkElement.style.margin = '0 30px 0 0';

    const icon = document.createElement('img');
    icon.id = id2;
    icon.src = id2Src;
    icon.style.width = '16px';
    icon.style.height = '15px';
    icon.style.marginRight = '5px';
    
    const linkText = document.createElement('div');
    linkText.id = id3;
    linkText.textContent = id3TextContent;
    linkText.style.lineHeight = '0px';

    linkElement.appendChild(icon);
    linkElement.appendChild(linkText);
    parent.appendChild(linkElement);
}

createTopRightHeaderLinkElement({
    id: 'header__top-links-search', 
    href: `https://www.mcdonalds.com/us/en-us/search-results.html`, 
    parent: topRightHeaderLinksContainer, 
    id2: 'header__search-icon', 
    id2Src: 'icons/search-icon.png', 
    id3: 'header__link-text', 
    id3TextContent: 'Search'
});

createTopRightHeaderLinkElement({
    id: 'header__top-links-location', 
    href: `https://www.mcdonalds.com/us/en-us/restaurant-locator.html`, 
    parent: topRightHeaderLinksContainer, 
    id2: 'header__location-pin-icon', 
    id2Src: 'icons/location-pin.png', 
    id3: 'header__link-text-location', 
    id3TextContent: 'Change your Location'
});

const orderNowButton = document.createElement('button');
orderNowButton.id = 'header__order-now-button';
orderNowButton.textContent = 'Order Now';
orderNowButton.style.backgroundColor = primaryButtonColor;
orderNowButton.style.border = 'none';
orderNowButton.style.borderRadius = '4px';
orderNowButton.style.padding = '8px 25px';
orderNowButton.style.fontSize = '16px';
orderNowButton.style.lineHeight = '24px';
orderNowButton.style.cursor = 'pointer';
topRightHeaderLinksContainer.appendChild(orderNowButton);

// HEADER BOTTOM LINKS CONTAINER
const bottomHeaderLinksContainer = document.createElement('div');
bottomHeaderLinksContainer.id = 'header__bottom-links-container';
bottomHeaderLinksContainer.style.display = 'flex';
bottomHeaderLinksContainer.style.paddingBottom = '15px';
headerMainLinksContainer.appendChild(bottomHeaderLinksContainer);

const bottomHeaderLinksContainerUl = document.createElement('ul');
bottomHeaderLinksContainerUl.id = 'header__bottom-links-container-ul';
bottomHeaderLinksContainerUl.style.display = 'inline';
bottomHeaderLinksContainerUl.style.padding = '0';
bottomHeaderLinksContainer.appendChild(bottomHeaderLinksContainerUl);

const bottomHeaderLinksContainerLiMenu = document.createElement('li');
bottomHeaderLinksContainerLiMenu.id = 'header__bottom-links-container-li-menu';
bottomHeaderLinksContainerLiMenu.textContent = 'Our Menu';
bottomHeaderLinksContainerLiMenu.style.listStyleType = 'none';
bottomHeaderLinksContainerLiMenu.style.display = 'inline';
bottomHeaderLinksContainerLiMenu.style.margin = '0 25px 0 0';
bottomHeaderLinksContainerUl.appendChild(bottomHeaderLinksContainerLiMenu);

const downArrowLargeIcon = document.createElement('img');
downArrowLargeIcon.id = 'header__down-arrow-large-icon';
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
    link.style.color = primaryColor;
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
h1.id = 'main-content-container__h1';
h1.style.fontSize = '54px';
h1.textContent = 'Meet Our Food Experts';
h1.style.fontWeight = '700';
h1.style.marginTop = '44px';
h1.style.marginBottom = '44px';
h1.textAlign = 'center';
mainContentContainer.appendChild(h1);

const mainPhoto = document.createElement('div');
h1.id = 'main-content-container__main-photo';
h1.style.display = 'flex';
h1.style.alignItems = 'center';
h1.style.justifyContent = 'center';
mainContentContainer.appendChild(mainPhoto);

const foodExpertsMainImage = document.createElement('img');
foodExpertsMainImage.id = 'main-content-container__food-experts-main-image';
foodExpertsMainImage.src = 'images/FoodExperts_Hero_1260x560_Desktop_hero-desktop.jpeg';
foodExpertsMainImage.alt = 'food-experts-main-image';
foodExpertsMainImage.style.width = '100%';
mainPhoto.appendChild(foodExpertsMainImage);

const expertsInfoText = document.createElement('div');
expertsInfoText.id = 'main-content-container__experts-info-text';
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
tripleGridContainer.id = 'main-content-container__triple-grid-container';
tripleGridContainer.style.display = 'grid';
tripleGridContainer.style.gridTemplateColumns = '1fr 1fr 1fr';
tripleGridContainer.style.columnGap = '23px';
mainContentContainer.appendChild(tripleGridContainer);

const buttonsTripleGrid = document.createElement('div');
buttonsTripleGrid.id = 'main-content-container__buttons-triple-grid';
buttonsTripleGrid.style.display = 'grid';
buttonsTripleGrid.style.gridTemplateColumns = '1fr 1fr 1fr';
buttonsTripleGrid.style.columnGap = '23px';
buttonsTripleGrid.style.marginBottom = '158px';
mainContentContainer.appendChild(buttonsTripleGrid);

function createTripleGridElement(options) {
    const {subId, imgId, imgSrc, imgAlt, titleId, title,
        descriptionId, descriptionText,
        buttonsDivId, buttonsLinkId, buttonsHref,
        buttonsId, buttonsText} = options;
        
    const tripleGridSubDiv = document.createElement('div');
    tripleGridSubDiv.id = subId;
    tripleGridContainer.appendChild(tripleGridSubDiv);
    
    const gridImage = document.createElement('img');
    gridImage.id = imgId;
    gridImage.src = imgSrc;
    gridImage.alt = imgAlt;
    gridImage.style.width = '100%';
    tripleGridSubDiv.appendChild(gridImage);
    
    const gridTitle = document.createElement('div');
    gridTitle.id = titleId;
    gridTitle.textContent = title;
    gridTitle.style.fontSize = '36px';
    gridTitle.style.fontWeight = '700';
    gridTitle.style.padding = '45px 0 18px 0';
    tripleGridSubDiv.appendChild(gridTitle);

    const gridDescription = document.createElement('div');
    gridDescription.id = descriptionId;
    gridDescription.textContent = descriptionText;
    gridDescription.style.padding = '18px 0 0 0';
    gridDescription.style.lineHeight = '24px';
    tripleGridSubDiv.appendChild(gridDescription);
    
    const buttonsTripleGridSubDiv = document.createElement('div');
    buttonsTripleGridSubDiv.id = buttonsDivId;
    buttonsTripleGrid.appendChild(buttonsTripleGridSubDiv);
    
    const gridButtonsLink = document.createElement('a');
    gridButtonsLink.id = buttonsLinkId;
    gridButtonsLink.href = buttonsHref;
    buttonsTripleGridSubDiv.appendChild(gridButtonsLink);
    
    const gridButtons = document.createElement('button');
    gridButtons.id = buttonsId;
    gridButtons.textContent = buttonsText;
    gridButtons.style.backgroundColor = primaryButtonColor;
    gridButtons.style.border = 'none';
    gridButtons.style.borderRadius = '4px';
    gridButtons.style.marginTop = '35px';
    gridButtons.style.padding = '13px 25px';
    gridButtons.style.fontSize = '16px';
    gridButtons.style.lineHeight = '24px';
    gridButtons.style.cursor = 'pointer';
    gridButtonsLink.appendChild(gridButtons);
}

createTripleGridElement({
    subId: 'main-content-container__triple-grid-sub-div1',
    imgId: 'main-content-container__grid-image1',
    imgSrc: 'images/Our_Chefs_3col_760x508_3-column-desktop.jpeg',
    imgAlt: 'food-experts-main-image',
    titleId: 'main-content-container__grid-title1',
    title: 'Our Chefs',
    descriptionId: 'main-content-container__grid-description1',
    descriptionText: `Everyday, culinary masters are cooking up new tastes in our kitchens.`,
    buttonsDivId: 'main-content-container__buttons-triple-grid-sub-div1',
    buttonsLinkId: 'main-content-container__grid-buttons1-link',
    buttonsHref: `https://www.mcdonalds.com/us/en-us/about-our-food/meet-our-food-experts/our-chefs.html`,
    buttonsId: 'main-content-container__grid-buttons1',
    buttonsText: 'Meet Our Chefs'
});

createTripleGridElement({
    subId: 'main-content-container__triple-grid-sub-div2',
    imgId: 'main-content-container__grid-image2',
    imgSrc: 'images/Cynthia_G_3Col_376x252_Desktop_3-column-desktop.jpeg',
    imgAlt: 'dieticians-main-image',
    titleId: 'main-content-container__grid-title2',
    title: 'Our Dietitians',
    descriptionId: 'main-content-container__grid-description2',
    descriptionText: `Get to know our Registered Dietitian Nutritionists who add a different type of value to your meal.`,
    buttonsDivId: 'main-content-container__buttons-triple-grid-sub-div2',
    buttonsLinkId: 'main-content-container__grid-buttons2-link',
    buttonsHref: `https://www.mcdonalds.com/us/en-us/about-our-food/meet-our-food-experts/our-nutritionists.html`,
    buttonsId: 'main-content-container__grid-buttons2',
    buttonsText: 'Meet Our Dietitians'
});

createTripleGridElement({
    subId: 'main-content-container__triple-grid-sub-div3',
    imgId: 'main-content-container__grid-image3',
    imgSrc: 'images/Suppliers_3Col_3-column-desktop.jpeg',
    imgAlt: 'suppliers-main-image',
    titleId: 'main-content-container__grid-title3',
    title: 'Supplier Stories',
    descriptionId: 'main-content-container__grid-description3',
    descriptionText: `Meet some of the people who provide the ingredients for your favorite menu items.`,
    buttonsDivId: 'main-content-container__buttons-triple-grid-sub-div3',
    buttonsLinkId: 'main-content-container__grid-buttons3-link',
    buttonsHref: `https://www.mcdonalds.com/us/en-us/about-our-food/meet-our-suppliers.html`,
    buttonsId: 'main-content-container__grid-buttons3',
    buttonsText: 'See Supplier Stories'
});

// BOTTOM SECTION: BOTTOM LINKS
const unorderedListFlexbox = document.createElement('section');
unorderedListFlexbox.id = 'main-content-container__unordered-list-flexbox';
unorderedListFlexbox.style.display = 'flex';
unorderedListFlexbox.style.justifyContent = 'space-between';
unorderedListFlexbox.style.padding = '0 20px';
mainContentContainer.appendChild(unorderedListFlexbox);

const unorderedListFlexboxSubDiv1 = document.createElement('div');
unorderedListFlexboxSubDiv1.id = 'main-content-container__unordered-list-flexbox-sub-div1';
unorderedListFlexbox.appendChild(unorderedListFlexboxSubDiv1);

const listHeader1 = document.createElement('div');
listHeader1.id = 'main-content-container__list-header1';
listHeader1.textContent = 'About Us';
listHeader1.style.fontWeight = '700';
listHeader1.style.marginBottom = '18px';
unorderedListFlexboxSubDiv1.appendChild(listHeader1);

const unorderedListFlexboxUl1 = document.createElement('ul');
unorderedListFlexboxUl1.id = 'main-content-container__unordered-list-flexbox-ul1';
unorderedListFlexboxUl1.style.padding = '0';
unorderedListFlexboxSubDiv1.appendChild(unorderedListFlexboxUl1);

function createListItemLink(id, href, textContent, parent) {
    const link = document.createElement('a');

    link.id = `${id}`-link;
    link.href = href;
    link.style.color = primaryColor;
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
createListItemLink('main-content-container__unordered-list-flexbox-li11-about', `https://www.mcdonalds.com/us/
en-us/about-us.html`, 'About Us Overview', unorderedListFlexboxUl1);

createListItemLink('main-content-container__unordered-list-flexbox-li12-team', `https://www.mcdonalds.com/us/
en-us/about-us/leadership-team.html`, 'Leadership Team', unorderedListFlexboxUl1);

createListItemLink('main-content-container__unordered-list-flexbox-li13-values', `https://www.mcdonalds.com/us/
en-us/about-us/values-in-action.html`, 'Values In Action', unorderedListFlexboxUl1);

createListItemLink('main-content-container__unordered-list-flexbox-li14-franchise', `https://www.mcdonalds.com/us/
en-us/us-franchising.html`, 'Franchise Info', unorderedListFlexboxUl1);

createListItemLink('main-content-container__unordered-list-flexbox-li15-recalls', `https://www.mcdonalds.com/us/
en-us/about-us/recalls.html`, 'Recalls & Alerts', unorderedListFlexboxUl1);

createListItemLink('main-content-container__unordered-list-flexbox-li16-real', `https://www.mcdonalds.com/us/
en-us/about-us/franchising/real-estate.html`, 'Real Estate', unorderedListFlexboxUl1);

createListItemLink('main-content-container__unordered-list-flexbox-li17-access', `https://www.mcdonalds.com/us/
en-us/accessibility.html`, 'Accessibility', unorderedListFlexboxUl1);

createListItemLink('main-content-container__unordered-list-flexbox-li18-invest', `https://corporate.mcdonalds.com/
corpmcd/investors.html`, 'Investor Relations', unorderedListFlexboxUl1);

createListItemLink('main-content-container__unordered-list-flexbox-li19-news', `https://corporate.mcdonalds.com/
corpmcd/our-stories.html`, 'News & Notifications', unorderedListFlexboxUl1);

// UNORDERED LIST NO 2: SERVICES
const unorderedListFlexboxSubDiv2 = document.createElement('div');
unorderedListFlexboxSubDiv2.id = 'main-content-container__unordered-list-flexbox-sub-div2';
unorderedListFlexbox.appendChild(unorderedListFlexboxSubDiv2);

const listHeader2 = document.createElement('div');
listHeader2.id = 'main-content-container__list-header2';
listHeader2.textContent = 'Services';
listHeader2.style.fontWeight = '700';
listHeader2.style.marginBottom = '18px';
unorderedListFlexboxSubDiv2.appendChild(listHeader2);

const unorderedListFlexboxUl2 = document.createElement('ul');
unorderedListFlexboxUl2.id = 'main-content-container__unordered-list-flexbox-ul2';
unorderedListFlexboxUl2.style.padding = '0';
unorderedListFlexboxSubDiv2.appendChild(unorderedListFlexboxUl2);

createListItemLink('main-content-container__unordered-list-flexbox-li21-services', `https://www.mcdonalds.com/us/
en-us/services.html`, 'Services Overview', unorderedListFlexboxUl2);

createListItemLink('main-content-container__unordered-list-flexbox-li22-wifi', `https://www.mcdonalds.com/us/
en-us/services/free-wi-fi.html`, 'Wi-Fi', unorderedListFlexboxUl2);

createListItemLink('main-content-container__unordered-list-flexbox-li23-play', `https://www.mcdonalds.com/us/
en-us/services/playplaces-and-parties.html`, 'PlayPlaces & Parties', unorderedListFlexboxUl2);

createListItemLink('main-content-container__unordered-list-flexbox-li24-delivery', `https://www.mcdonalds.com/us/
en-us/mcdelivery.html`, 'McDelivery®', unorderedListFlexboxUl2);

createListItemLink('main-content-container__unordered-list-flexbox-li25-mobile', `https://www.mcdonalds.com/us/
en-us/mobile-order-and-pay.html`, 'Mobile Order & Pay', unorderedListFlexboxUl2);

createListItemLink('main-content-container__unordered-list-flexbox-li26-trend', `https://www.mcdonalds.com/us/
en-us/whats-hot.html`, 'Trending Now', unorderedListFlexboxUl2);

createListItemLink('main-content-container__unordered-list-flexbox-li27-merch', `https://goldenarchesunlimited.com/`, 'McDonald\'s Merchandise', unorderedListFlexboxUl2);

createListItemLink('main-content-container__unordered-list-flexbox-li28-fun', `https://www.mcdonalds.com/us/
en-us/family-fun-hub.html`, 'Family Fun Hub', unorderedListFlexboxUl2);

createListItemLink('main-content-container__unordered-list-flexbox-li29-rew', `https://www.mcdonalds.com/us/
en-us/mymcdonalds.html`, 'McDonald\'s Rewards', unorderedListFlexboxUl2);

createListItemLink('main-content-container__unordered-list-flexbox-li210-cafe', `https://www.mcdonalds.com/us/
en-us/mccafe.html`, 'McCafé®', unorderedListFlexboxUl2);

// UNORDERED LIST NO 3: COMMUNITY
const unorderedListFlexboxSubDiv3 = document.createElement('div');
unorderedListFlexboxSubDiv3.id = 'main-content-container__unordered-list-flexbox-sub-div3';
unorderedListFlexbox.appendChild(unorderedListFlexboxSubDiv3);

const listHeader3 = document.createElement('div');
listHeader3.id = 'main-content-container__list-header3';
listHeader3.textContent = 'Community';
listHeader3.style.fontWeight = '700';
listHeader3.style.marginBottom = '18px';
unorderedListFlexboxSubDiv3.appendChild(listHeader3);

const unorderedListFlexboxUl3 = document.createElement('ul');
unorderedListFlexboxUl3.id = 'main-content-container__unordered-list-flexbox-ul3';
unorderedListFlexboxUl3.style.padding = '0';
unorderedListFlexboxSubDiv3.appendChild(unorderedListFlexboxUl3);

createListItemLink('main-content-container__unordered-list-flexbox-li31-com', `https://www.mcdonalds.com/us/
en-us/community.html`, 'Community Overview', unorderedListFlexboxUl3);

createListItemLink('main-content-container__unordered-list-flexbox-li32-serv', `https://www.mcdonalds.com/us/
en-us/community.html`, 'Now Serving', unorderedListFlexboxUl3);

createListItemLink('main-content-container__unordered-list-flexbox-li33-hacer', `https://www.mcdonalds.com/us/
en-us/community/hacer.html`, 'HACER® Scholarships for Hispanic Students', unorderedListFlexboxUl3);

createListItemLink('main-content-container__unordered-list-flexbox-li34-char', `https://www.mcdonalds.com/us/
en-us/community/giving-back-with-ronald-mcdonald-house.html`, 'Ronald McDonald House Charities', 
unorderedListFlexboxUl3);

createListItemLink('main-content-container__unordered-list-flexbox-li35-apa', `https://www.mcdonalds.com/us/
en-us/asian-pacific-americans.html`, 'McDonald’s Asian Pacific American', 
unorderedListFlexboxUl3);

createListItemLink('main-content-container__unordered-list-flexbox-li36-int', `https://corporate.mcdonalds.com/
corpmcd.html`, 'McDonald\’s International', 
unorderedListFlexboxUl3);

createListItemLink('main-content-container__unordered-list-flexbox-li37-black', `https://www.mcdonalds.com/us/
en-us/black-and-positively-golden.html`, 'Black and Positively Golden', 
unorderedListFlexboxUl3);

createListItemLink('main-content-container__unordered-list-flexbox-li38-lg', `https://www.mcdonalds.com/us/
en-us/community/lgbtq-plus.html`, 'McDonald’s LGBTQ+', 
unorderedListFlexboxUl3);

// UNORDERED LIST NO 4: CONTACT US
const unorderedListFlexboxSubDiv4 = document.createElement('div');
unorderedListFlexboxSubDiv4.id = 'main-content-container__unordered-list-flexbox-sub-div4';
unorderedListFlexbox.appendChild(unorderedListFlexboxSubDiv4);

const listHeader4 = document.createElement('div');
listHeader4.id = 'main-content-container__list-header4';
listHeader4.textContent = 'Contact Us';
listHeader4.style.fontWeight = '700';
listHeader4.style.marginBottom = '18px';
unorderedListFlexboxSubDiv4.appendChild(listHeader4);

const unorderedListFlexboxUl4 = document.createElement('ul');
unorderedListFlexboxUl4.id = 'main-content-container__unordered-list-flexbox-ul4';
unorderedListFlexboxUl4.style.padding = '0';
unorderedListFlexboxSubDiv4.appendChild(unorderedListFlexboxUl4);

createListItemLink('main-content-container__unordered-list-flexbox-li41-contact', `https://www.mcdonalds.com/us/
en-us/contact-us.html`, 'Contact Us Overview', 
unorderedListFlexboxUl4);

createListItemLink('main-content-container__unordered-list-flexbox-li42-gift', `https://www.mcdonalds.com/us/
en-us/faq/arch-card.html`, 'Gift Card FAQs', 
unorderedListFlexboxUl4);

createListItemLink('main-content-container__unordered-list-flexbox-li43-donations', `https://www.mcdonalds.com/us/
en-us/faq/business.html#donation`, 'Donations', 
unorderedListFlexboxUl4);

createListItemLink('main-content-container__unordered-list-flexbox-li44-employ', `https://www.mcdonalds.com/us/en-us/
faq/employment.html`, 'Employment', 
unorderedListFlexboxUl4);

createListItemLink('main-content-container__unordered-list-flexbox-li45-feedback', `https://www.mcdonalds.com/us/
en-us/feedback.html`, 'Customer Feedback', 
unorderedListFlexboxUl4);

createListItemLink('main-content-container__unordered-list-flexbox-li46-faq', `https://www.mcdonalds.com/us/
en-us/faq.html`, 'Frequently Asked Questions', 
unorderedListFlexboxUl4);

// SOCIAL MEDIA ICONS AND APP ICONS
const iconsFlexbox = document.createElement('section');
iconsFlexbox.id = 'main-content-container__icons-flexbox';
iconsFlexbox.style.display = 'flex';
iconsFlexbox.style.justifyContent = 'space-between';
iconsFlexbox.style.margin = '32px 0 42px 0';
iconsFlexbox.style.padding = '0 20px';
mainContentContainer.appendChild(iconsFlexbox);

const iconsFlexboxSubDiv1 = document.createElement('div');
iconsFlexboxSubDiv1.id = 'main-content-container__icons-flexbox-sub-div1';
iconsFlexbox.appendChild(iconsFlexboxSubDiv1);

function createSocialMediaLinkIcon(options) {
    const {linkId, href, iconId, iconSrc} = options;

    const socialMediaIconsLink = document.createElement('a');
    socialMediaIconsLink.id = linkId;
    socialMediaIconsLink.href = href;
    socialMediaIconsLink.style.marginRight = '17px';
    iconsFlexboxSubDiv1.appendChild(socialMediaIconsLink);

    const socialMediaIcons = document.createElement('img');
    socialMediaIcons.id = iconId;
    socialMediaIcons.src = iconSrc;
    socialMediaIcons.style.marginRight = '17px';
    socialMediaIconsLink.appendChild(socialMediaIcons);
}

createSocialMediaLinkIcon({
    linkId: 'main-content-container__social-media-icons1-link',
    href: 'https://www.facebook.com/McDonalds/',
    iconId: 'main-content-container__social-media-icons1',
    iconSrc: 'icons/facebook.png'
});

createSocialMediaLinkIcon({
    linkId: 'main-content-container__social-media-icons2-link',
    href: 'https://www.x.com/McDonalds',
    iconId: 'main-content-container__social-media-icons2',
    iconSrc: 'icons/x.png'
});

createSocialMediaLinkIcon({
    linkId: 'main-content-container__social-media-icons3-link',
    href: `https://www.youtube.com/channel/UCRI5ZedBs0_BYY4PlxD6m7w`,
    iconId: 'main-content-container__social-media-icons3',
    iconSrc: 'icons/youtube.png'
});

createSocialMediaLinkIcon({
    linkId: 'main-content-container__social-media-icons4-link',
    href: `https://www.instagram.com/mcdonalds/`,
    iconId: 'main-content-container__social-media-icons4',
    iconSrc: 'icons/instagram.png'
});

createSocialMediaLinkIcon({
    linkId: 'main-content-container__social-media-icons5-link',
    href: `https://mcdonalds.tumblr.com/`,
    iconId: 'main-content-container__social-media-icons5',
    iconSrc: 'icons/tumblr.png'
});

createSocialMediaLinkIcon({
    linkId: 'main-content-container__social-media-icons6-link',
    href: `https://open.spotify.com/user/mcdonalds`,
    iconId: 'main-content-container__social-media-icons6',
    iconSrc: 'icons/spotify.png'
});

const iconsFlexboxSubDiv2 = document.createElement('div');
iconsFlexboxSubDiv2.id = 'main-content-container__icons-flexbox-sub-div2';
iconsFlexbox.appendChild(iconsFlexboxSubDiv2);

function createAppLinkIcon(options) {
    const {linkId, href, iconId, iconSrc} = options;

    const socialMediaIconsLink = document.createElement('a');
    socialMediaIconsLink.id = linkId;
    socialMediaIconsLink.href = href;
    socialMediaIconsLink.style.marginRight = '17px';
    iconsFlexboxSubDiv2.appendChild(socialMediaIconsLink);

    const socialMediaIcons = document.createElement('img');
    socialMediaIcons.id = iconId;
    socialMediaIcons.src = iconSrc;
    socialMediaIcons.style.marginRight = '17px';
    socialMediaIconsLink.appendChild(socialMediaIcons);
}

createAppLinkIcon({
    linkId: 'main-content-container__social-media-icons21-link', 
    href: `https://itunes.apple.com/us/app/mcdonalds-mobile/id922103212?mt=8`, 
    iconId: 'main-content-container__social-media-icons21', 
    iconSrc: 'icons/app_store_badge (1).png'
});

createAppLinkIcon({
    linkId: 'main-content-container__social-media-icons22-link', 
    href: `https://play.google.com/store/apps/details?id=com.mcdonalds.app&hl=en`, 
    iconId: 'main-content-container__social-media-icons22', 
    iconSrc: 'icons/google_play_badge.png'
});

// FOOTER
const footer = document.createElement('footer');
footer.id = 'footer';
footer.style.borderTop = `1px solid ${customBorderColor}`;
footer.style.display = 'flex';
footer.style.justifyContent = 'space-between';
footer.style.alignItems = 'start';
footer.style.padding = '48px 20px 104px 20px';
mainContentContainer.appendChild(footer);

const footerSubDiv = document.createElement('div');
footer.id = 'footer__sub-div';
footer.appendChild(footerSubDiv);

const footerUl = document.createElement('ul');
footerUl.id = 'footer__ul';
footerUl.style.padding = '0';
footerUl.style.display = 'inline';
footerSubDiv.appendChild(footerUl);

function createListItemLink2(id, href, textContent, parent) {
    const link = document.createElement('a');

    link.id = `${id}-link`;
    link.href = href;

    const listItem = document.createElement('li');

    listItem.id = id;
    listItem.textContent = textContent;
    listItem.style.color = primaryColor;
    listItem.style.display = 'inline-block';
    listItem.style.listStyleType = 'none';
    listItem.style.padding = '0 40px 0 0';
    listItem.style.height = '44px';

    link.appendChild(listItem);
    parent.appendChild(link);
}

createListItemLink2('footer__li1', `https://www.mcdonalds.com/us/
en-us/privacy-overview.html`, 'Privacy (Updated)', footerUl);

createListItemLink2('footer__li2', `https://www.mcdonalds.com/
us/en-us/california-privacy-notice.html`, 'California Privacy Notice', footerUl);

createListItemLink2('footer__li3', `https://www.mcdonalds.com/
us/en-us/terms-and-conditions.html`, 'Terms & Conditions', footerUl);

createListItemLink2('footer__li4', `https://www.mcdonalds.com/
us/en-us/accessibility.html`, 'Accessibility', footerUl);

createListItemLink2('footer__li5', `https://www.mcdonalds.com/us/
en-us/privacy/do-not-sell-my-personal-information.html`, `Do Not Sell or Share My 
Personal Information`, footerUl);

createListItemLink2('footer__li6', `https://www.mcdonalds.com/us/
en-us/about-our-food/meet-our-food-experts.html#`, `Cookies Settings`, footerUl);

const nestedFlexbox = document.createElement('div');
nestedFlexbox.id = 'footer__nested-flexbox';
nestedFlexbox.style.display = 'flex';
nestedFlexbox.style.justifyContent = 'space-between';
nestedFlexbox.style.alignItems = 'center';
footer.appendChild(nestedFlexbox);

const nestedFlexboxSubDiv1 = document.createElement('div');
nestedFlexboxSubDiv1.id = 'footer__nested-flexbox-sub-div';
nestedFlexbox.appendChild(nestedFlexboxSubDiv1);

const archesLogo = document.createElement('img');
archesLogo.id = 'footer__arches-logo';
archesLogo.src = 'icons/arches-logo_108x108.jpg';
archesLogo.style.width = '28px';
archesLogo.style.verticalAlign = 'bottom';
nestedFlexboxSubDiv1.appendChild(archesLogo);

const nestedFlexboxSubDiv2 = document.createElement('div');
nestedFlexboxSubDiv2.id = 'footer__nested-flexbox-sub-div';
nestedFlexbox.appendChild(nestedFlexboxSubDiv2);

const copyrightText = document.createElement('div');
copyrightText.id = 'footer__copyright-text';
copyrightText.textContent = '© 2017 - 2023 McDonald\'s. All Rights Reserved';
copyrightText.style.lineHeight = '16px';
copyrightText.style.textAlign = 'right';
copyrightText.style.padding = '12px 0 0 44px';
copyrightText.style.width = '280px';
nestedFlexboxSubDiv2.appendChild(copyrightText);