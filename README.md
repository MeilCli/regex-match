# regex-match
[![CI-Master](https://github.com/MeilCli/regex-match/actions/workflows/ci-master.yml/badge.svg)](https://github.com/MeilCli/regex-match/actions/workflows/ci-master.yml)  
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

## Contributes
[<img src="https://gist.github.com/MeilCli/151afd4975b419ceae3cff1f5754f332/raw/4c1a826137c19e67cddf8aa9c620fd3a74f9a4bc/metrics_contributors.svg">](https://github.com/MeilCli/regex-match/graphs/contributors)

### Could you want to contribute?
see [Contributing.md](./.github/CONTRIBUTING.md)

## License
[<img src="https://gist.github.com/MeilCli/151afd4975b419ceae3cff1f5754f332/raw/4c1a826137c19e67cddf8aa9c620fd3a74f9a4bc/metrics_licenses.svg">](LICENSE.txt)

### Using
- [actions/toolkit](https://github.com/actions/toolkit), published by [MIT License](https://github.com/actions/toolkit/blob/master/LICENSE.md)