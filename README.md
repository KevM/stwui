<img src="logo.png" align="left" width="192px" height="192px"/>
<img align="left" width="0" height="192px" hspace="10"/>

[![Under Development](https://img.shields.io/badge/under-development-orange.svg)](https://stwui.vercel.app/) [![npm version](https://img.shields.io/npm/v/stwui?logo=npm&color=cb3837)](https://www.npmjs.com/package/stwui) [![Chat](https://img.shields.io/discord/1003691521280856084?label=chat&logo=discord&color=7289da)](https://discord.gg/dPuteC7z) [![license](https://img.shields.io/badge/license-MIT-%23bada55)](https://github.com/N00nDay/stwui/blob/main/LICENSE)

Svelte-TailwindCSS UI (STWUI) is currently in pre-release. There has been a lot work already but a lot of work still needs to be done. Most of my inspiration comes from TawilwindUI with a desire to create a component library similar to React component libraries that are less reliant on remembering class names. Contributors and collaborators welcome!

<br />
<br />

A showcase can be found at [https://stwui.vercel.app/](https://stwui.vercel.app/). Documentation is still forthcoming but you can at least see the components being used.

# Installing

- Run `npm install stwui`
- Add `require('stwui/plugin')` to the `plugins` section of your `tailwind.config.cjs`
- Add `'./node_modules/stwui/**/*.{svelte,js,ts,html}'` to the `content` array of your `tailwind.config.cjs`
- Add `class` to the `darkMode` property of your `tailwind.config.cjs`

```
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/stwui/**/*.{svelte,js,ts,html}
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('stwui/plugin')
  ],
  darkMode: 'class'
};
```

# How to Contribute

- Clone the project to your local machine: ``git clone git@github.com:N00nDay/stwui.git MY-PROJECT-NAME && cd MY-PROJECT-NAME``
- Install dependancies with ``npm install``
- Start your dev server with ``npm run dev``
- Make changes, and submit your pull request.

## Useful Resources

* [Contribution Guide](https://github.com/N00nDay/stwui/tree/main/.github/CONTRIBUTING.md)
* [Code of Conduct](https://github.com/N00nDay/stwui/tree/main/.github/CODE_OF_CONDUCT.md)

## Contributors

<!-- Contributors START -->
Craig Howell N00nDay https://github.com/N00nDay
<!-- Contributors END -->

### The Components list:

- [x] Accordion
- [x] Alert
- [x] Avatar
- [x] AvatarGroup
- [x] AutoComplete
- [x] Badge
- [x] BottomNavigation
- [x] Breadcrumbs
- [x] Button
- [x] ButtonGroup
- [x] Card
- [x] Carousel
- [x] Checkbox
- [x] Chip
- [X] Col
- [x] Command Palette
- [x] Currency
- [x] DatePicker
- [x] Divider
- [x] Drawer
- [x] Dropdown
- [x] Empty
- [x] Feed
- [x] Icon
- [x] Input
- [x] Layout
- [x] LightBox
- [x] List
- [x] Media
- [x] Menu
- [x] Modal
- [x] Header
- [x] Notification
- [x] Pagination
- [x] Portal
- [x] Post
- [x] Progress
- [x] Radio
- [x] Rating
- [x] Row
- [x] Select
- [x] Sidebar
- [x] Slider
- [x] Statistic
- [x] Steps
- [x] Swap
- [x] Table
- [x] Tabs
- [x] TextArea
- [x] Timeline
- [x] Toggle

### The current Actions list:

- [x] clickOutside
- [x] tooltip

More to come!
