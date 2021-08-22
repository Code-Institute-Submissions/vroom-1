# **Vroom**

## **About**

Link to live project: [Vroom](https://ryagg.github.io/vroom)

Vroom is a website that provides a quick overview of the most important F1 Data using the API-FORMULA-1 by API-SPORTS. Users can see the current, previous, and upcoming race at a glance, take a look at the driver’s and team standings, see the full race calendar with track details and change the website’s theme.

![Mockup](assets/images/readme/sizzy-mockup.png)
Due to most of the data on the site being dependent on API calls I couldn't use the usual tools (http://ami.responsivedesign.is/ or https://techsini.com/multi-mockup/). The table with the driver standings would have been empty and the three cards for the schedule overview would have showed placeholder text. I therefore used Sizzy to create the mockup.

## **User Experience (UX)**

---

### **User stories:**

**Generic user (website visitor):**

-   As a user, I want to quickly see the time and date of the current and/or next race so that I don’t miss events.
-   As a user, I want to see the driver’s and teams’ standings so that I’m up to date on results.
-   As a user, I want to see the latest results of drivers and teams so that I can gauge their form.
-   As a user, I want to see the whole race calendar with track details so that I can decide if I want to buy tickets for the race.
-   As a user, I want to be able to change the website’s theme so that I can adjust it to my liking.

** Returning user:**

-   As a returning user, I want the website to remember my choice for the website's theme.

**Website owner:**

-   As the website owner, I want the site to be responsive, so that users can enjoy it on all devices from mobile phones to desktops.
-   As the website owner, I want the site to be as informative as possible without being cluttered, so that users can find the information they’re looking for quickly.
-   As the website owner, I want the site to make API calls when necessary and not on every page reload.

## **Design**

---

The project uses the Bootstrap framework to ensure a responsive design. Where possible, design elements with either an association with speed or Formula One were chosen.

### **Colour Scheme**

For the themes I used the team colours from Red Bull Racing, Mercedes-AMG Petronas and McLaren Racing. For the default theme I chose colours with a high contrast to ensure readability and accessibility. I used [Coolors](https://coolors.co) to generate my colour palette. Note: due to limitations regarding the number of colors, black as well as the lighter variants of silver, yellow and orange for the text-shadows are not included.

![Color palette](assets/images/readme/vroom-color-palette.jpg)

### **Typography**

For fonts, I used Ubuntu for headings. Especially the letters f, t and n transport a sense of speed. For all other text, I chose Fira Sans.

![Ubuntu](assets/images/readme/ubuntu-400-20px.png)
![Fira Sans](assets/images/readme/fira-sans-400-20px.png)

### **Icons**

There are no icons used on the site itself. The favicon was generated from an
[Font Awesome](https://fontawesome.com) icon.

### **Imagery**

The driver, team logo and racetrack images are being provided by the API. Credit for the images used on the contact and 404 pages as well as for placeholder images is given below in the media section.

### **Wireframes**

I used Balsamiq to plan the site’s layout for different viewports (mobile, tablet and desktop). To better demonstrate the differences, I sort my wireframes by page and show the versions for mobile, tablet and desktop next to each other.

[Wireframes for index.html](assets/wireframes/homepage.png)
![wireframes for index.html](assets/wireframes/homepage.png)
Differences in the deployed version:

-   The name of the project has been changed to Vroom.
-   In the navbar, 'Schedule' has been renamed to 'Schedule overview' to better differentiate it from the added 'Full Schedule'.
-   The links for 'Drivers' and 'Teams' have been removed. The additional information has been placed into modals.
-   The elements with the full schedule and information about each race in the 2021 season have been moved to a separate page. The layout hasn't changed, therefore I didn't create a new wireframe.
-   The display of the first three places from the previous year for each race has been removed from the project. It would have added at least 22 more API calls. Furthermore, neither one of the two APIs I'm using provides suitable endpoints.

[Wireframes for contact.html](assets/wireframes/contact.png)
![wireframes for contact.html](assets/wireframes/contact-form.png)
Differences in the deployed version: none.

No wireframe has been created for the 404 page due to it's minimalist design. I decided against creating one ex post as that would defy the purpose of a wireframe.

## **Features**

---

### **Existing Features**

#### **All pages: navbar**

The navbar is in a fixed position at the top of each page allowing the user quick access to navigate the site. The link for the currently active page will be highlighted to facilitate orientation. The non-active links will be highlighted in a similar, but more subtle way and additionally, the mouse cursor will change.
On mobile devices, the navigation links collapse into the widely used hamburger-menu and are positioned on the right hand side for easy access. The brand is positioned to the left-hand side to allow users to easily return to the homepage with one touch.

#### **All pages: footer**

The footer is located at the bottom of each page and includes links to social media. The links open in a new browser tab.

#### **Homepage: welcome section**

The welcome section consists of a short paragraph informing the user about the site's aim.

#### **Homepage: schedule overview**

The schedule overview shows the country, city, name and date for the previous, current and next race. On viewports >= 768px information for all three races is displayed next to each other in chronological order. On mobile devices only the information about the current race is being displayed. Users can use buttons to change the display to either the previous or current race. Data for the schedule overview are being fetched from the API-FORMULA-1 by API-SPORTS.

#### **Homepage: theme selection**

Users can choose between three different team themes to change the color scheme for the driver and team standings as well as the headings for those tables. Users can also revert back to the default theme. The selected theme is saved to local storage and applied after a page reload.

#### **Homepage: driver standings**

Users can check the position of all current F1 drivers in the championship and their current points as well as the team the selected driver is driving for. On mobile devices the display of the drivers' team is being hidden. A short text above the table informs the user that additional information about the driver is available by clicking on a drivers' name. Data for the driver standings are being fetched from the API-FORMULA-1 by API-SPORTS.

#### **Homepage: modal with additional information about drivers**

When a user clicks on a drivers name in the driver standings table, a modal appears centred on the screen. The modal includes the driver's name, his birthdate, nationality and a picture of the driver. Users can close the modal by clicking on the 'X' in the top right corner, the close-button in the bottom-right corner or by clicking outside the modal. Data for the driver modals are being fetched from the API-FORMULA-1 by API-SPORTS.

#### **Homepage: team standings**

Users can check the position of all current F1 teams and their current points in the championship. To use F1 vocabulary, the term constructor is used instead of team. A short text above the table informs the user that additional information about the team is available by clicking on a team's name. Data for the team standings are being fetched from the API-FORMULA-1 by API-SPORTS.

#### **Homepage: modal with additional information about teams**

Similar to the modal with additional information about drivers. The only difference is the data being shown. This modal shows the team name, the names of the director and technical manager, the name of the engine being used by the F1 cars and the team logo. Data for the team modals are being fetched from the API-FORMULA-1 by API-SPORTS.

#### **Full schedule page: race information**

The full schedule page features two columns for each race in the current F1 season. On the left hand, information about the round number, date, country, race name, track name and the track map are being displayed. On the right hand, the starting times for each race session (practice 1 - 3, qualifying and the race) are being displayed. Data for the full schedule are being fetched from the F1 Live Motorsport Data API by sportcontentapi.

#### **Contact page: contact form**

The contact page features a contact form. The form uses form-validation and all input fields have to be filled out for the user to be able to submit the form. Users have the option to clear the form content. When the user submits the form a modal informs the user about the successful submission and the form is cleared. EmailJS is used to inform the site owner about user messages including the message text and the user's name and email address.

#### **404 page: link back to homepage**

Users who enter an incorrect URL for the site are being directed to the 404 page. The page features a short technical error message, an image of red race lights and a short explanation that there is no page to be displayed. Beneath, they can click on the link to be directed back to the homepage.

### **Features to be implemented**

-   Displaying the start times for the individual race sessions in local time in addition to track time.
-   Let users browse through data for previous seasons
-   Provide links for users to buy tickets for the individual races

## **Technologies Used**

### **Languages**

-   [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
-   [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
-   [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### **Libraries & Frameworks**

-   [Bootstrap 5.0.1](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
-   [jQuery 3.6.0](https://jquery.com/)
-   [Day.js 1.10.6](https://day.js.org/en/)
-   [Google Fonts](https://fonts.google.com/)
-   [Font Awesome](https://fontawesome.com/)

### **Tools**

-   [VSCode](https://code.visualstudio.com/)
-   [Git BASH](https://gitforwindows.org/)
-   [GitHub](https://github.com/)
-   [Google Chrome Developer Tools](https://developer.chrome.com/docs/devtools/)
-   [Sizzy](https://sizzy.co/)
-   [Balsamiq](https://balsamiq.com/)
-   [Coolors colour palette generator](https://coolors.co/)
-   [W3C HTML Validation Service](https://validator.w3.org/)
-   [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
-   [JSHint](https://jshint.com)

## **Testing**

---

### **Functionality Testing**

Please refer to the separate [TESTING.md](TESTING.md)

## **Usability Testing**

Please refer to the separate [TESTING.md](TESTING.md)

## **Compatibility Testing**

Please refer to the separate [TESTING.md](TESTING.md)

## **Testing User Stories**

### **User Requirements and Expectations**

The following user requirements and expectations were developed based on the user stories.

#### Expectation: being able to quickly see the date and time of the current and next race

-   Requirement: on the homepage this should be among the first data the users sees.
-   Implementation: the schedule overview has been placed directly beneath the welcome message. From the Full Schedule and Contact page the user can reach the schedule overview via the navbar and from the 404 page the user can use provided link back to the homepage. See the screenshots [here](assets/images/usertests/user-expectation-1.png) and [here](assets/images/usertests/user-expectation-1-example-2.png).

#### Expectation: being able to see the driver's and team's standings

-   Requirement: the user should intuitively find the desired information.
-   Implementation: the tables containing the driver and team standings have been placed on the homepage. Furthermore, the navbar allows quick navigation to each of the tables. See the screenshots [here](assets/images/usertests/user-expectation-2.png), [here](assets/images/usertests/user-expectation-2-example-2.png) and [here](assets/images/usertests/user-expectation-2-example-3.png).

#### Expectation: being able to see the latest results of drivers and teams to be able to gauge their form

Unfortunately, this feature could not be implemented. Neither of the used APIs offers a suitable endpoint to obtain the required data and it was outside the scope of this project to find and implement a custom-made solution.

#### Expectation: being able to see the whole race calendar with track details

-   Requirement: in addition to the schedule overview on the homepage, the user should be able to see the race calendar for the full season with additional information.
-   Implementation: the full schedule page provides the following data for all confirmed races of the 2021 season: the number of the round, the date, country + name of the race, the name of the track and the starting times for the individual race sessions. See the screenshot [here](assets/images/usertests/user-expectation-4.png). Due to the already high number of API calls being made, it was again outside the scope of this project to add another API, e.g. Google Maps, to provide the user with even more data.

#### Expectation: being able to change the website's theme

-   Requirement: the user should be able to intuitively change the website's theme
-   Implementation: on the homepage 4 buttons have been placed that allow the user to select a theme that uses the team colors from Mercedes, Red Bull or McLaren. The button's background and text colors imitate the changes applied by the themes. The fourth button allows the user to revert back to the default theme. The themes change the background and text color of the two tables and add shadow-effects to the table headings. See screenshot (exemplary for one of the themes) [here](assets/images/usertests/user-expectation-5.png). No other elements on the homepage or the other pages are affected on purpose because these elements bear no relation to either drivers or teams.

#### Expectation: the website 'remembers' the user's choice for a theme

-   Requirement: the website applies a previously selected theme after a page reload
-   Implementation: For first time visitors, the theme is set to default. On theme selection, the chosen theme is saved to local storage. On page load a check for a set theme runs and applies the according theme. See code screenshot [here](assets/images/usertests/user-expectation-6.png).

#### Expectation: the website is responsive

-   Requirement: the website can be easily viewed and navigated on different viewports without the content being unreadable or the user having to unnecessarily scroll to see content
-   Implementation: both Bootstrap and a mobile-first approach were used to make the site responsive. Additionally, some content is not displayed on smaller viewports. For reference, please see the mockup and the wireframes.

#### Expectation: the website is informant without being cluttered

-   Requirement: the website offers the most important information about the current F1 season without being cluttered and without feature creep.
-   Implementation: all pages feature a minimalistic design. Text content is kept at the minimum needed to convey the information. Additional information about drivers and teams can be viewed via modals and the user is informed about this in a short text above the corresponding table. See screenshots [here](assets/images/usertests/owner-expectation-2.png) and [here](assets/images/usertests/owner-expectation-2-example-2.png).

#### Expectation: API calls are made when necessary and not on every page reload

-   Requirement: checks should be put into place to ensure that API calls are only being made when necessary
-   Implementation: on first load all API endpoints are called, the data saved to local storage and Boolean variables for each set of data set to true. For later page loads, for each data set a check is run whether the data is in local storage. API calls are only made for missing data. For data that changes regularly (the standings and the schedule overview) additional checks are run to ensure that the data is kept up to date. See code screenshots [here](assets/images/usertests/owner-expectation-3.png) and [here](assets/images/usertests/owner-expectation-3-example-2.png).

## **Bugs**

-   **Caused by bad data from API: missing or wrong driver images**

    For the following drivers the URL for the driver images lead to a '404 Not Found' page:

    -   [Sergio Perez](assets/images/bugs/perez-response.png) : [404](assets/images/bugs/perez-404.png)

    -   [Yuki Tsunoda](assets/images/bugs/tsunoda-response.png) : [404](assets/images/bugs/tsunoda-404.png)

    -   [Nicholas Latifi](assets/images/bugs/latifi-response.png) : [404](assets/images/bugs/latifi-404.png)

    -   [Mick Schumacher](assets/images/bugs/schumacher-response.png) : [404](assets/images/bugs/schumacher-404.png)

    -   [Nikita Mazepin](assets/images/bugs/mazepin-response.png) : [404](assets/images/bugs/mazepin-404.png)

    For the following drivers the URL from the API for the driver images lead to a wrong picture:

    -   [Carlos Sainz Jr](assets/images/bugs/sainz-response.png) : [wrong image](assets/images/bugs/sainz-wrong-picture.png)

    The picture shows his father.

    -   [Sebastian Vettel](assets/images/vettel-response.png) : [wrong image](assets/images/bugs/vettel-wrong-picture.png)

    The picture does show Sebastian Vettel but in his Ferrari team wear from last season. He now drives for Aston Martin.

-   **Caused by bad data from API: missing and wrong info for team modal**

    For the Williams F1 Team the name of the director is being displayed as ['null'](assets/images/bugs/williams-wrongdata.png) and the names of the president and technical manager are wrong. Ownership of the team has changed in August 2020 and Claire Williams stepped down. Simon Roberts left the team in June 2021.

-   **Caused by bad data from API: missing track maps for the Portugese and Saudi Arabia Prix and track map for Abu Dhabi not being displayed**

    The function addTrackMap(className, query) returns an object with various data about the race track. The variable trackMap contains the URL for the track map. There are URLs for each of the race tracks. But the URLS for the races in [Saudi Arabia](assets/images/bugs/saudiarabia-response.png) and [Portugal](assets/images/bugs/portugal-response.png) lead to a '404 Not Found' page [here](assets/images/bugs/portugal-404.png) and [here](assets/images/bugs/saudiarabia-404.png). This then causes an uncaught TypeError in the console. Depending on whether I declare the variable trackName or trackMap first the error will read 'Cannot read property 'name' of undefined at addTrackMap' or 'Cannot read property 'image' of undefined at addTrackMap'. This error is neither caused by me nor can it be fixed by me.

    For the Portugese Grand Prix the track name is displayed and instead of the track map the [alt-text](assets/images/bugs/portugal-alt.png) is being displayed.
    For the Grand Prix of Saudi Arabia neither the track name nor the track map are being displayed. Instead both my own error message and my [generic racetrack image](assets/images/bugs/saudiarabia-generic.png) are being displayed.
    The URL for the race in Abu Dhabi displays the track map but on the deployed site the [generic racetrack image](assets/images/bugs/abudhabi-generic.png) and error text are being displayed.

-   **Caused by me: cards for previous and next race not being centred on mobile devices**

    On mobile devices the user has to use the shift-left and shift-right buttons to see the data for the previous or next race. Instead of using a Bootsrap carousel or a JavaScript framework I decided to implement this feature myself. I frequently checked the results with Chrome Devtools and in the end the previous and next cards appeared almost centred. I added several breakpoints for mobile devices to achieve this. The cards just a few pixels off, if at all. I was satisfied with the result. See exemplary screenshots [here](assets/images/bugs/devtools-centred.png) and [here](assets/images/bugs/devtools-centred-2.png). When loading the page on my own mobile, the cards were clearly off to the light or right side for the previous or next race card respectively. When I checked the results with Sizzy the cards appeared centred for some mobile devices, but not for others two days ago. After adding vendor prefixes through Autoprefixer Sizzy suddenly displayed the race cards being off to the side for all devices although the corresponding code was not affected by added prefixes. Interestingly, for the Galaxy S10 Sizzy showed the cards not being centred, but when a colleage loaded the site, the card did appear centred. Utterly confused and running out of ideas (after trying several variations of the Bootstrap position utilities, changing the width of the not active neighbour card to 1px, decreasing the z-index of the non-active card, and using a combination of float and toggle) I decided to give up on trying to center the cards.

-   **Caused by me: height of the schedule cards with session times not always matching the height of the schedule cards with location information**

    The schedule cards displaying the session times need less height than the schedule cards displaying the location information on the schedule page. Additionally, for the races in Saudi Arabia and Abu Dhabi ( rounds 20 + 21) generic racetrack images are being displayed instead of the track maps as mentioned in the corresponding bug report. These images are made responsive with the img-fluid class. They therefore differ in size in relation to the track maps.I tried to adjust by adding mediaqueries with values for min-height for the schedule cards. This works well for rounds 1 - 19 and all breakpoints in Google Chrome, Microsoft Edge, Firefox and Opera. It does not work for rounds 20 + 21 and breakpoints larger than 1440px in Microsoft Edge and Mozilla Firefox. I tried converting px to em for the 4k breakpoint to no avail.

-   **Caused by me: placeholder text or images being visible while content is being fetched from the API**

    Without placeholder text for headings or an image src I risk validator warnings and with
    an image src for a non-existent picture or icon an error is logged to the console. I have no better solution.

-   **Too much whitespace on schedule page for breakpoints equal to and larger than 1440px and cards not horizontally equally spaced**

    The schedule page looks awful on viewports with 1440px and more. The track maps from the API are not responsive and there is not enough other content to fill the space. I've tried to adjust for this by changing the col-size from 6 to 4 for both cards, increasing the font-size and changing the margins. It looks slightly better, but the result is still not satisfactory. I can't make the track maps from the API responsive. A third column with session times being displayed in local time would greatly amend this problem, but currently I have no solution.

## **Deployment**

---

-   GitHub Pages

    1. The project was deployed on GitHub Pages. The following steps were taken.
    2. In the repository, go the the project main page.
    3. Click on 'Settings' and then scroll down to the section 'GitHub Pages'.
    4. Click on the link for the new dedicated Page settings tab.
    5. In the new window using the drop-down menu select the main branch and then click on 'Save'.
    6. The site is now published and a link is provided.

-   Forking
    If you wish to use this repository as a starting point or to propose changes to this project, you can fork it. Follow the steps below.

    1. Navigate to the repository, e.g. [Ryagg/vroom](https://github.com/Ryagg/vroom)
    2. Click 'Fork' in the top-right corner.

-   Cloning
    Cloning a repository creates a local copy on your computer. Follow the steps below.
    1. Navigate to the repository, e.g. [Ryagg/vroom](https://github.com/Ryagg/vroom)
    2. Click 'Code' above the list of files.
    3. In the new window, cloning using HTTPS is the default option. Copy the provided link manually or by clicking on the clipboard symbol.
    4. Open Git Bash.
    5. Navigate to your desired directory for the cloned project.
    6. Type 'git clone' followed by the URL copied in step 3.
    7. Press **Enter** to create your local clone.

## **Credits**

### **Media**

The following photos used for this project were obtained from [Unsplash](https://unsplash.com).

#### schedule.html

Nürburgring: Photo by [Jan Ivo Henze](https://unsplash.com/@jan_ivo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/racetrack?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

#### contact.html

Freeway: Photo by [Jake Givens](https://unsplash.com/@jakegivens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@jakegivens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

#### 404.html

Red race lights: Photo by [Carlos Quesada](https://unsplash.com/@carlosquesada?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/collections/895404/formula-one?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

The generic-person icon used as a placeholder in the driver modal was downloaded from [icon-library.com](https://icon-library.com/icon/generic-person-icon-1.html)

The generic-team icon used as a placeholder in the team modal was made by [Freepik](https://www.freepik.com) from [Flaticon](www.flaticon.com)

### **Acknowledgements**

Many thanks to:

-   My mentor Maranatha Ilesanmi for his helpful insights and feedback.
-   The always helpful and supportive CI slack community
-   My boss for allowing me to leave work early quite often to work on my project instead
-   My friends and colleagues for their support and feedback
