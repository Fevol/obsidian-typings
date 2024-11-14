/** @public */
export type PropertyWidgetType = {
    name: string;
    type:
        | 'aliases'
        | 'checkbox'
        | 'date'
        | 'datetime'
        | 'multitext'
        | 'number'
        | 'tags'
        | 'text'
        | string;
};
