# Gwinnett County Mobile Site - Front End
## Mighty 8th Media

## Project Organization

##### ZURB Foundation for Responsive Design
This project uses [Foundation by ZURB] (http://foundation.zurb.com/). Taking advantage of a responsive grid system, the frontend for this project is viewable on a wide array of mobile and tablet devices.
Included at the end of each HTML file is the inclusion of the foundation javascript. Modules have been commented out, but are included for reference.

##### HTML Scaffolding using HAML
Scaffolding was first written in HAML and then rendered into HTML files named after their content. HAML markup files can be found in ./htdocs/haml while HTML markup files are in ./htdocs. There are also some HAML snippet files included in ./htdocs/haml for reference to modular markup. Scaffolding was created for 12 views in total; paralleling the comprehensive layouts provided. All of the pages can also be viewed from a [preview page - preview.html] (./htdocs/preview.html) The views are:
* [Community Service] (./htdocs/community_service.html) - community_service.html
* [Departments] (./htdocs/departments.html) - departments.html
* [Emergency Contacts] (./htdocs/emergency_contacts.html) - emergency_contacts.html
* [Homepage] (./htdocs/index.html) - index.html
* [Near Me A] (./htdocs/nearme_a.html) - nearme_a.html
* [Near Me B] (./htdocs/nearme_b.html) - nearme_b.html
* [Near Me C] (./htdocs/nearme_c.html) - nearme_c.html
* [News] (./htdocs/news.html) - news.html
* [Online Services] (./htdocs/online_services.html) - online_services.html
* [Parks & Recreation] (./htdocs/parks_recreation.html) - parks_recreation.html
* [Search Results] (./htdocs/search_results.html) - search_results.html

##### SASS Styling
Project uses [SASS CSS extension] (http://sass-lang.com/) and leverages the authoring tools from [Compass] (http://compass-style.org/).

##### Google Maps Javscript API v3
Project uses a placeholder instance of [Google Maps JS API v3] (https://developers.google.com/maps/documentation/javascript/) to display a markered location for the Near Me functionality.

##### SwipeJS
Project uses [SwipeJS] (https://github.com/bradbirdsall/Swipe) for the swipeable carousel in several instances.