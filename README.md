<snippet>
  <content><![CDATA[
# Personal API
Personal directory about photographers and photographs I enjoy.
https://stormy-ridge-70033.herokuapp.com/

## Usage
Presenting a list of endpoints for photographers data and photographs data.
{method: "GET", path: "/api", description: "Describes all available endpoints"},
{method: "GET", path: "/api/profile", description: "Display data about me"},
{method: "GET", path: "/api/photographers-list", description: "Display all photographers in photographers-list"},
{method: "GET", path: "/api/photographers-list/:id", description: "Display a single photographer in photographers-list"},
{method: "POST", path: "/api/photographers-list", description: "Create a new photographer in photographers-list"},
{method: "PUT", path: "/api/photographers-list/:id", description: "Update a single photographer in photographers-list"},
{method: "DELETE", path: "/api/photographers-list/:id", description: "Delete a single photographer in photographers-list"},
{method: "GET", path: "/api/photos-list", description: "Display all photos in photos-list"},
{method: "GET", path: "/api/photos-list/:id", description: "Display a single photo in photos-list"},
{method: "POST", path: "/api/photos-list", description: "Create a new photo in photos-list"},
{method: "PUT", path: "/api/photos-list/:id", description: "Update a single photo in photos-list"},
{method: "DELETE", path: "/api/photos-list/:id", description: "Delete a single photo in photos-list"}

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits
Yasuyoshi Sakamoto
## License

]]></content>
  <tabTrigger>readme</tabTrigger>
</snippet>
