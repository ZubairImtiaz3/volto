export const controlPanelsIcons: {
    default: string;
    'dexterity-types': string;
    'date-and-time': string;
    language: string;
    mail: string;
    navigation: string;
    site: string;
    search: string;
    socialmedia: string;
    editing: string;
    imaging: string;
    markup: string;
    'moderate-comments': string;
    security: string;
    users: string;
    groups: string;
    addons: string;
    rules: string;
    undo: string;
    aliases: string;
    relations: string;
};
export function filterControlPanels(controlpanels?: any[]): any[];
export namespace unwantedControlPanelsFields {
    let language: string[];
    let search: string[];
    let site: string[];
    let editing: string[];
    let imaging: string[];
    let navigation: string[];
}
export function filterControlPanelsSchema(controlpanel: any): any;
