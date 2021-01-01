# regex-match
regex match action

## Input
- `regex_pattern`
  - required
  - search regex pattern
- `regex_option`
  - search regex option
- `search_string`
  - required
  - searched string

## Output
- `matched`
  - `true` or `false`
- `matched_first`
  - matched first string
- `matched_json`
  - matched result json
  - attension: will not inculde index property
- `matched_has_index`
  - has provided `matched_index`
  - `true`, `false` or unset
- `matched_index`
  - matched index

## Contributing
see [Contributing.md](./.github/CONTRIBUTING.md)

## License
MIT License

### Using
- [actions/toolkit](https://github.com/actions/toolkit), published by [MIT License](https://github.com/actions/toolkit/blob/master/LICENSE.md)