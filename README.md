# SwiftRoute

A simple and customizable URL Shortener written in Node js(Express JS) and Database(MySQL).

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Your SwiftRoute is a lightweight and easy-to-use tool for shortening URLs. It allows you to create short and memorable links that redirect to the original long URLs.

## Features

- Shorten long URLs to a concise and easy-to-share format.
- Customizable URL slugs for personalized short links.
- Statistics tracking for shortened URLs.
- [Add any additional features]

## Requirements

- cors
- dotenv
- express
- helmet
- mysql2
- sequelize

## Installation

1. Clone the project using `git clone ` `https://github.com/oseijoel6111/swift-route-web.git`
2. Run any JS Package manage tool, preferable `yarn install`
3. Run `yarn start`
   ```bash
   # Example command for installation
   yarn install 

# Usage
## Example commands for usage
your-url-shortener shorten https://www.example.com
your-url-shortener shorten --custom-slug my-custom-slug https://www.example.com
your-url-shortener stats short-url-code

