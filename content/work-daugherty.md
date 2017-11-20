+++
date = "2017-10-20T0:00:01-05:00"
draft = false
type = "work"
title = "Daugherty"

+++


I work at [Daugherty Business Solutions](https://www.daugherty.com/) at the Minneapolis / Saint Paul branch as a Software Engineer 2 and Consultant.

---

### Work Updates

#### November <small>Week 86</small>
- Began a new project, focused on live asset tracking through stages of growth...
  - built a CI/CD pipeline with Bitbucket pipelines and...
    - dynamic frontend builds based on destination environment, and deployment to S3
    - deployments to Elastic Beanstalk of a node and express backend
  - helped bootstrap new Vue CLI app; adapted the build scripts to handle multiple environments easily
  - helped bootstrap a react native app with Expo integrations
  - helped setup ES Lint and Prettier configurations
- Concluded three month project...
  - using Drone for CI/CD, deploying Serverless AWS Lambdas and frontend assets to S3 and Cloudfront
  - primarily built the Vue frontend with Auth0 integration

#### October <small>Week 82</small>
- Built a CI/CD pipeline to deploy a full stack application with Drone and:
  - integrated with Kubernetes, building a Spring Boot application into a customized Docker image, passing Xray security validation, to deploy the API layer
  - integrated with AWS, S3 and Cloudfront to deploy a Vue based user interface
  - integrated with Terraform to build codified domain name infrastructure
  - integrated with a _biz app_ server as an standalone application dependency <!-- chain -->
- Added a third party OAuth OIDC conformant authentication and authorization integration to an existing Vue based user interface, using the interceptor pattern for handling authentication and authorization API layer errors uniformly <!-- auth0 -->


#### September: <small>Week 78</small>
- Built a CI/CD pipeline with Drone, to run integration tests and deploy a Vue user interface to S3 buckets dynamically based on check-in branch and testing results.
- Presented a successful prototype project at a knowledge sharing event with high level executives to explain the technology and value of the product.
- Attended a third public HackerX recruiting event on behalf of Daugherty, and spoke to more than 15 software engineers during the event.

#### August: <small>Week 73</small>
- Joined a new team as primary user interface developer, working primarily working Vue and Boostrap 4 (stable) and consulting on the backend API service layers.
- Built a prototype react native app with a general purpose theme to prove techincal viability in a potential product.
- Continued to provide techincal interviews for frontend software engineering positions.
- Attended 2017 MidwestJS as a part of Daugherty's sponsorship of the conference.

#### July: <small>Week 69</small>
- Built an intermediate API to fetch data from GitHub API v3 and decorate incoming data with custom data fields for use in a dashboard app.
- Enhanced a ReSTful API by using the DTO pattern to decouple domain entities and exposed interfaces to clients and reducing complexity of circular data references.
- Refined an existing Vue based application...
  - added more aesthetically pleasing designs for searching, filtering and increased usability by reducing visual noise.
  - added Google Analytics tracking for pageviews and application specific events to track usage and monitor goals of the application
- Started exploring react native application development.
- Conducted technical interviews for frontend software engineers.

#### June: <small>Week 64</small>
- Built a Vue CLI template to help bootstrap Vue based prototypes with out of box branding, theming, basic layout components, utilities and more.
- Assisted the presentation of the charting demo to a consortium of interested business unit leaders to demonstrate business potential and viability as a product.
- Built and demonstrated an alternative version of a solution using the capabilities of a reference blockchain implementation for marketing purposes that could increase brand coherence, trust and value.

#### May: <small>Week 59</small>
- Worked on a Vue based user interface to display scatter and radar charts with data sourced from uploaded CSV files and transformed in the Java API layer dynamically based on incoming type of data that helped prove business need and viability.
- Participated in Daugherty's private HackerX event, speaking to more than eighteen potential candidates over the course of the night.

#### April: <small>Week 54</small>
- Worked on a supply chain resource tracking tool, using the capabilities of a reference blockchain implementation, to demonstrate the value of a decentralized system such that multiple entities can have a stake in the system, and can be ensured that the manipulation of the data after entry is non-trivial.
- Attended my third business unit meeting, and gave a brief demo of some our team's project work.

#### March: <small>Week 52</small>

- Presented at the Daugherty Office, a presentation on Vue that explained the basics of Vue with a workshop, and explored some of the more complex topics in the Vue ecosystem, like routing, state management and the tooling.

#### March: <small>Week 51</small>

- Attended a local HackerX recruiting event with the Daugherty team, spoke during our introduction on stage, and briefly talked to more than sixteen attendees.
- Participated in a discovery project for multiple large business units to determine if the consolidation of business logic and user experience among thier respective existing systems could be provided by a single portal user interface.

#### Late February: <small>Week 49</small>

- Completed a Progressive Web App for the prototype project, built with built with Vue, Vue Router, Vuex, Webpack, Bulma and more, featuring...
  - desktop and mobile responsive design
  - offline assets through AppCache
  - offline data with periodic refreshing
  - connection aware conditional flows
- Conducted additional technical interviews for new software engineering candidates.

#### February: <small>Week 44</small>

- Began a new engagement at a client site, and starting the requirements gathering phase of a prototype application that will digitize existing paper forms regarding safety procedures.

#### January: <small>Week 43</small>

- Debuted a short Vue talk about Vue CLI and using Vue Components at JavaScriptMN, the regional monthly JavaScript meetup event.
- Presented a copycat presentation for various Dev Center and client site developers at the first Dev Center + Client Site developers collaboration day.

#### January 1st, 2017: <small>Week 39</small>

- It's a new year!
- Explored the internals of Spring and conditional beans by creating an implementation of "interior authorization", to intercept incoming JWTs in request headers of internal services in a microservice architecture app, and inflate Spring Security information using the intercepted JWT.

#### December: <small>Week 35</small>

- As a side project between engagements, developed with the team a practical asset to our physical Dev Center space: a simple database-less websockets Spring Boot backend and Vue frontend web app that shows on the wall-mounted Dev Center screens whether or not important managers are in the office, busy or available.

#### November: <small>Week 32</small>

- Participated in team development on an internal project focused on extracting data from git repositories and showing the activity of the development team in an easy to read at-a-glance format, using a polyglot microservice backend architecture, and an AngularJS frontend.
- Began the on-boarding process to help development on a project management organization application that would transform the existing workflow with a modern and robust interface, primarily based on a Spring Boot microservice backend architecture, and an Angular frontend.

#### October: <small>Week 28</small>

- Developed an extension to a previous project that would significantly enhance audit logging in the web application leveraging AspectJ to perform unobtrusive uniform capture of per user data &mdash; user keys, usernames, permission templates, inherited roles, etc., Filebeat and Logstash for moving log data and processing transformations and Elastic Search for dynamically handling user action queries on the audit dataset.
- Attended my second business unit meeting, and I was given an award.

#### September: <small>Week 23</small>

- Worked on a 5 week engagement adding new functionality within the constraints of an existing legacy web based application built with Google Web Toolkit, IBM DB2 and Spring 3.
- Attended the University of Minnesota CSE Job Fair to recruit soon-to-graduate students.

#### August: <small>Week 21</small>

- Nearing the end of a 15 sprint engagement spanning over the last few months, finished building various major features with the help of a great team, primarily with customized Spring Security implementations...
  - including sponsored users with inherited permissions.
  - dynamically switching between sets of application defined permissions.
  - dynamically generated forms for customizable authorization.
  - two types of registration flow enabling automated and manual registration.
- We moved office spaces again &ndash; with the opening of the new and recently remodeled Daugherty Dev Center 2.0.
- After the mid-year review, I was promoted! From Software Engineer 1 and Associate Consultant, to **Software Engineer 2 and Consultant**!

#### July: <small>Week 14</small>

- Built various command line utilities for the team using `npm`, `gulp`, `browserify`, `sass` and more, to compile the growing dependencies needed to build a Knockout.js based client side application, and made reusable Knockout.js components.
- Based on the outdated preconfigured virtual machine a previous team member created, I created an up-to-date Xubuntu 16.04 virtual machine image preloaded with our development stack: IntelliJ Community, MySQL, Java and more.
- Over the last few weeks, I acted as the leader of the *Accelerator 2.0* program &mdash; the training program Daugherty uses to on-board new hires, hosting an example project for a great group of three recent college graduates that was essentially a Twitter clone, using the a common stack, Java, Spring, MySQL and Knockout.

#### Late May: <small>Week 9</small>

- I worked on a backend service layer for the foundation of an Account Management RESTful API.
- In conjunction with the backend layer, I created components of the client side consuming application written in Knockout.js.

#### Early May: <small>Week 5</small>

- Daugherty had their bi-annual business unit meeting with Daugherty founder, Ron Daugherty, speaking.
- I have left my Kitchen quarters, and now work in a team of now 12 on a greenfield project established in January.

#### March 28th, 2016: <small>Week 1</small>

- Daugherty's recruiter team found me at the UMN CSE Career Fair, allegedly &mdash; though I have no recollection of that event.
- I went through three interviews, one on UMN campus with a Daugherty recruiter, and two in person at the office, first with a regular software engineer, a manager and another recruiter, and the second with a senior application architect.
- I am consultant &numero; 101 at this branch.
- I work in the Kitchen.
- Here are some photos from my [first week at Daugherty](https://goo.gl/photos/XHFAkCFaUq9wGX7B6).

---

##### Two final notes:

1. If you have an interest in Daugherty, let me know. Apparently, you can get a referral, and we all win.
2. So we are all clear, all thoughts are my own, especially the good thoughts, and do not represent Daugherty.
