# Portfolio Template

This is a Jekyll website template designed for Pre Fellowship Fellows. During the Pre Fellowship, you'll build a project

[![Netlify Status](https://api.netlify.com/api/v1/badges/97877b3e-9f36-4939-a24c-0b622f923d50/deploy-status)](https://app.netlify.com/sites/mlh-fellowship-portfolio/deploys)


## Make your own!

1. Use the Template button.
2. Update `_config.yml` to contain your information.
    1. Change `url` to the URL you'll be hosting it at
    2. Make sure it has the /
3. Use something like Netlify or GitHub Pages to deploy (note, this only works on username.github.io, not username.github.io/repo-name)

## Add your portfolio

Head to `_data` and fill out either `projects.yml`, `experience.yml` and `education.yml`.

Project example.
```yaml
- title: Machine Learning Project
  event: MLH Fellowship Pre Fellowship - Batch 3.5
  date: Fall 2020
```

Experience example.
```yaml
- role: Pre Fellowship Fellow
  company: MLH Fellowship
  dates: Summer 2021
  logo: fellowship.svg
```

Education example.
```yaml
- course: Pre Fellowship Fellow
  institute: MLH Fellowship
  dates: Summer 2021
  logo: fellowship.svg
```
## Add project posts

1. Make a new `.md` file inside of `projects`.
2. Add the header to your markdown file (see below) and change the title to the name of your blog post.
3. Write your project page! Can be a README from GitHub or your Devpost page.
4. Add the `page-name` field to your `projects.yml` (see below).

Top of post markdown file post.
```
---
title: Project
layout: page
---
```

`projects.yml` with the `page-name` field.

```yaml
- title: Machine Learning Project
  event: MLH Fellowship Pre Fellowship - Batch 3.5
  date: Summer 2021
  page-name: project
```

## Add contact form email
1. Create a formspree account here: https://formspree.io/register 
2. A verfication mail will be sent to the registered email id. Complete verification before the following steps.
3. Click on the new project button and then add new form in the project by providing an appropriate name and a valid email id on which you want to be contacted.
4. After the form is created, the form's endpoint can be accessed in the `Integeration` tab. The endpoint would look like : https://formspree.io/f/yadayada
5. Copy the endpoint url and add it to the `form_url` in `_config.yml` file. Example : `form_url: "https://formspree.io/f/yadayada"`
6. All the submissions will be visible on the `Submissions` tab. An email will also be sent by default. If you don't see a submission email, you can switch to the `Settings` tab and make sure the `Email Notifications` toggle is on.

## Add Google Analytics

1. Create a Google account if you don't have one

2. Sign in to your [Analytics account](https://analytics.google.com/)

3. Click Admin

4. Select an account from the menu in the *ACCOUNT* column.

5. Select a property from the menu in the *PROPERTY* column.

6. Under *PROPERTY*, click *Tracking Info* -> *Tracking Code*. Your Tracking ID will be displayed at the top of the page

7. Inside `_config.yml` file, simply enter your tracking id under `google-analytics` field.

If you get stuck in any of these steps, refer [here](https://support.google.com/analytics/answer/1008080).

## Add links to your social medias 

Head to `_data` and fill out either `social_media.yml`. Here is an example for your reference: 

```yaml
- link: tel:+19876543210
  class: fas fa-phone-square-alt

- link: mailto:fellowship@mlh.io
  class: fas fa-envelope

- link: https://twitter.com/
  class: fab fa-twitter-square

- link: https://linkedin.com/
  class: fab fa-linkedin

- link: https://github.com/MLH-Fellowship
  class: fab fa-github
```

Replace the links with your respective social media links in the following order: 

1. Phone Number
2. Mail
3. Twitter
4. LinkedIn
5. GitHub

Note - Please do not change anything in the `class` field. 

## Development

If you want to test it locally or add some new features, run the below commands. Make sure to have Ruby and Bundler installed.

```
bundle install --path vendor/bundle
bundle exec jekyll serve
```
