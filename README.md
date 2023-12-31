# [Personal Portfolio](https://jamolkhon-portfolio.vercel.app/)

I'm a Linux enthusiast, so I tried creating something that will allow 'normal' people to have a glimpse at my world.

## Quick Start

### Using docker (recommended)

```bash
docker run -d --name terminal -p 3000:3000 m4tt72/terminal
```

If you want to run with custom configuration, make sure you have a copy of `config.json` then mount in the container:

```bash
docker run -d \
  --name terminal \
  -p 3000:3000 \
  -v `pwd`/config.json:/data/config.json \
  m4tt72/terminal
```

### Using npm/yarn

1. Install dependencies:

```bash
yarn install
```

2. Build the project:

```bash
yarn build
```

3. Run the server:

```bash
yarn start
```

## Configuration

Here's a sample of the `config.json` file:

```json
{
  "bioUrl": "https://raw.githubusercontent.com/m4tt72/m4tt72/master/README.md",
  "social": {
    "instagram": "m4tt72",
    "github": "m4tt72",
    "linkedin": "yassinefathi"
  },
  "theme": "gruvboxdark" // list of themes available in themes.json
}
```

## Credits
Based on M4TT72's awesome [Terminal website](https://github.com/m4tt72/terminal).