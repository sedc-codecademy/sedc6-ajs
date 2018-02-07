# Part the first

## Title sort
From the books data, generate a file that will contain the title of all the books, sorted by title length

## Author uniqueness
From the books data, generate a file that will contain the authors of all the books. The author names must not repeat, i.e. if an author has written more than one book, he should appear only once in the result.

## Author aggregate
From the books data, generate a file that will contain data about the authors of all the books. The author names must not repeat, i.e. if an author has written more than one book, he should appear only once in the result. Each author should be represented with an object with `name` and `books` properties. The `books` property should contain the number of books the author has written, i.e. for author Kim Stanley Robinson, the data should be
```json
{
    "name" : "Kim Stanley Robinson",
    "books" : 5
}
```

# Part the second

## In the book site, implement sorting and filtering at the same time
When clicking sort by author or title, the search term should be respected.
When clicking find, the sort order should be preserved.

## In the book site, implement paging.
There should be a previous button page (if applicable)
There should be a next button page (if applicable)
The API should handle invalid paging input (0, -1, 2000, lizard)
The paging should be consistent with the filtering and sorting

## (Bonus) Implement adding books

