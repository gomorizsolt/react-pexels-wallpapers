# React Lazy Loading Images

Live demo available at https://gomorizsolt.github.io/react-pexels-wallpapers/.

## Stack
- CRA + TypeScript
- TailwindCSS
- Pexels

## Development

1. [Obtain a free API key](https://www.pexels.com/api/documentation/#authorization) from Pexels.
2. Create a `.env.development` file in the root directory.
3. Update its content according to the [example file](./.env.example).

## Deployment

To deploy the application to the provider of your choice, make sure the `REACT_APP_PEXELS_API_KEY` environment variable is exposed. Refer to the [deploy workflow file](https://github.com/gomorizsolt/react-pexels-wallpapers/blob/5f4ecb8924bca691a21f8aef7c414997d7c871f1/.github/workflows/deploy.yml#L29) for an example.

## Resources
- https://cobwwweb.com/lazy-load-images-intersection-observer-api
- https://daveceddia.com/useeffect-vs-uselayouteffect/
- https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5

## License

The project is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).