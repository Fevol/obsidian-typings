<center>

# Obsidian Extended Typings

</center>

---

<div align="center">
    <a href="https://www.npmjs.com/package/obsidian-typings" style="text-decoration: none">
        <img alt="NPM downloads" src="https://img.shields.io/npm/v/obsidian-typings?color=red&label=Version%3A&logo=npm&logoColor=white&labelColor=red">
    </a>
    <a href="https://www.npmjs.com/package/obsidian-typings" style="text-decoration: none">
        <img alt="NPM downloads" src="https://img.shields.io/npm/dw/obsidian-typings?style=flat&label=Downloads">
    </a>
    <a href="https://github.com/Fevol/obsidian-typings/stargazers" style="text-decoration: none">
        <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/fevol/obsidian-typings?color=yellow&label=Stargazers%3A&logo=OpenTelemetry&logoColor=yellow">
    </a><br>
    <a href="https://www.typescriptlang.org/" style="text-decoration: none">
        <img alt="Typescript" src="https://img.shields.io/badge/-Typescript-3178C6?logo=Typescript&logoColor=white&style=flat&">
    </a>
</div>

---

<div align="center">
<h4>
 <a href="https://github.com/Fevol/obsidian-typings/blob/main/CHANGELOG.md">CHANGELOG</a>
 <span>&nbsp;·&nbsp;</span>
 <a href="https://www.npmjs.com/package/obsidian-typings">NPM</a>
 <span>&nbsp;·&nbsp;</span>
 <a href="https://github.com/Fevol/obsidian-typings/blob/main/CONTRIBUTING.md">CONTRIBUTING</a>

</h4>
</div>

---

This repository contains TypeScript typings for undocumented [Obsidian](https://obsidian.md/) API functions and variables and additional descriptions, essentially extending the official [Obsidian API](https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts).

Be aware that the typings currently only cover a subset of all methods: most of the `App` interface and its sub-interfaces are covered, but typings for views like `Graph`, `Canvas`, ... are still missing -- contributions for these would be very welcome!

## Installation

There are several options for installing this package:

1. **Explicit type importing** 

    Explicitly add `import "obsidian-typings";` in any project file.

    _Install via_: `npm install --save-dev obsidian-typings`


2. **Add extended typings as submodule**

    Your IDE will likely pick up the typings automatically when the project is added as a submodule for your plugin, this also makes it simpler to test and submit features to the repository.

    _Install via_: `git submodule add https://github.com/Fevol/obsidian-typings.git typings` (or any other folder)


3. **Add `types` setting to `tsconfig.json`** (recommended) <span id="add-types-setting-to-tsconfig-json"></span>

    If you prefer to have original NPM package name `obsidian-typings` but don't want to explicitly import its types to your source codes, you could add in your `tsconfig.json`:

    ```json
    {
        "compilerOptions": {
            ...
            "types": [
                "obsidian-typings"
            ]
        }
    }
    ```

> [!WARNING]
>
> If your `tsconfig.json` did not specify `types` setting before, and you add it, your automatic discovery of `@types/some-package-name` will stop working and you might need to add:
> ```json
> {
>     "compilerOptions": {
>         ...
>         "types": [
>             "obsidian-typings",
>             "some-package-name"
>         ]
>     }
> }


4. **Using `obsidian-typings/implementations`** <span id="using-obsidian-typings-implementations"></span>

    There are cases when `import { X } from "obsidian-typings/implementations";` doesn't work out of the box, e.g., if you have `"moduleResolution": "Node"` or `"Node10"` in your `tsconfig.json`

    To solve it, add to `tsconfig.json`:

    ```json
    {
        "compilerOptions": {
            ...
            "paths": {
                "obsidian-typings/implementations": [
                    "./node_modules/obsidian-typings/dist/implementations.d.ts",
                    "./node_modules/obsidian-typings/dist/implementations.cjs"
                ]
            }
        }
    }
    ```

## Usage

### `obsidian` module internals

To access the types from the `obsidian` module, the module import syntax doesn't change, but now you can access its internal definitions using:

```ts
import { App } from "obsidian";

function printInternalPlugins(app: App): void {
  console.log(app.internalPlugins);
}
```

### `obsidian-typings` additional interfaces

You can access the additional interfaces added by this package using:

```ts
import { InternalPlugins } from "obsidian-typings";

const internalPlugins: InternalPlugins = this.app.internalPlugins;
```

### `obsidian-typings/implementations`

You can access additional implementations added by this package that you can use in runtime using:

```ts
import { InternalPluginName } from "obsidian-typings/implementations";

this.app.internalPlugins.getEnabledPluginById(InternalPluginName.FileExplorer);
```

### Extend with your own typings

If you need to extend the typings provided by this package, add to any `.d.ts` file in your project:

```ts
export {};

declare module "obsidian-typings" {
  interface PluginsPluginsRecord {
    myPlugin: MyPlugin;
  }
}
```

## Disclaimer

> [!WARNING]
>
> Make sure to read below section in detail before using these typings.

Please be aware that there is a good reason why (some of) the functions and types defined here are not included with the official API definitions:

-   The methods are not fully defined, and will be changed or removed in the near-future
-   There is a high risk of the code behaving unexpectedly if used improperly
-   The function was never meant to be used

Please use the functions and variables provided with caution. Be prepared to update your code if the API changes, and only use the functions if you are confident that you understand what they will do. Reference the [official API](https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts) first to see if your problem may be solved with a documented function, or search in the #plugin-dev channel of the Obsidian Discord server. Some functions will also contain `@remark` TSDoc tags that provide alternatives or better solutions.

Methods marked `@internal` are especially risky to use: these are either not fully typed yet, or are solely intended to be used internally by the Obsidian app.

Furthermore, there is a very high chance that there are mistakes in the typings, despite best efforts. All types had to be deduced from either context, manually running the function, or from the minified app code. You _**should**_ verify that the code behaves as expected, both with regard to the expected (input/output)types, as well as what the function description promises.

With these scary disclaimers out of the way, hopefully these typings will help you in removing 90% of the `@ts-ignore`s you have in your codebase, or discover solutions that didn't seem possible before.

> [!NOTE]
>
> **TL;DR:** Use at your own risk, verify that the code behaves as expected, and be prepared to update your code if the API changes.
>
> `@internal` methods are especially risky to use.
>
> `@remark` tags give some warnings about the inputs/outputs of the function, or provide better alternatives.
>
> `@tutorial` gives additional information on how to use the function in your plugin.

## Contributing

Feel free to start typing any part of the Obsidian API that is not yet typed, or fixing/adding additional descriptions to existing typings. If you are unsure about anything, don't hesitate to open an issue.

A brief tutorial is available on how you can get started with adding new typings, or fixing existing ones, see: [CONTRIBUTING.md](CONTRIBUTING.md).


## Migration

If you were using `v1` of this package, you might need to follow the [Migration guide](MIGRATION.md) after updating to `v2`.
