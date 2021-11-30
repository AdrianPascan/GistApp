# GISTER

Web application for showing gists exposed by the [GitHub Gist API](https://docs.github.com/en/rest/reference/gists). 

SPA built with Angular and using Bootstrap & Angular Material. 

### Description

The app has two routes, a main one and a secondary one.

**Main route:**
- search for gists by username;
- retrieve gists per page;
- show gists as cards;
- each gist card has 'Gist <gist_id>' as title;
- for each gist card, show plain details like description, no. of comments, etc;
- for each gist card, show the file types as tags;
- for each gist card, show the usernames of the last 3 forks users;
- for each gist card, navigate to the secondary route on click;
- switch between pages - next/prev page (if possible);
- select no. of gists per page.

**Secondary route:**
- show files as cards for a gist;
- for each file card, have filename as title and then the file content as content.

### A list of possible improvements

- styling by using more CSS and Bootstrap;
- for each gist card, divide the info into sections;
- for each gist card, show only unique file types;
- for each gist card, show the last 3 forks users as a list of usernames or username+avatar pairs;
- for each file card, add padding on file content;
- for each file card, keep the newlines of file content;
- add back button on the secondary route in order to navigate back to the main route;
- etc.
