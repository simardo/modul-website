import { PluginObject } from 'vue';
import * as ComponentNames from '@ulaval/modul-components/dist/components/component-names';
import * as DirectiveNames from '@ulaval/modul-components/dist/directives/directive-names';
import { Meta } from '@ulaval/modul-components/dist/meta/meta';

// should be i18n key format
export const CATEGORY_COMUNICATION: string = 'meta:communication';
export const CATEGORY_CONTENT: string = 'meta:content';
export const CATEGORY_FORMS: string = 'meta:forms';
export const CATEGORY_INDICATORS: string = 'meta:indicators';
export const CATEGORY_NAVIGATION: string = 'meta:navigation';
export const CATEGORY_SEARCH_SORT: string = 'meta:search-sort';
export const CATEGORY_LAYOUT: string = 'meta:layout';

export class MetaAll implements PluginObject<any> {
    public install(v, options) {
        if (!options) {
            throw new Error('MetaAll.install -> you must provide a Meta object within the options argument');
        }
        const meta: Meta = options as Meta;
        meta.mergeComponentMeta(ComponentNames.ACCORDION_NAME, require('@ulaval/modul-components/dist/components/accordion/accordion.meta.json'), CATEGORY_CONTENT);
        meta.mergeComponentMeta(ComponentNames.ACCORDION_GROUP_NAME, require('@ulaval/modul-components/dist/components/accordion-group/accordion-group.meta.json'), CATEGORY_CONTENT);
        meta.mergeComponentMeta(ComponentNames.BUTTON_NAME, require('@ulaval/modul-components/dist/components/button/button.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(ComponentNames.BUTTON_GROUP_NAME, require('@ulaval/modul-components/dist/components/button-group/button-group.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(ComponentNames.LIST_ITEM_NAME, require('@ulaval/modul-components/dist/components/list-item/list-item.meta.json'), CATEGORY_CONTENT);
        meta.mergeComponentMeta(ComponentNames.CHECKBOX_NAME, require('@ulaval/modul-components/dist/components/checkbox/checkbox.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(ComponentNames.DATEPICKER_NAME, require('@ulaval/modul-components/dist/components/datepicker/datepicker.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(ComponentNames.DIALOG_NAME, require('@ulaval/modul-components/dist/components/dialog/dialog.meta.json'), CATEGORY_COMUNICATION);
        meta.mergeComponentMeta(ComponentNames.DROPDOWN_NAME, require('@ulaval/modul-components/dist/components/dropdown/dropdown.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(ComponentNames.DROPDOWN_ITEM_NAME, require('@ulaval/modul-components/dist/components/dropdown-item/dropdown-item.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(ComponentNames.DROPDOWN_GROUP_NAME, require('@ulaval/modul-components/dist/components/dropdown-group/dropdown-group.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(ComponentNames.DYNAMIC_TEMPLATE_NAME, require('@ulaval/modul-components/dist/components/dynamic-template/dynamic-template.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(ComponentNames.FLEX_TEMPLATE_NAME, require('@ulaval/modul-components/dist/components/flex-template/flex-template.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(ComponentNames.I18N_NAME, require('@ulaval/modul-components/dist/components/i18n/i18n.meta.json'));
        meta.mergeComponentMeta(ComponentNames.ICON_NAME, require('@ulaval/modul-components/dist/components/icon/icon.meta.json'), CATEGORY_INDICATORS);
        meta.mergeComponentMeta(ComponentNames.INPUT_STYLE_NAME, require('@ulaval/modul-components/dist/components/input-style/input-style.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(ComponentNames.LIMIT_TEXT_NAME, require('@ulaval/modul-components/dist/components/limit-text/limit-text.meta.json'), CATEGORY_CONTENT);
        meta.mergeComponentMeta(ComponentNames.LINK_NAME, require('@ulaval/modul-components/dist/components/link/link.meta.json'), CATEGORY_NAVIGATION);
        meta.mergeComponentMeta(ComponentNames.MESSAGE_NAME, require('@ulaval/modul-components/dist/components/message/message.meta.json'), CATEGORY_COMUNICATION);
        meta.mergeComponentMeta(ComponentNames.MODAL_NAME, require('@ulaval/modul-components/dist/components/modal/modal.meta.json'), CATEGORY_COMUNICATION);
        meta.mergeComponentMeta(ComponentNames.NAV_BAR_NAME, require('@ulaval/modul-components/dist/components/nav-bar/nav-bar.meta.json'), CATEGORY_NAVIGATION);
        meta.mergeComponentMeta(ComponentNames.NAV_BAR_ITEM_NAME, require('@ulaval/modul-components/dist/components/nav-bar-item/nav-bar-item.meta.json'), CATEGORY_NAVIGATION);
        meta.mergeComponentMeta(ComponentNames.OPTIONS_MENU_NAME, require('@ulaval/modul-components/dist/components/options-menu/options-menu.meta.json'), CATEGORY_CONTENT);
        meta.mergeComponentMeta(ComponentNames.PANEL_NAME, require('@ulaval/modul-components/dist/components/panel/panel.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(ComponentNames.POPPER_NAME, require('@ulaval/modul-components/dist/components/popper/popper.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(ComponentNames.POPUP_NAME, require('@ulaval/modul-components/dist/components/popup/popup.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(ComponentNames.RADIO_NAME, require('@ulaval/modul-components/dist/components/radio/radio.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(ComponentNames.RADIO_GROUP_NAME, require('@ulaval/modul-components/dist/components/radio-group/radio-group.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(ComponentNames.SCROLL_TOP_NAME, require('@ulaval/modul-components/dist/components/scroll-top/scroll-top.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(ComponentNames.SIDEBAR_NAME, require('@ulaval/modul-components/dist/components/sidebar/sidebar.meta.json'), CATEGORY_COMUNICATION);
        meta.mergeComponentMeta(ComponentNames.SPINNER_NAME, require('@ulaval/modul-components/dist/components/spinner/spinner.meta.json'), CATEGORY_INDICATORS);
        meta.mergeComponentMeta(ComponentNames.STATUS_NAME, require('@ulaval/modul-components/dist/components/status/status.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(ComponentNames.STEP_NAME, require('@ulaval/modul-components/dist/components/step/step.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(ComponentNames.SWITCH_NAME, require('@ulaval/modul-components/dist/components/switch/switch.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(ComponentNames.TABLE_NAME, require('@ulaval/modul-components/dist/components/table/table.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(ComponentNames.TABS_NAME, require('@ulaval/modul-components/dist/components/tabs/tabs.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(ComponentNames.TEMPLATE_NAME, require('@ulaval/modul-components/dist/components/template/template.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(ComponentNames.TEXT_FIELD_NAME, require('@ulaval/modul-components/dist/components/text-field/text-field.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(ComponentNames.TIMEPICKER_NAME, require('@ulaval/modul-components/dist/components/timepicker/timepicker.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(ComponentNames.TOOLTIP_NAME, require('@ulaval/modul-components/dist/components/tooltip/tooltip.meta.json'), CATEGORY_FORMS);
        meta.mergeComponentMeta(ComponentNames.UPLOAD_NAME, require('@ulaval/modul-components/dist/components/upload/upload.meta.json'), CATEGORY_FORMS);

        meta.mergeComponentMeta(DirectiveNames.RIPPLE_EFFECT_NAME, require('@ulaval/modul-components/dist/directives/ripple-effect/ripple-effect.meta.json'), CATEGORY_LAYOUT);
        meta.mergeComponentMeta(DirectiveNames.SCROLL_TO_NAME, require('@ulaval/modul-components/dist/directives/scroll-to/scroll-to.meta.json'), CATEGORY_NAVIGATION);
    }
}

export default new MetaAll();
