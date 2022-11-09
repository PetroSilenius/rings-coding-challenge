# 2 hour coding challenge with [ringsdb.com](https://ringsdb.com/) API

This is my submission for a 2 hour coding challenge. The time was tracked by Google Search timer https://www.google.com/search?q=2+hour+timer. I started the timer after reading through the challenge description, opening up the API docs and setting up the mui/next.js template. This means that time tracking started when making the "Initial commit" and ended on pushing the "Set up test environment and create simple test for DeckSearch" commit. I did not include writing the README and setting up Vercel hosting in the time limit.

## The challenge

Familiarize yourself with API documentation at https://ringsdb.com and create a React app in
which:

- The user can fetch decks from the API one at a time with the deck's id.
- After fetching the deck, present all hero cards from the deck.
- When a user clicks on a card, the user can see the detailed information of the card.
- In the detailed information view, create a modernized version for the card that is
  constructed with HTML elements and uses css to place the values and text content
  of the card similarly to the picture of the card.

Use TypeScript for coding. You can use other libraries you'd prefer and styling can also be
done by your preference. We hope that you try to show us your quality standards in the
submission.

Base the implementation on this Wireframe
![Wireframe of the application](/challenge-wireframe.png)

## My thoughts on the final result

I was pretty happy with the final result in such a limited time. The implementation got to the level I was looking for and I had 15 minutes to start setting up the test environment. Unfortunately I didn't immediately remember about [the quick setup by Next.js](https://nextjs.org/docs/testing#jest-and-react-testing-library) and spent some minutes manually setting up jest and react-testing-library.

I would have liked to spend some more time on figuring a good way to fetch all the available decks and show them on the index page. Quick glance on the API didn't help in finging an API route for the purpose and the id range was a quite random one starting from 1 and ending in 33207.

I started the project from a template that I'm pretty familiar one at https://github.com/mui/material-ui/tree/master/examples/nextjs-with-typescript. Next.js made sense for the data fetching and ended going with SSR but ISR could have been also an option if the visitor amounts on the page would be large.

## What I would have done with an extra hour

- Finish up on the DeckSearch test case and add a few more for example for opening the modal
- Add a search button as pressing enter isn't really clear for most users
- Add hero action description to the modal cards with `dangerouslySetInnerHTML`
- Change the search field from a text input into a Autocomplete with all valid ids as options
- Configure linting with `next lint`
- Set up a Github workflow for running test and linting

## Tech stack

- Typescript
- React
- Next.js
- MUI component library
- Jest / react-testing-library for testing
