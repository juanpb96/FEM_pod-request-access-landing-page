# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects!

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

Desktop view

![Solution preview](./assets/Screenshot_Pod-request-access-landing-page.png)

### Links

- Solution URL: [Click here](https://www.frontendmentor.io/solutions/mobilefirst-site-html5-scss-flexbox-and-js-3l9TzcyqB)
- Live Site URL: [See live site here](https://juanbonilla.me/FEM_pod-request-access-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS / SCSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

This project has little HTML code but SCSS has the biggest responsability. I wanted to reduce the amount of lines, so I started using the `font` shorthand property:

```scss
// Instead of:
p {
  font-family: $primary-font;
  font-size: 0.9375rem; 
  font-weight: 300;
  line-height: 1.5625rem; 
  color: $light-grey;
  text-align: center;
}

// I wrote this:
p {
  color: $light-grey;
  font: 300 0.9375rem/1.5625rem $primary-font;
  text-align: center;
}
```

### Continued development

I want to explore new ways of writing CSS and always use best practices. I consider I have a long way to cover in CSS but the most important in which I will focus is on the layout.

### Useful resources

- [CSS Multiple Backgrounds](https://www.w3schools.com/css/css3_backgrounds.asp) - This helped me to implement two background images in my solution. I wanted to position them differently, so this info was really useful.

## Author

- Website - [juanbonilla.me](https://juanbonilla.me)
- Frontend Mentor - [@juanpb96](https://www.frontendmentor.io/profile/juanpb96)
- LinkedIn - [Juan Bonilla](https://www.linkedin.com/in/juan-pablo-bonilla-6b8730115/)