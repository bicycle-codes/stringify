# stringify
![tests](https://github.com/bicycle-codes/stringify/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@bicycle-codes/stringify?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

Create a small base64-encoded string representation of an image.

## install

```sh
npm i -D @bicycle-codes/stringify
```

## use

This writes to `stdout`. Use shell redirection to write to a file, etc.

### text file

```sh
npx stringify ./my-file.jpeg > base64.txt
```

### clipboard

On macos, this will copy the output to the OS clipboard

```sh
npx stringify ./my-file.jpeg | pbcopy
```

## demonstration

See a demonstration here: [bicycle-codes.github.io/image-element/](https://bicycle-codes.github.io/image-element/).

> [!TIP]
> Throttle the internet speed in dev tools
