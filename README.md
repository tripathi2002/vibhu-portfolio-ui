# Vibhu Portfolio WordPress Theme

A custom WordPress portfolio theme developed by **Vibhu Tripathi**.
This project demonstrates a modern WordPress development workflow using **Parcel, SCSS, and modular JavaScript** with a clean project structure and version control.

---

## Project Structure

```
vibhu-portfolio-theme
│
├ src                # Development source files
│  ├ scss
│  │   └ main.scss
│  └ js
│      └ main.js
│
├ dist               # Development build output
├ assets             # Production build output
│
├ functions.php
├ style.css
├ index.php
├ package.json
└ README.md
```

### Folder Explanation

| Folder          | Purpose                                         |
| --------------- | ----------------------------------------------- |
| `src`           | Source files for SCSS and JavaScript            |
| `dist`          | Development compiled output                     |
| `assets`        | Production compiled assets                      |
| `functions.php` | WordPress asset loading and theme configuration |

---

## Requirements

* WordPress 6+
* Node.js 18+
* npm
* XAMPP / Local WordPress environment

---

## Installation

Clone the repository:

```bash
git clone https://github.com/tripathi2002/vibhu-portfolio-wordpress.git
```

Go to the theme directory:

```bash
cd wp-content/themes/vibhu-portfolio-theme
```

Install dependencies:

```bash
npm install
```

---

## Development

Run development mode:

```bash
npm run dev
```

This compiles source files from:

```
src/
```

into:

```
dist/
```

---

## Production Build

Run production build:

```bash
npm run build
```

This compiles optimized files into:

```
assets/
```

---

## Environment Configuration

The environment is controlled using a constant in `wp-config.php`.

Example:

```php
define('WP_ENV', 'development');
```

Options:

| Environment | Assets Loaded |
| ----------- | ------------- |
| development | `dist`        |
| production  | `assets`      |

This avoids modifying `functions.php` when switching environments.

---

## Technologies Used

* WordPress
* PHP
* SCSS
* JavaScript
* Parcel Bundler
* Node.js
* Git & GitHub

---

## Features

* Custom WordPress theme
* Modern asset pipeline
* SCSS architecture
* Modular JavaScript
* Environment-based asset loading
* Clean Git workflow

---

## Author

**Vibhu Tripathi**
Full Stack Developer

Portfolio: https://vibhu.pro
GitHub: https://github.com/tripathi2002

---

## License

This project is licensed under the MIT License.


## Recommended SCSS Structure (7-1 Pattern)
src
└ scss
   │
   ├ abstracts
   │   ├ _variables.scss
   │   ├ _mixins.scss
   │   └ _functions.scss
   │
   ├ base
   │   ├ _reset.scss
   │   ├ _typography.scss
   │   └ _global.scss
   │
   ├ components
   │   ├ _buttons.scss
   │   ├ _cards.scss
   │   └ _navbar.scss
   │
   ├ layout
   │   ├ _header.scss
   │   ├ _footer.scss
   │   └ _grid.scss
   │
   ├ pages
   │   ├ _home.scss
   │   └ _contact.scss
   │
   ├ themes
   │   └ _default.scss
   │
   ├ vendors
   │   └ _normalize.scss
   │
   └ main.scss