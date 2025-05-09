export {};

declare module 'obsidian' {
    /**
     * A slider component.
     */
    interface SliderComponent extends ValueComponent<number> {
        /**
         * The HTML element that represents the slider.
         *
         * @official
         */
        sliderEl: HTMLInputElement;

        /**
         * The function that's called after changing the value of the component.
         *
         * @remark Using `SliderComponent.onChange(callback)` assigns the callback to this method.
         * @unofficial
         */
        changeCallback?(value: number): void;

        /**
         * Create a new slider component.
         *
         * @param containerEl - The container element.
         * @official
         * @deprecated - Added only for typing purposes. Use {@link constructor} instead.
         */
        constructor__(containerEl: HTMLElement): this;

        /**
         * Get the value of the slider.
         *
         * @returns The value of the slider.
         * @official
         */
        getValue(): number;

        /**
         * Get the pretty value of the slider.
         *
         * @returns The pretty value of the slider.
         * @official
         */
        getValuePretty(): string;

        /**
         * Set the callback to be called when the slider value changes.
         *
         * @param callback - The callback to be called when the slider value changes.
         * @returns The slider.
         * @example
         * ```ts
         * slider.onChange((value) => {
         *     console.log(value);
         * });
         * ```
         * @official
         */
        onChange(callback: (value: number) => any): this;

        /**
         * Disable the slider.
         *
         * @param disabled - Whether to disable the slider.
         * @returns The slider.
         * @example
         * ```ts
         * slider.setDisabled(true);
         * ```
         * @official
         */
        setDisabled(disabled: boolean): this;

        /**
         * Set the dynamic tooltip of the slider.
         *
         * @returns The slider.
         * @official
         */
        setDynamicTooltip(): this;

        /**
         * Set whether or not the value should get updated while the slider is dragging.
         *
         * @param instant - Whether or not the value should get updated while the slider is dragging.
         * @returns The slider.
         * @example
         * ```ts
         * slider.setInstant(true);
         * ```
         * @official
         */
        setInstant(instant: boolean): this;

        /**
         * Set the limits of the slider.
         *
         * @param min - The minimum value.
         * @param max - The maximum value.
         * @param step - The step value.
         * @returns The slider.
         * @example
         * ```ts
         * slider.setLimits(0, 100, 1);
         * ```
         * @official
         */
        setLimits(min: number, max: number, step: number | 'any'): this;

        /**
         * Set the value of the slider.
         *
         * @param value - The value to set.
         * @returns The slider.
         * @example
         * ```ts
         * slider.setValue(50);
         * ```
         * @official
         */
        setValue(value: number): this;

        /**
         * Show the tooltip of the slider.
         *
         * @official
         */
        showTooltip(): void;
    }
}
