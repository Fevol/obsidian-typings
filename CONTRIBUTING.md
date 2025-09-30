# Introduction

## General Notes

Feel free to start typing any part of the Obsidian API that is not yet typed, or fixing/adding additional descriptions to existing typings.
If you are unsure about anything, don't hesitate to open an issue.

> [!WARNING]
>
> Please base your PR on the [branch](./README.md#git-branching) matching the Obsidian versions you confirmed your changes are valid.

## Conventional Commits

The project is using [Conventional Commits](https://www.conventionalcommits.org/). All commit messages are validated to follow the conventions.

To get interactive prompt to simplify creating such commits, use `npm run commit` command.

### TSDoc

Please use [TSDoc](https://tsdoc.org/) to document the typings. This will allow the documentation to be automatically generated
within your IDE, and can help with the discoverability of the typings.

Example:

```ts
interface someObject {
    /**
     * Does something specific.
     *
     * @param val1 - Enables some functionality
     *
     * @tutorial - Useful for implementing some features for your plugin
     * @remark Prefer using {@link someOtherMethod} instead
     */
    someMethod(val1: boolean): number;
}
```

> [!NOTE]
> `@remark` --- Alternatives that should be used instead, or warnings about the function.
>
> `@tutorial` --- Short description on how the function could be used in your plugin.
>
> `@deprecated` --- Method is deprecated in a particular version (can't be found in `app.js` anymore).

# Tutorial

## Adding new typings

### Finding/Discovering new typings

The first step to add new typings, is finding the object/interface/module you want to add typings for within the Obsidian app.
One of the easiest way to do this, is to open the Obsidian DevTools Console (`Ctrl + Shift + I`), and start searching for the interface you wish to
type from the `app.` object.

If you want to, for example, add typings for the `InternalPlugins` object, you can type `app.internalPlugins` into the console,
which will produce the following output:

![docs/src/assets/prototype-reference.png](docs/src/assets/prototype-reference.png)

Note how the internalPlugins object contains multiple prototypes: the `InternalPlugins` interface itself, but also
the `Events` class and then the `Object` literal (does not need to be typed). This can be determined this by looking at the other definitions in the (un)official API,
and checking whether the two objects define the same properties.

Thus, to define `InternalPlugin`, you can start by adding each of the methods and properties to a `InternalPlugins` interface:

```ts
interface InternalPlugins extends Events {
    // Variables
    app: App;
    config: Record<unknown, unknown>;
    migration: unknown;
    plugins: Record<unknown, unknown>;

    // Methods
    requestSaveConfig(): unknown;
    enable(): unknown;
    getEnabledPluginById(var1: unknown): unknown;
    getEnabledPlugins(): unknown;
    // ...
}
```

To keep it simple, we first add `unknown` as type to every variable and method -- unless it is obvious what the type should be
(i.e. `app` will always be an instance of `App`).

Next up, is the most tedious part of adding typings: finding the correct types for each of the methods and variables.

### `generateTypes` helper

We built a helper to simplify discoverability process. The generated types contain all the properties and functions that could be reached from the provided objects.

Most of types, especially for function parameters would be marked as `unknown`, so you would still have to reverse engineer the logic to replace `unknown` with something meaningful, but it's a good starting point.

The only prerequisite to use the helper is to have the [CodeScript Toolkit](https://obsidian.md/plugins?id=fix-require-modules) plugin installed.

The following code loads the helper into the console:

```js
generateTypes = (await requireAsync('https://raw.githubusercontent.com/Fevol/obsidian-typings/refs/heads/main/tools/generateTypes.ts', { moduleType: 'jsTs' })).generateTypes;
```

Now you can use the helper to generate the types:

```js
// Print to the console
console.log(generateTypes(app.internalPlugins));

// Copy to the clipboard
copy(generateTypes(app.internalPlugins));
```

The signature of this helper function:

```ts
function generateTypes(obj: unknown, options: Partial<GenerateTypesOptions> = {}): string;

interface GenerateTypesOptions {
    maxDepth: number; // default: 1
    obsidianTypesTraverseDepth: number; // default: 0
    pathsToSkip: string[]; // default: []
}
```

### Typing variables

The easiest way to start, is by tackling the variables first. For example, in the console output, you can see that `config`
is mapping a string to `true`. In this case, it would be safe to assume that the type of `config` is `Record<string, boolean>`.

```ts
interface InternalPlugins extends Events {
    // ...
    config: Record<string, boolean>;
    // ...
}
```

However, you can take this one step further still by considering the fact that each string is essentially a different plugin ID.
In this case, we might just define a new type that contains all the plugin IDs, and use this as the key for the `config` object:

```ts
type InternalPluginName =
    | 'audio-recorder'
    | 'backlink'
    | 'bookmarks'
    | 'canvas' /*| ... */;
interface InternalPlugins extends Events {
    // ...
    config: Record<InternalPluginName, boolean>;
    // ...
}
```

Similarly, you can define the `plugins` variable as `Record<InternalPluginName, unknown>`.

Further, it is safe to assume that each element in `Plugins` would be some instance of a `InternalPlugin` class, so we
will also need to add a new interface for this:

```ts
interface InternalPlugin {
    app: App;
    commands: unknown;
    // etc. (repeat the same procedure)
}

interface InternalPlugins extends Events {
    // ...
    plugins: Record<InternalPluginName, InternalPlugin>;
    // ...
}
```

Make sure to also add brief descriptions (using [TSDoc](https://tsdoc.org/)) to each of the variables.

Feel free to copy descriptions from previous typings, or from the official API.

### Typing methods

Typing methods is a bit more difficult, as aside you will need to know what the method does, and what the expected input and output is.

You could start by typing the methods that do not take any arguments, and have a simple return type. For example, the `requestSaveConfig` method.
From the name, we can already make the assumption that this method will probably _not_ return anything, as it is just telling
the app that a config should be saved, the method will thus _likely_ be of type `void`.

However, to make sure whether this assumption is correct, you _**should**_ check the source code (see next section).
If possible, you can also run the method in the console, and see what happens (in this case, nothing happens, so it is likely just `void`).

As before, if you are not certain about the return type or the workings of the function in general, mark the return type as `unknown`.

```ts
interface InternalPlugins extends Events {
    // ...
    /**
     * Request save of plugin configs
     */
    requestSaveConfig(): unknown;
    // ...
}
```

Next up, are methods that take arguments. For example, the `getEnabledPluginById` method takes a single argument.
It is very likely that this argument will just be of type `InternalPluginName`, but again, you could easily verify this by
running the method in the console (i.e. `app.internalPlugins.getEnabledPluginById('audio-recorder')` and `app.internalPlugins.getEnabledPluginById('wrong-id')`).

```ts
interface InternalPlugins extends Events {
    // ...
    /**
     * Get an internal plugin by ID
     *
     * @param id - ID of the plugin to get
     * @returns Plugin instance
     */
    getEnabledPluginById(id: InternalPluginName): InternalPlugin;
    // ...
}
```

## Traversing and analyzing the source code

Finally, this is both the most tedious but also the most important technique: finding the definition of the method in the minified source code.

Start off by going back to the console, and going into the `Sources` tab. Here you will find the `app.js` file where
all the internal methods are defined.

1. Go to the `Sources` tab
2. Select the `app.js` file
3. `Pretty format` the code (optional)
4. Copy the code to your IDE of choice (optional, but recommended)

![docs/src/assets/accessing-main.png](docs/src/assets/accessing-main.png)

With access to the minified code, you can now start searching through it and find the definition of the method you are trying to type.

For any method "XYZ", start by just searching for "XYZ". Generally, the method is defined as either:

-   `t.XYZ = ...` (for static methods)
-   `t.prototype.XYZ = ...` (for prototype methods)
-   `function XYZ(` (for internal/minified methods)

At this stage, you might get lucky and get a single definition, or you may get multiple definitions of the method.
In the latter case,
you will need try to look at the context of the code to determine which interface/class the method belongs to.
The main tip for finding the correct definition, is to look at the other methods being defined on the prototype,
and check if these match with the other methods of your object.

With the correct line found for the definition, you can now start analyzing the code to determine the input/output types
and its behavior.

For example, the `requestSaveConfig` method (seen earlier) is defined as follows:

```js
n.requestSaveConfig = at(n.saveConfig.bind(n), 1e3, !0),
```

Here, we find the following three things:

-   `at` is a minified function that takes three arguments, and its return value is the return value of the method
-   `1e3` is shorthand notation for `1000`
-   `!0` is shorthand notation for `true`

(There are many shorthands and structural changes that you will need to get used to in the minified code)

Since we don't know what `at` does, we need to start searching through the code again. Make sure to enable caps + whole word search, as `at` is a very common word.
Start by searching for `function at`, or `.prototype.at`. With any luck, this will lead you to the following definition:

```js
function at(e, t, n) {
    void 0 === t && (t = 0), void 0 === n && (n = !1);
    var i,
        r = null,
        o = null,
        a = null,
        s = 0,
        l = function () {
            var t = o,
                n = a;
            /*   ...    */
        };
}
```

You may want to pass the code through your favorite flavour of LLM or de-minifier to make the code at least somewhat understandable.
Depending on whether you manage to decipher the code, you can now explicitly define the behavior and/or types of the method.

### Async functions

Reverse engineering the async functions is more challenging.

In the `app.js`, you won't see many `async` functions. Most of them are converted to the equivalent state machine code.

- If your function has `v(this, void 0,`, it's an async function.
- If your function has `return [2]`, your function doesn't return anything and the return type of your function will be `Promise<void>`.
- If your function has `return [2, someValue]`, your function returns `someValue` and the return type of your function will be `Promise<TypeOfSomeValue>`.
- If your function has `return [4, someValue]`, it corresponds to `await someValue` and the awaited value is later retrieved as `n.sent()`.

For more details how exactly it works, see [The `__generator` helper](https://github.com/microsoft/tslib/blob/main/docs/generator.md) documentation.

### Class hierarchies

Detecting class hierarchies is a bit tricky.

#### Static analysis

In the `app.js` code, the pattern looks like:

```js
childClass = (function (e) {
    function t(constructorArg1, constructorArg2, ..., constructorArgN) {
        var n = e.call(this, baseConstructorArg1, baseConstructorArg2, ..., baseConstructorArgN) || this;
        return (
            n.childClassVariable = 'value1',
            n.parentClassVariable = 'value2',
            // some initialization logic
            n
        );
    }
    return (
        f(t, e), // that's the part that corresponds to `class childClass extends parentClass`
        (t.prototype.childClassMethod = function (childClassMethodArg1, childClassMethodArg2, ..., childClassMethodArgN) {
            e.prototype.parentClassMethod.call(this, parentClassMethodArg1, parentClassMethodArg2, ..., parentClassMethodArgN);
            // some logic
        }),
        //... other methods
        t
    );
})(parentClass)
```

Which translates to the following code:

```ts
class childClass extends parentClass {
    constructor(constructorArg1, constructorArg2, ..., constructorArgN) {
        super(baseConstructorArg1, baseConstructorArg2, ..., baseConstructorArgN);
        this.childClassVariable = 'value1';
        this.parentClassVariable = 'value2';
        // some initialization logic
    }

    childClassMethod(childClassMethodArg1, childClassMethodArg2, ..., childClassMethodArgN) {
        super.parentClassMethod(parentClassMethodArg1, parentClassMethodArg2, ..., parentClassMethodArgN);
        // some logic
    }

    //... other methods
}
```

Decrypted names of some public classes (or other variables) can also be found in the `app.js` file.

```js
AbstractInputSuggest: () => aF,
AbstractTextComponent: () => MO,
...
```

#### Runtime analysis

If you have an instance `obj` of an unknown class and you want to understand its class hierarchy, you can use

```js
const objClass = obj.constructor;

const objProto = Object.getPrototypeOf(obj);
// or
const objProto = obj.__proto__;
// or
const objProto = objClass.prototype;

const parentClass = Object.getPrototypeOf(objProto).constructor;

// obj1 = new class1();
const isObj1ADirectInstanceOfClass1 = obj1.constructor === class1;

// class class1 extends class2 {}
const doesClass1DirectlyExtendClass2 = Object.getPrototypeOf(class1) === class2;

// obj = new class1();
// class class1 extends class2 {}
// class class2 extends class3 {}
// class class3 extends class4 {}
const isObjAnIndirectInstanceOfClass4 = obj instanceof class4;
const doesClass1IndirectlyExtendClass4 = class4.prototype.isPrototypeOf(class1.prototype);
```

Also you can use [`generateTypes(obj)`](#generatetypes-helper) helper to get the entire definition of of the object `obj` including its class hierarchy.
