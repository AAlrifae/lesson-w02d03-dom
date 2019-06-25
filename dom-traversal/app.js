// // // console.log('Hi');
// // const heading = document.querySelector('h1');
// // console.log(heading)

// // /// select the paragraph
// // const paragraph = document.querySelector('p');
// // console.log(paragraph)

// // // Select the image with a class selector
// // const image = document.querySelector('.bill');
// // console.log(image)

// // const firstListItem = document.querySelector('li');
// // const secondListItem = document.querySelector('li#second');

// // console.log(firstListItem, secondListItem);

// // //get all li
// // const allListItems = document.querySelectorAll('li');
// // //console.log(allListItems);

// // console.log('Starting')
// // for (let i = 0; i < allListItems.length; i++) {
// //     const currentListItem = allListItems[i];
// //     console.log(currentListItem)

// // }
// // console.log('Ending')


// // const allParagraph = document.querySelectorAll('p');
// // console.log(allParagraph);

// // //Every image on the page
// // // The navigation area in the upper right
// // // The MailChimp sign-up form in the bottom
// // // The upper left-hand logo that says GDI (Hint: use CSS descendant selectors)
// // // The logos of the media sources that featured GirlDevelopIt (lifeHacker, TED, etc., at the bottom of the page)
// // // The big heading that says "DON'T BE SHY DEVELOP IT"
// // // All of the headings that have the underline (e.g. Who we are, We are now in 63 cities)
// // // All of the images that are in the stats part of the page (e.g. 26%, 18% and 34%)
// // // BONUS: all the dots in the map

// // // const allImages = document.querySelectorAll('image')
// // // const navigation = document.querySelector('nav')
// // // const allImages = document.querySelectorAll('image')
// // // const allImages = document.querySelectorAll('image')
// // // const allImages = document.querySelectorAll('image')

// // //print out the ul's innerText and the ul's innerHtml
// // const unorderdList = document.querySelector('ul')
// // console.log(unorderdList.innerHTML);
// // console.log(unorderdList.innerText);


// // const input = document.querySelector('input');
// // const currentValue = input.value;
// // console.log(currentValue);
// // input.value = 'Hello From JS';

// //getting styles 
// // 1. select the DOM node
// const heading = document.querySelector('h1');

// // 2. Ask for all of the current styles
// const styles = getComputedStyle(heading);

// // 3. Ask for properties
// console.log(styles.color);
// console.log(styles.fontSize);//font-size -> fontSize
// console.log(styles.textDecoration); //tex-decoration -> textDecoration
// console.log(styles.border);

// console.log('//////////');
// // Find the a tag
// const aTag = document.querySelector('a')

// const aTagStyles = getComputedStyle(aTag);

// console.log(aTagStyles.color);
// console.log(aTagStyles.fontSize);
// console.log(aTagStyles.textDecoration);
// console.log(aTagStyles.display);

// //Find the image
// console.log('Find the images');
// const image = document.querySelector('img');

// //Print out the borders, width, height and 

// const imageStyles = getComputedStyle(image);

// console.log(imageStyles.border);
// console.log(imageStyles.width);
// console.log(imageStyles.height);
// console.log(imageStyles.borderRadius);

// // console.log(imageStyles.length)


// //Change Styles
// // const heading = document.querySelector('h1');
//  headingStyle = heading.style;
// headingStyle.color = 'hotpink';
// headingStyle.background = 'green';
// headingStyle.fontSize = '100px';

// //const image = document.querySelector('img');
// image.style.width = '200px';
// image.style.height = '400px';
// image.style.border = '50px solid pink';


// Creating Element
// 1. Create the element and store it in JS variable
// 2. Change it (using things like .innerText, .style)
// 3.Put it on the Page

const newHeading = document.createElement('h1');
newHeading.innerText = 'Created by JavaScript';

const targetDiv = document.querySelector('.dynamic');
targetDiv.appendChild(newHeading);


const newImg = document.createElement('img');

newImg.setAttribute('src','http://www.placecage.com/400/400' );
newImg.style.border = '4px dashed purple';

document.body.appendChild(newImg)
const tweet = 'this is a tweet';
const author = 'ahlam';

const content = `${tweet}, posted by ${author}`;
const newParagraph = document.createElement('p');

newParagraph.innerText = content;
newParagraph.style.color = 'blue';

const newTweetDiv = document.querySelector('.newTweet');
newTweetDiv.appendChild(newParagraph);