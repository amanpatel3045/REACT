This hook returns the location object used by the react-router.
This object represents the current URL and is immutable. 
Whenever the URL changes, the useLocation() hook returns a newly updated location object.
Some of its use includes extracting the query parameters from the URL and doing something depending on the query parameters.
The “search” property of the location object returns a string containing the query part of the URL.
