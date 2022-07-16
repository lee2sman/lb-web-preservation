# Litle Berlin site-rebuild

**IN-PROGRESS SUMMER 2022**

This is a recreated clone of the Little Berlin artspace (RIP) website, circa December 2021. Little Berlin was an art space in Kensington, PHiladelphia, operating out of the Berks Warehouse and later the Viking Mill building. This website was originally built and hosted on Squarespace. 

This repo is an attempt to clone the site, in order to make a simple HTML/CSS/JS build containing an approximation of the original's design and content in order to preserve it, simply and at low cost/overhead.

## To build

The original text of the Squarespace site was captured and stored as Excel files, then sanitized and parsed using node.js.

To install dependencies (csv-parser):

```
npm install
```

To build static pages from the data files:

```
node index
```

This will build new pages from the data files and store in events, members and press sub-directories.

### Info

Text content copyright their respective authors, where applicable.

Web design by Lee Tusman.

This site clone project initiated by Peter Erickson and Lee Tusman.

Thank you to all Little Berlin members past and the community that grew there.
